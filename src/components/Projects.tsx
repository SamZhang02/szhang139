import { useState } from 'react'
import projects from '../projects.json'
import GitHubButton from 'react-github-btn';

const MEDIAPATH = process.env.PUBLIC_URL + "/assets/"

export function Projects() {
  return (
    <header className="project-page whitespace-normal">
      {projects.map((p) =>
        <ProjectBlock
          title={p.title}
          image={MEDIAPATH + p.imagePath}
          imageGIF={MEDIAPATH + p.imageGIFPath}
          desc={p.desc}
          gitLink={p.gitLink}
          projectLink={p.projectLink}
        />
      )}
    </header>
  )
}

function ProjectBlock({ title, image, imageGIF, desc, gitLink, projectLink }: { title: string, image: string, imageGIF: string, desc: string, gitLink?: string, projectLink?: string }) {
  const [imageSrc, setImageSrc] = useState(image)

  return (
    <div className='project-block max-w-md max-h-fit mx-auto bg-neutral-700 rounded-3xl shadow-lg flex-col'>
      <p className="text-white p-6 sm:text-xl text-3xl">{title}</p>
      <img src={imageSrc}
        className='flex-1 justify-center items-center mx-auto'
        onMouseEnter={() => setImageSrc(imageGIF)}
        onMouseLeave={() => setImageSrc(image)}
        alt={'image for ' + title}
        style={{ height: `${300}px`, width: 'auto' }} >
      </img>
      {gitLink != undefined ? <ProjectLinks gitLink={gitLink} /> : null}
      <p className='p-6 pt-0'>{desc}</p>
    </div>
  )
}

function ProjectLinks({ gitLink }: { gitLink: string }) {
  let out = [
    <GitHubButton href={gitLink}
      data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;"
      data-size='large'>
      Follow
    </GitHubButton>,
    <GitHubButton href={gitLink}
      data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;"
      data-icon="octicon-star"
      data-show-count="true"
      data-size='large'>
      Stars
    </GitHubButton>
  ]

  return <div className='p-4 pt-8 flex justify-evenly'>{out}</div>
}

