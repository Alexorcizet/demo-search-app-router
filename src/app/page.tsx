'use client'

import { Children, FormEvent, useState } from 'react'
import Locations from './components/locations'

export default function Home() {
  const [locations, setLocations] = useState([])
  const [searchTxt, setSearchTxt] = useState('')
  const onSearch = async (e: FormEvent) => {
    if (searchTxt === undefined || searchTxt.length <= 0) {
      alert('Enter a search prompt')
      return
    } else {
      e.preventDefault()
      const res = await fetch('api/locations', {
        method: 'GET',
      })
      const data = await res.json()
      setLocations(data)
    }
  }
  const handleChange = (txt: string) => {
    setSearchTxt(txt)
  }
  return (
    <main>
      <form
        onSubmit={(e) => onSearch(e)}
        className="flex justify-center rounded text-black-500 bg-gray-900	"
      >
        <input
          type="text"
          className="form-input h-6 p-5 m-5 rounded-md font-bold"
          placeholder="Enter your search"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white px-2.5 py-2 h-5/6 border border-blue-500 hover:border-transparent rounded self-center"
        >
          search
        </button>
      </form>
      {locations.length > 0 ? (
        <>
          <Locations locations={locations} />
        </>
      ) : (
        <></>
      )}
    </main>
  )
}
