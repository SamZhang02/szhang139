import { useState } from "react";
import { SocialLinks } from "./SocialLinks";
import info from '../info.json'

export function Header() {
  return (
    <header className="App-header">
      <Title />
      <SubTitle />
      <SocialLinks />
    </header>
  )
}

function Title() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const myName = info.title
  let interval: NodeJS.Timer
  const [Name, setName] = useState(myName)
  let iterations = 0;

  return (
    <div
      className="text-8xl font-semibold m-5 hover:bg-white hover:text-neutral-700"
      onMouseEnter={() =>
        interval = setInterval(() => {
          setName(Name.split("").map((letter, index) => {
            if (index < iterations) return letter
            return letters[Math.floor(Math.random() * 26)]
          }).join(""))
          iterations += 1 / 3;
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

function SubTitle() {

  return (
    <div>
      {info.subTitle}
    </div>
  )
}

