"use server"

import supabase from "@/utils/supabase"
import { revalidatePath } from "next/cache";

const random = () => (Math.random() + 2).toString(36).substring(7);

const initialState = {
    message: null,
}

export const createProduct = async (product) => {
    const imagePaths = []
    const publicUrls = []
    try {
        const { title, price, description } = Object.fromEntries(product.entries())
        const images = product.getAll('images');
        for (const image of images) {
            const imagePath = `public/${title}/${image.name + random()}`
            const uploadImagesResult = await supabase.storage
                .from('fumo-image')
                .upload(imagePath, image, {
                    cacheControl: '3600',
                    upsert: false
                })
            if (uploadImagesResult.error !== null) {
                return uploadImagesResult.error
            } else {
                imagePaths.push(imagePath)
            }
        }
        for (const path of imagePaths) {
            const { data } = await supabase.storage.from('fumo-image').getPublicUrl(path)
            console.log(data)
            if (!data.publicUrl) {
                await supabase.storage
                    .from('fumo-image')
                    .remove([path])
                return { statusCode: 503 }
            }
            else {
                publicUrls.push(data.publicUrl)
            }
        }
        const addNewProduct = await supabase.from('products').insert({ title, price, description, images: publicUrls })

        if (addNewProduct.error !== null) {
            return addNewProduct.error.message
        } else {
            revalidatePath('/');
            return addNewProduct.data
        }
    } catch (e) {
        return { statusCode: 503 }
    }
}