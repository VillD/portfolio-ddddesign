import { ButtonIcon } from '../Buttons/ButtonIcon'

export const CardEducation = ({
  titleCard,
  age,
  course,
  icon,
  alt,
  change,
  id,
  className,
}) => {
  return (
    <article
      className={` flex flex-col bg-[#EAAD8A] py-2 border-blackOut border-2 rounded-md shadow-boxAbout `}>
      <h1
        className="flex gap-8 justify-between mx-4 text-xl font-medium mb-2 cursor-pointer select-none"
        onClick={change}
        id={id}>
        {titleCard} <ButtonIcon src={icon} alt={alt}></ButtonIcon>
      </h1>
      <span className=" text-sm italic mx-4">{age}</span>

      <hr className={`${className} mb-4 border-blackOut `}></hr>
      <footer className={`${className} text-center italic mx-4`}>
        {course}
      </footer>
    </article>
  )
}

export const CardHobbies = ({ titleCard, icon, alt }) => {
  return (
    <article className=" flex flex-col bg-[#BBD700] py-2 border-blackOut border-2 rounded-md shadow-boxAbout">
      <h1 className="flex justify-evenly text-xl items-center select-none font-medium">
        {titleCard} <ButtonIcon src={icon} alt={alt}></ButtonIcon>
      </h1>
    </article>
  )
}

export const CardTech = ({ src, alt, className }) => {
  return (
    <>
      <li
        className={`${className} p-1 m-4 shadow-boxSkills flex items-center justify-center rounded-md w-28 h-28 border-blackOut border-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition select-none`}>
        <img src={src} alt={alt} />
      </li>
    </>
  )
}

export const CardProject = ({
  src,
  alt,
  className,
  title,
  children,
  link,
  demo,
}) => {
  return (
    <article className="flex flex-col border-blackOut border-2 shadow-boxProjects rounded-lg w-96 h-full transition hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
      <span className=" p-2 text-lg font-semibold bg-[#AABF86]  rounded-t-lg border-blackOut border-b-2">
        Vitrina
      </span>
      <div className="  h-56 ">
        <img className=" w-full h-full" src={src} alt={alt} />
      </div>
      <div className="p-2 border-blackOut border-t-2 flex flex-col gap-2 bg-[#F5EBD7] border-b-2 flex-1">
        <h1 className=" text-2xl font-bold">{title}</h1>
        <p className=" font-light text-justify">{children}</p>

        <div className=" flex gap-4 m-2 rounded-lg">
          <a
            className=" text-center w-20 border-blackOut rounded border-2 p-2 transition hover:-translate-x-[2px] hover:-translate-y-[2px] active:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-buttonsMain active:shadow-buttonsMain"
            href={link}
            target="_blank">
            GitHub
          </a>
          <a
            className="text-center w-20 bg-emptiness border-blackOut rounded border-2 p-2 transition  hover:-translate-x-[2px] hover:-translate-y-[2px] active:-translate-x-[2px] hover:-translate-y-[2px]  hover:shadow-buttonsMain active:shadow-buttonsMain"
            href={demo}
            target="_blank">
            Demo
          </a>
        </div>
      </div>
    </article>
  )
}
