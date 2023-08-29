import info from '../info.json'

const MEDIAPATH = process.env.PUBLIC_URL + "/assets/"

export function SocialLinks() {
  return (
    <div className="flex justify-center">
      <SocialLink name={"GitHub"} image={"github.png"} link={info.githubLink} />
      <SocialLink name={"LinkedIn"} image={"linkedin.png"} link={info.LinkedinLink} />
    </div>
  );
}

function SocialLink({ name, image, link }: { name: string, image: string, link: string }) {
  return (
    <a href={link}>
      <div className="flex-col items-center justify-center p-3 group">
        <div className='flex justify-center items-center'>
          <img className="h-10 w-10 relative mx-auto top-3 group-hover:top-0 duration-150" src={MEDIAPATH + image}></img>
        </div>
        <p className='text-sm opacity-0 relative top-0 group-hover:top-2 group-hover:opacity-100 duration-150'>{name}</p>
      </div>
    </a>
  )
}

