"use client"
import Image from "next/image"
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { useState, useEffect, useRef } from "react";
import { useDropzone } from 'react-dropzone';
import { createProduct } from "../actions/product";
import { z } from "zod";

const initialState = {
    message: null,
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending} className="border border-black hover:bg-green-400 p-2 w-20">Add</button>
    )
}

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const ProductSchema = z.object({
    title: z.string().min(1),
    price: z.string().min(1),
    description: z.string().min(1),
})
const ImageSchema = z.object({
    images: z
        .any()
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, and .png formats are supported."
        ),
})

export default function AddProductForm() {
    const [reviewImages, setReviewImages] = useState([]);
    // const [state, formAction] = useFormState(clientAction, initialState)
    const imageList = useRef([]);

    const clientAction = async (formData) => {
        const result = ProductSchema.safeParse({
            title: formData.get('title'),
            price: formData.get('price'),
            description: formData.get('description'),
        })
        const imageResult = ImageSchema.safeParse({
            images: formData.getAll('images'),
        })
        if (!imageResult.success) {
            formData.delete('images')
        }
        console.log(imageResult)
        if (result.success) {
            await createProduct(formData)
        }
        else {

        }
    }

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            const dataTransfer = new DataTransfer();
            reviewImages.forEach((file) =>
                dataTransfer.items.add(file)
            )
            acceptedFiles.forEach((file) =>
                dataTransfer.items.add(file)
            )
            imageList.current.files = dataTransfer.files
            console.log(dataTransfer.files)
            console.log(imageList)
            setReviewImages((files) => [
                ...files,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, {
                        key: file.name + randomId(), // to allow adding files with same name
                        preview: URL.createObjectURL(file),
                    })
                ),
            ]);
        },
    });

    const removeFile = (file) => {
        setReviewImages((files) => {
            const newFiles = [...files];
            newFiles.splice(file, 1);
            const dataTransfer = new DataTransfer();
            newFiles.forEach((file) =>
                dataTransfer.items.add(file)
            )
            imageList.current.files = dataTransfer.files
            return newFiles;
        });
    };

    const thumbs = reviewImages.map((file, i) => (
        <div className="inline-flex border-2 w-80 h-80 p-4 border-solid mb-8 mr-8 box-border relative" key={file.key}>
            <div style={thumbInner}>
                <Image src={file.preview} style={img} alt='thumbnail' width={200} height={200} />
            </div>
            <button type="button" style={removeButton} onClick={() => removeFile(i)}>
                X
            </button>
        </div>
    ));

    useEffect(
        () => () => {
            reviewImages.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [reviewImages]
    );

    return (
        <div className="border-slate-700 bg-white px-8 py-16 rounded-xl min-w-fit">
            <h1 className="text-xl">Add a new product</h1>
            <form className="flex flex-col items-start justify-between p-4 gap-4" action={clientAction}>
                <section className="container">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input name="images" type="file" multiple={true} className="hidden" ref={imageList} />
                        <input {...getInputProps()} />
                        <label className="p-4 border-dashed border-4 border-gray-600 block cursor-pointer">Drag and drop, or click here to add images</label>
                    </div>
                    <aside style={thumbsContainer}>{thumbs}</aside>
                </section>
                <input type="text" name="title" className="border border-black bg-white mr-2 p-2 w-96"
                    placeholder="Title" />
                <input type="text" name="price" className="border border-black bg-white mr-2 p-2 w-96"
                    placeholder="Price" />
                <textarea type="text" name="description" className="border border-black bg-white mr-2 p-4 w-96"
                    placeholder="description" />
                <SubmitButton />
            </form>
        </div>
    )
}

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 300,
    height: 300,
    padding: 4,
    boxSizing: 'border-box',
    position: 'relative',
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
};

const removeButton = {
    color: 'red',
    position: 'absolute',
    right: 4,
    top: 4,
};
const randomId = () => (Math.random() + 2).toString(36).substring(7);


