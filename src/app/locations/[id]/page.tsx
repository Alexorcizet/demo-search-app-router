'use client'
import Image from 'next/image'
import Link from 'next/link'
import { places } from '../../data.js'

import { useParams } from 'next/navigation'

console.log(places)

export default function ExampleClientComponent() {
  const params = useParams()
  const locationIdx = places.findIndex((place) => place.id === +params.id)
  const location = places[locationIdx]

  return (
    <section>
      <h1>{location.city}</h1>
      <Image
        src={location.imgURL}
        alt={`${location.city} image`}
        width={500}
        height={500}
      ></Image>
      <p>{location.info}</p>
      <Link href="/">go back</Link>
    </section>
  )
}
