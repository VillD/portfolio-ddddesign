import '../../index.css'
import FirstProfile3D from '../../assets/img/profile-3D.png'
import { ButtonSocial, ButtonText } from '../Buttons/ButtonIcon'
import IconContact from '../../assets/img/svg/icon-briefcase.svg'
import IconCv from '../../assets/img/svg/icon-cv.svg'
import IconGitHub from '../../assets/img/svg/icon-github.svg'
import IconIg from '../../assets/img/svg/icon-ig.svg'
import IconLinkendin from '../../assets/img/svg/icon-linkedin.svg'
import IconCodePend from '../../assets/img/svg/icon-codepen.svg'
import { Typewriter } from 'react-simple-typewriter'
import CvArchivo from '../../assets/cv/Curriculum_Rodriguez_Villegas_Lizandro_Daniel.pdf'
import SecondProfile3D from '../../assets/img/profile-hello.png'

const Main = () => {
  return (
    <>
      <main className="bg-goldenLion-400 min-h-[calc(100vh-66px)] flex items-center">
        <div className="w-full relative z-10 gap-8 flex-col-reverse md:flex-row flex justify-center items-center md:gap-10 h-full px-4 lg:px-10 xl:px-28">
          {/* Texto y botones*/}
          <div className=" max-w-screen-2xl flex flex-1 flex-col h-1/2 self-end mx-auto">
            <h1 className="text-2xl lg:leading-tight md:text-3xl lg:text-4xl xl:text-6xl tracking-wider text-shadow font-mont font-black">
              <span className="block mb-2 ">¡HEY!</span>
              <span className="block mb-2">MI NOMBRE ES</span>
              <span className="block mb-2 pan-purple">DANIEL RODRIGUEZ.</span>
              <span className="">SOY</span>
              <div className="inline pan-purple">
                <Typewriter
                  words={[
                    ' DESARROLLADOR WEB.',
                    ' DISEÑADOR WEB.',
                    ' DESARROLLADOR FRONT-END.',
                  ]}
                  cursorColor="#fff"
                  cursorStyle={'<'}
                  cursorBlinking={false}
                  loop={false}
                  typeSpeed={120}
                  cursor
                />
                <span className=" bg-blackOut"></span>
              </div>
            </h1>

            <div className="mt-8 flex gap-4 font-mont">
              <ButtonText
                style={
                  'bg-mellowMelon text-sm flex py-2 px-3 border-2 transition border-blackOut items-center text-emptiness rounded-lg font-medium shadow-buttonsMain font-mont hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                }
                href="mailto:rodriguezvillegasdl@gmail.com"
                icon={IconContact}>
                <span className=" mr-2 text-lg font-mont font-bold ">
                  Contacto
                </span>
              </ButtonText>

              <ButtonText
                style={
                  'bg-emptiness text-sm flex py-2 px-3 border-2 transition border-blackOut items-center text-blackOut rounded-lg font-medium shadow-buttonsMain font-mont hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                }
                href={CvArchivo}
                icon={IconCv}>
                <span className=" mr-2 text-lg font-bold text-blackOut">
                  Curriculum
                </span>
              </ButtonText>
            </div>
          </div>
          {/* last:hidden hover:last:block hover:first:hidden */}
          {/* Imagen 3d*/}
          <div className="relative before:block before:w-full before:h-2/3 before:bg-[#FFD056] before:border-4 before:border-blackOut before:absolute before:bottom-2 before:shadow-boxImage">
            <img
              className="relative z-10 w-44 md:w-58 lg:w-64 "
              onMouseOver={(e) => (e.currentTarget.src = SecondProfile3D)}
              onMouseOut={(e) => (e.currentTarget.src = FirstProfile3D)}
              src={SecondProfile3D}
              alt=""
            />
          </div>
          {/* Botones de redes sociales*/}
          <section className="hidden md:flex flex-col gap-8">
            <ul className="flex flex-col gap-6">
              <ButtonSocial
                className=" bg-emptiness rounded-full border-blackOut border-2 shadow-buttonsSocial"
                alt=""
                icon={IconGitHub}
                href="https://github.com/VillD"
              />
              <ButtonSocial
                className=" bg-emptiness rounded-full border-blackOut border-2 shadow-buttonsSocial"
                alt=""
                icon={IconIg}
                href="https://www.instagram.com/ddaniel.vill/"
              />
              <ButtonSocial
                className=" bg-emptiness rounded-full border-blackOut border-2 shadow-buttonsSocial"
                alt=""
                icon={IconLinkendin}
                href="https://www.linkedin.com/in/dani-villegas/"
              />
              <ButtonSocial
                className=" bg-emptiness rounded-full border-blackOut border-2 shadow-buttonsSocial"
                alt=""
                icon={IconCodePend}
                href="https://codepen.io/dDesing"
              />
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default Main
