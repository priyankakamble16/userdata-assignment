import React from 'react'

const Usercard = ({name,role,location}) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-2xl p-4 w-64 text-center">
      <div className="text-5xl mb-2">👤</div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <p className="text-gray-500 mb-4">{location}</p>
      <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition">
        Contact
      </button>
    </div>
    </div>
  )
}

export default Usercard
