import React from 'react'
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link';

/**
 * @param {object} props
 * @param {{
 *  title: string,
 *  description: string,
 *  available: boolean,
 *  images: string, 
 *  created_at: ISODate,
 * }} props.Product data for current product
 */

export default function Product({
  product
}) {
  const productCreatedAt = new Date(product.created_at)
  const productImages = JSON.parse(product.images)
  return (
    <div className='flex flex-col items-center border border-solid border-slate-400 rounded-xl shadow-xl pb-4'>
      <div className='items-center relative group z-auto hover:z-10 m-2'>
        <Image
          src={productImages !== null && productImages[2] ? productImages[2] : "https://bpncxdglixmzbnsbxhqw.supabase.co/storage/v1/object/sign/fumo-image/cirno_fumo___fanart_by_ashleychan_d_de4wbja-375w-2x.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmdW1vLWltYWdlL2Npcm5vX2Z1bW9fX19mYW5hcnRfYnlfYXNobGV5Y2hhbl9kX2RlNHdiamEtMzc1dy0yeC5qcGciLCJpYXQiOjE2OTcwNDMzNTYsImV4cCI6MTcyODU3OTM1Nn0.z_SdA5x8cUb4v-pEVRc6FwLDuzb07ly3Lao7EubjrVo&t=2023-10-11T16%3A55%3A56.996Z"}
          alt="Product image"
          className="border border-slate-400 transition transform group-hover:-translate-x-52 group-hover:-translate-y-10 group-hover:-rotate-12 duration-500 rounded-2xl"
          width={280}
          height={60}
        />
        <div className='absolute inset-0'>
          <Image
            src={productImages !== null && productImages[1] ? productImages[1] : "https://bpncxdglixmzbnsbxhqw.supabase.co/storage/v1/object/sign/fumo-image/cirno_fumo___fanart_by_ashleychan_d_de4wbja-375w-2x.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmdW1vLWltYWdlL2Npcm5vX2Z1bW9fX19mYW5hcnRfYnlfYXNobGV5Y2hhbl9kX2RlNHdiamEtMzc1dy0yeC5qcGciLCJpYXQiOjE2OTcwNDMzNTYsImV4cCI6MTcyODU3OTM1Nn0.z_SdA5x8cUb4v-pEVRc6FwLDuzb07ly3Lao7EubjrVo&t=2023-10-11T16%3A55%3A56.996Z"}
            alt="Product image"
            className="border border-slate-400 rounded-2xl"
            width={280}
            height={60}
          />
          <Link href={{
            pathname: `/product/[id]`,
            query: {
              id: product.id,
            },
          }}
            as={`/products/${product.id}`} className='absolute inset-0  text-blue-400 text-center'>See more</Link>
        </div>
        <Image
          src={productImages !== null && productImages[0] ? productImages[0] : "https://bpncxdglixmzbnsbxhqw.supabase.co/storage/v1/object/sign/fumo-image/cirno_fumo___fanart_by_ashleychan_d_de4wbja-375w-2x.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmdW1vLWltYWdlL2Npcm5vX2Z1bW9fX19mYW5hcnRfYnlfYXNobGV5Y2hhbl9kX2RlNHdiamEtMzc1dy0yeC5qcGciLCJpYXQiOjE2OTcwNDMzNTYsImV4cCI6MTcyODU3OTM1Nn0.z_SdA5x8cUb4v-pEVRc6FwLDuzb07ly3Lao7EubjrVo&t=2023-10-11T16%3A55%3A56.996Z"}
          alt="Product image"
          className="border border-slate-400 absolute inset-0 transition transform group-hover:translate-x-52 group-hover:translate-y-20 group-hover:rotate-12 duration-700 rounded-2xl "
          width={280}
          height={60}
          priority
        />
      </div>
      <h1 className="text-lg">{product.title}</h1>
      <p className='text-green-500'>{product.price}</p>
    </div>
  )
}
