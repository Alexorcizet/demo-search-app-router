import Image from 'next/image'
import Location from '../locations/[id]/page'
import Link from 'next/link'

export default function Locations({
  locations,
}: {
  locations: {
    id: number
    city: string
    info: string
    imgURL: string
  }[]
}) {
  console.log(locations)
  return (
    <section>
      <h1>Search results</h1>
      <ul className=" grid grid-rows-2 grid-cols-2 gap-0.5 justify-center">
        {locations?.map((location, idx) => {
          return (
            <Link href={`/locations/${location.id}`} key={location.id}>
              <li className="w-80">
                {idx + 1}.
                <Image
                  src={location.imgURL}
                  width={200}
                  height={200}
                  alt={`${location.city} image`}
                />
                <p>{location.city}</p>
                <p>{location.info}</p>
                {/* <Location location={location} /> */}
              </li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}
