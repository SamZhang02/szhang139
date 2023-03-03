import React, { ReactComponentElement, useEffect, useState } from 'react';
import './App.css';
import { useSpring, animated } from "react-spring";
import GitHubButton from 'react-github-btn';

const MEDIAPATH = process.env.PUBLIC_URL + "/assets/"

function App() {
  return (
    <div 
    className="App z-10">
      <Navbar/>
      <Header/>
      <Cursor/>
      <Projects/>
      <TrademarkBar/>
    </div>
  );
}

function Header() {
  return(
    <header className="App-header">
      <Title/>
      <SubTitle/>
      <SocialLinks/>
    </header>
  )
}

function Title() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const myName = "SAM ZHANG"
  let interval: NodeJS.Timer
  const [Name, setName] = useState(myName)
  let iterations = 0;

  return (
    <div 
    className="text-8xl font-semibold m-5 hover:bg-white hover:text-neutral-700 "
    onMouseEnter = {() => 
        interval = setInterval(() =>{
          setName(Name.split("").map((letter,index) => {
              if (index < iterations) return letter
              return letters[Math.floor(Math.random()*26)]
            }).join(""))
            iterations += 1/3;
            if (iterations > myName.length) {
              clearInterval(interval)
              setName(myName)
            }
          }, 30)
    }>
      {Name}
    </div>
  )
}

function SubTitle(){
  return (
    <div>
      <div className="">
        Computer Science and Statistics student at <span className='hover:underline'><a href="https://mcgill.ca/">McGill University</a></span>.
      </div>
    </div>
  )
}

function Projects(){
  return (
    <header className="project-page">
      <ProjectBlock title={"Droove"} image={MEDIAPATH + "droove.png"} imageGIF = {MEDIAPATH + "droove.png"} desc={"CodeJam12: Best Beginner Hack\nWeb-app that generates a smart itiniary with pre-determined rest-stops based on user inputs"} gitLink = {"https://github.com/SamZhang02/DrooVE"} projectLink = {"https://github.com/SamZhang02/DrooVE"}/>
      <ProjectBlock title={"STONK"} image={MEDIAPATH + "stonk.png"} imageGIF = {MEDIAPATH + "stonk.gif"} desc={"Discord bot that allows for query of live and historical stock market information in Discord chatrooms."} gitLink = {"https://github.com/SamZhang02/STONK"} projectLink = {"https://top.gg/bot/1048012729711087626"}/>
      <ProjectBlock title={"LaTeX Algorithms for Obsidian"} image={MEDIAPATH + "latex_algo.png"} imageGIF = {MEDIAPATH + "latex_algo.gif"} desc={"Simple plugin for the markdown editor \"Obsidian\" to facilitates the process of notetaking algorithms, pseudocodes and mathematical proofs."} gitLink = {"https://github.com/SamZhang02/obsidian-latex-algorithms"} projectLink = {"obsidian://show-plugin?id=latex-algorithms"}/>
    </header>
  )
}

function ProjectBlock({title, image, imageGIF, desc, gitLink, projectLink}:{title:string,image:string,imageGIF:string,desc:string, gitLink:string, projectLink:string}){
  const [imageSrc, setImageSrc] = useState(image)

  return (
  <div className='max-w-md max-h-fit mx-auto bg-neutral-700 rounded-3xl shadow-lg flex-col'>
    <p className="text-white p-6 text-3xl">{title}</p>
    <a href = {projectLink} target="_blank">
      <img src={imageSrc} 
      className='flex-1 justify-center items-center mx-auto' 
      onMouseEnter={() => setImageSrc(imageGIF)}
      onMouseLeave={() => setImageSrc(image)}
      alt='image for {title}'>
      </img>
    </a> 
    <ProjectLinks gitLink={gitLink}/>
    <p className='p-6 pt-0'>{desc}</p>
  </div>
  )
}

function ProjectLinks({gitLink}:{gitLink:string}){
  let out = [
    <GitHubButton href={gitLink}
    data-color-scheme="no-preference: dark_dimmed; light: light; dark: dark_dimmed;" 
    data-size='large'>
      Follow
    </GitHubButton>,
    <GitHubButton href={gitLink}
    data-color-scheme="no-preference: dark_dimmed; light: light; dark: dark_dimmed;" 
    data-icon="octicon-star" 
    data-show-count="true" 
    data-size='large'>
      Stars
    </GitHubButton>
  ]

  return <div className='p-4 pt-8 flex justify-evenly'>{out}</div>
}

function Navbar() {
  return (
    <div className="flex justify-end">
      <a href="" className="text-white hover:scale-125 duration-150 p-5 pr-8 text-xl">Resume</a>
    </div>
)};

function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: { clientX: any; clientY: any; }) {
      setMousePos({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorSpring = useSpring({
    to: { left: `${mousePos.x}px`, top: `${mousePos.y}px` },
    config: { tension: 2000, friction:800},
  });

  return (
    <animated.div
      id="cursor-shadow"
      className="rounded-full"
      style={cursorSpring}
    ></animated.div>
  );
}

function TrademarkBar() {
  return (
    <div className="bg-neutral-700 p-3 mt-10">
      <div className="">
        <div className="text-white">© 2023 Sam Zhang. All rights reserved</div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center">
      <SocialLink name={"GitHub"}image={"github.png"} link={"https://www.github.com/SamZhang02"}/>
      <SocialLink name={"LinkedIn"}image={"linkedin.png"} link={"https://www.linkedin.com/in/zhang-sam"}/>
    </div>
  );
}

function SocialLink({name, image, link}: {name:string, image:string, link:string}) {
  return (
    <a href={link}>
      <div className="flex-col items-center justify-center p-3 group">
        <div className='flex justify-center items-center'>
          <img className="h-10 w-10 relative mx-auto top-3 group-hover:top-0 duration-150" src={MEDIAPATH + image}></img>
        </div>
        <p className='text-sm opacity-0 relative top-0 group-hover:top-2 group-hover:opacity-100 duration-150'>{name}</p>
    </div>
  </a>
)}

export default App;
