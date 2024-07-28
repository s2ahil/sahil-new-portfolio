import React from 'react'
import ImageCard from './ImageCard';
const CardContent = [
    { Image: "https://github.com/s2ahil/PriceWise-nextJs-/assets/101473078/c89d1cf1-9fa2-48c6-90f7-29b430c579e5", Name: "Price wise", LiveLink: "https://price-wise-next-js-delta.vercel.app/", Desc: "website aim to compare prizes of amazon product. tech stack - next js 14", Repo: "https://github.com/s2ahil/PriceWise-nextJs-/tree/main" },
    { Image: "https://github.com/s2ahil/promptShare/assets/101473078/65778eae-3845-4e08-b5f0-ccc756bff7c3", Name: "share prompts", LiveLink: "https://prompt-share-1tuo-f89tjwxhz-s2ahil.vercel.app/", Desc: "Website to share prompts", Repo: "https://github.com/s2ahil/promptShare" },
    { Image: "https://github.com/s2ahil/nit-raipur-2.0/assets/101473078/5b0dd2b1-e323-49fe-a240-a8039e4b0a07", Name: "Kisan Mitra (react + fast api)", LiveLink: "https://nit-raipur-2-0.vercel.app/", Desc: "A chatbot to help farmer resolve their doubts regarding agricultural schemes", Repo: "https://github.com/s2ahil/nit-raipur-2.0" },
    { Image: "https://github.com/s2ahil/pet-me-frontend/assets/101473078/28d69014-e646-4239-8fdf-9bfca5f0ffc0", Name: "Pet Me (react + express)", LiveLink: "https://pet-me-frontend.vercel.app/", Desc: "A platform to rent or get paid to rent pets", Repo: "https://github.com/s2ahil/pet-me-frontend" },
  ];


const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex flex-col items-center py-10">
    <a href="/" className="absolute top-8 left-8 text-white">Home</a>
    <h1 className="text-4xl font-bold text-white mb-10">PROJECTS</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-10">
      {CardContent.map((project, index) => (
        <ImageCard
          key={index}
          ImageLink={project.Image}
          Name={project.Name}
          LiveLink={project.LiveLink}
          Desc={project.Desc}
          Repo={project.Repo}
        />
      ))}
    </div>
  </div>
  )
}

export default Projects