// components/ImageCard.js
import React from 'react'
import Image from 'next/image'

const ImageCard = ({ ImageLink, Name, LiveLink, Desc, Repo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
      <div className="relative h-48">
        <Image
          src={ImageLink}
          alt={Name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{Name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{Desc}</p>
        <div className="flex justify-between items-center mt-auto">
          <a 
            href={LiveLink} 
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a 
            href={Repo} 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ImageCard