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
 *  image: string,
 *  created_at: ISODate,
 * }} props.Product data for current product
 */

export default function ProductDetails({
  product
}) {
  const productCreatedAt = new Date(product.created_at)
  return (
    <div className='flex flex-col items-center border border-solid border-white p-4 m-4 rounded-xl'>
      <Image
        src={product.image!=null ? product.image : "https://bpncxdglixmzbnsbxhqw.supabase.co/storage/v1/object/sign/fumo-image/cirno_fumo___fanart_by_ashleychan_d_de4wbja-375w-2x.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmdW1vLWltYWdlL2Npcm5vX2Z1bW9fX19mYW5hcnRfYnlfYXNobGV5Y2hhbl9kX2RlNHdiamEtMzc1dy0yeC5qcGciLCJpYXQiOjE2OTcwNDMzNTYsImV4cCI6MTcyODU3OTM1Nn0.z_SdA5x8cUb4v-pEVRc6FwLDuzb07ly3Lao7EubjrVo&t=2023-10-11T16%3A55%3A56.996Z"}
        alt="Fumo Sample Image"
        className="p-2"
        width={300}
        height={60}
        priority
      />
      <h1 className="text-lg">{product.title}</h1>
      <p className='text-green-500'>{product.price}</p>
      <p>{product.description}</p>
      <p>{moment(productCreatedAt).format('DD/MM/YYYY HH:mm A')}</p>
      <Link href={{
        pathname: `/product/[id]`,
        query: {
          id: product.id,
        },
      }}
        as={`/products/${product.id}`} className='text-blue-500'>See more</Link>
    </div>
  )
}
