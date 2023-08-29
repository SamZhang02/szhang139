import info from '../info.json'

export function Navbar() {
  return (
    <div className="flex justify-end">
      <a href={info.resumeLink} className="text-white hover:scale-125 duration-150 p-5 pr-8 text-xl">Resume</a>
    </div>
  )
};

