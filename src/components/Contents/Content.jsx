import {
  CardEducation,
  CardHobbies,
  CardTech,
  CardProject,
} from '../Cards/Card'
import ArrowDown from '../../assets/img/svg/arrow-down.svg'
import ArrowUp from '../../assets/img/svg/arrow-up.svg'
import { ButtonIcon } from '../Buttons/ButtonIcon'
import { useState } from 'react'
import Diploma from '../../assets/img/svg/icon-diploma.svg'
import Pluzzle from '../../assets/img/svg/icon-puzzle.svg'
import Cascos from '../../assets/img/svg/icon-hobbie-cascos.svg'
import Code from '../../assets/img/svg/icon-hobbie-code.svg'
import Youtu from '../../assets/img/svg/icon-hobbie-youtu.svg'
import BroswerIcon from '../../assets/img/svg/browser-icon.svg'
import HTML from '../../assets/img/svg/icon-html.svg'
import CSS from '../../assets/img/svg/icon-css.svg'
import JS from '../../assets/img/svg/icon-javascript.svg'
import NODE from '../../assets/img/svg/icon-nodeJs.svg'
import REACT from '../../assets/img/svg/icon-react.svg'
import TAILWIND from '../../assets/img/svg/icon-tailwind.svg'
import MYSQL from '../../assets/img/svg/icon-mysql.svg'
import FIGMA from '../../assets/img/svg/icon-figma.svg'
import GIT from '../../assets/img/svg/icon-git.svg'
import VS from '../../assets/img/svg/icon-vs.svg'
import POSTMAN from '../../assets/img/svg/icon-postman.svg'
import PHOTO from '../../assets/img/svg/icon-photo.svg'
import Gamer from '../../assets/img/svg/icon-gamer.svg'

import DrumKit from '../../assets/img/capture-drumKit.jpeg'
import Oracle from '../../assets/img/capture-oracleChallenge.jpeg'
import YoutuClon from '../../assets/img/capute-youtuClon.jpeg'
import Organizador from '../../assets/img/capture-organizadorEquipos.png'
import Down from '../../assets/img/profile-down-3D.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export const ContentAboutMe = () => {
  const [cards, setCards] = useState([
    {
      id: '1',
      titleCard: 'Especializacion FrontEnd',
      age: '2023',
      course: 'Oracle Next Education',
      changeArrow: true,
    },
    {
      id: '2',
      titleCard: 'Responsive Web Design',
      age: '2021',
      course: 'FreeCodeCamp',
      changeArrow: true,
    },
    {
      id: '3',
      titleCard: 'Técnico en Computación',
      age: '2017 - 2020',
      course: 'Instituto Técnologico Publico "Trujillo" ',
      changeArrow: true,
    },
  ])

  const toggleOpenCard = (e) => {
    const newCards = cards.map((card) => {
      if (e.currentTarget.id === card.id) card.changeArrow = !card.changeArrow
      return card
    })
    setCards(newCards)
  }

  return (
    <div className="w-full">
      <div className="font-mont">
        <div className="max-w-screen-xl m-auto px-4">
          <p className="text-lg my-14">
            Me considero un apasionado de la informática, un estudiante
            comprometido con mi aprendizaje diario. Mi enfoque principal se
            centra en el desarrollo front-end. <br />
            Explora mi portafolio y descubre como mis habilidades y enfoque
            pueden ayudar a impulsar tu proyecto web al siguiente nivel. ¡Espero
            tener la oportunidad de trabajar juntos!
          </p>
        </div>
        <div className="h-full bg-[#F7F7F7] flex">
          <div className="w-full  max-w-screen-2xl gap-8 m-auto flex my-10 flex-col-reverse xl:flex-row">
            <div className="w-full my-5 xl:w-2/3 flex justify-center flex-col self-start gap-10">
              <div className="flex flex-col ">
                <h2 className="px-2 pt-4 font-semibold text-2xl flex gap-4 ">
                  _Educación <ButtonIcon src={Diploma} />
                </h2>

                <section className="mx-4 flex gap-10">
                  <Swiper
                    // install Swiper modules
                    spaceBetween={20}
                    slidesPerView={1}
                    grabCursor={true}
                    className=" select-none my-4 xl:m-4  h-full mySwiper"
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                    }}>
                    {cards.map((card) => {
                      return (
                        <SwiperSlide className=" pb-4 pr-2" key={card.id}>
                          <CardEducation
                            id={card.id}
                            change={toggleOpenCard}
                            titleCard={card.titleCard}
                            age={card.age}
                            course={card.course}
                            className={card.changeArrow ? '' : 'hidden'}
                            icon={`${card.changeArrow ? ArrowUp : ArrowDown}`}
                          />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </section>
              </div>

              <div className="flex flex-col ">
                <h2 className="px-2 pt-4 font-semibold text-2xl flex gap-4 items-center">
                  _Hobbies
                  <ButtonIcon className="w-8 h-8" src={Pluzzle}></ButtonIcon>
                </h2>
                <section className="flex mx-4 h-full  flex-row-reverse cursor-pointer">
                  <Swiper
                    // install Swiper modules
                    spaceBetween={50}
                    slidesPerView={1}
                    grabCursor={true}
                    className="select-none my-4 xl:m-4  h-full mySwiper W-1/2 "
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}>
                    <SwiperSlide className=" pb-4 pr-2">
                      <CardHobbies titleCard="Escuchar música" icon={Cascos} />
                    </SwiperSlide>

                    <SwiperSlide className=" pb-4 pr-2">
                      <CardHobbies titleCard="Videojuegos" icon={Gamer} />
                    </SwiperSlide>

                    <SwiperSlide className=" pb-4 pr-2">
                      <CardHobbies titleCard="Ver videos" icon={Youtu} />
                    </SwiperSlide>

                    <SwiperSlide className=" pb-4 pr-2">
                      <CardHobbies titleCard="Coding" icon={Code} />
                    </SwiperSlide>
                  </Swiper>
                </section>
              </div>
            </div>

            <div className="m-auto w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] bg-profile bg-cover bg-no-repeat image-profile relative">
              <ButtonIcon
                src={BroswerIcon}
                className={
                  ' w-1/3 h-1/3 w- md:w-2/5 md:h:2/5 xl:w-auto xl:h-auto absolute right-0 bottom-0 '
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ContentSkills = () => {
  const [cards, setCards] = useState(true)

  const toggleHiddenCard = () => {
    setCards(!cards)
  }
  return (
    <>
      <div className="w-full flex-1 flex flex-col">
        <div className=" font-mont flex-1 flex flex-col">
          <div className="max-w-screen-xl mx-auto px-4">
            <p className=" text-lg my-14">
              Aquí puedes ver mis habilidades, una de las fascinaciones del
              mundo de la informática son los cambios momentáneos de las
              tecnologías, pero trato de actualizar mis conocimientos todos los
              días y experimentar nuevas tecnologías.
            </p>
          </div>
          <div className="bg-[#F5E2A3] flex items-center flex-1 relative">
            <ul className={cards ? 'visible' : 'hidden'}>
              <li className="pan-color-html text-shadow--skills opacity-50 absolute font-extrabold xl:text-2xl md:top-28 md:right-1/4 xl:top-40 xl:right-1/3   invisible md:visible">
                HTML5
              </li>
              <li className="pan-color-css text-shadow--skills opacity-50 absolute font-extrabold xl:text-3xl md:top-1/3 md:left-32 xl:top-1/3 xl:left-60  invisible md:visible ">
                CSS
              </li>
              <li className="pan-color-js text-shadow--skills opacity-50 absolute font-extrabold xl:text-3xl md:top-1/4 md:right-20 xl:top-1/2 xl:right-40 invisible md:visible  ">
                ES6
              </li>
              <li className="pan-color-react text-shadow--skills opacity-50 absolute font-extrabold xl:text-2xl md:bottom-32 md:left-12 xl:bottom-32 xl:left-12  invisible md:visible ">
                REACT
              </li>
              <li className="pan-color-node text-shadow--skills opacity-50 absolute font-extrabold xl:text-xl md:bottom-2/4 md:right-1/4 xl:bottom-2/4 xl:right-1/4 invisible md:visible  ">
                NODEJS
              </li>
              <li className="pan-color-tw text-shadow--skills opacity-50 absolute font-extrabold xl:text-xl md:bottom-8 md:right-1/4 xl:bottom-8 xl:right-1/4 invisible md:visible  ">
                TAILWIND
              </li>
              <li className="pan-color-sql text-shadow--skills opacity-50 absolute font-extrabold xl:text-2xl md:bottom-2 md:right-1/2 xl:bottom-2 xl:right-1/2 invisible md:visible  ">
                <span>MY</span>SQL
              </li>
            </ul>

            <ul className={cards ? 'hidden' : 'visible'}>
              <li className="absolute font-extrabold xl:text-2xl xl:top-40 xl:right-1/3 text-shadow--skills pan-color-figma opacity-50 md:top-28 md:right-1/4">
                <span>F</span>
                <span>I</span>
                <span>G</span>
                <span>M</span>
                <span>A</span>
              </li>
              <li className="absolute font-extrabold xl:text-3xl xl:top-1/3 xl:left-60 text-shadow--skills pan-color-git opacity-50 md:top-1/3 md:left-32">
                GIT
              </li>
              <li className="absolute font-extrabold xl:text-3xl xl:top-1/2 xl:right-40 text-shadow--skills pan-color-vs opacity-50 md:top-1/4 md:right-20">
                VISUAL STUDIO
              </li>
              <li className="absolute font-extrabold xl:text-2xl xl:bottom-32 xl:left-12 text-shadow--skills pan-color-postman opacity-50 md:bottom-8 md:right-1/4">
                POSTMAN
              </li>
              <li className="absolute font-extrabold xl:text-xl xl:bottom-2/4 xl:right-1/4 text-shadow--skills pan-color-photo opacity-50 md:bottom-2 md:right-1/2">
                PHOTOSHOP
              </li>
            </ul>

            <div className="w-full max-w-screen-2xl m-auto p-12 flex flex-col gap-8 justify-center items-center ">
              <h2 className=" text-center font-bold text-3xl">
                Habilidades & Herramientas
              </h2>
              <div className=" text-center">
                <div className="h-16 flex justify-center items-center">
                  <h3
                    className={`${
                      cards ? 'inline-block' : 'hidden'
                    } md:text-lg`}>
                    Tecnologías con las que trabajo.
                  </h3>
                  <h3
                    className={`${
                      cards ? 'hidden' : 'inline-block'
                    } md:text-lg`}>
                    Herramientas con las que trabajo.
                  </h3>
                </div>
              </div>
              <div className="rounded-full mb-4 font-bold border-blackOut border-2 inline-flex justify-center items-center p-2 bg-goldenLion-400 gap-2 transition shadow-boxSkills hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                <button
                  onClick={toggleHiddenCard}
                  className={`${
                    cards
                      ? 'bg-emptiness outline-blackOut outline outline-2 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-buttonsMain transition'
                      : 'bg-transparent'
                  } py-4 px-6 md:text-lg rounded-full w-40`}>
                  Tecnologías
                </button>
                <button
                  onClick={toggleHiddenCard}
                  className={`${
                    cards
                      ? 'bg-transparent'
                      : ' bg-emptiness outline-blackOut outline outline-2 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-buttonsMain transition'
                  } py-4 px-6 md:text-lg rounded-full w-40`}>
                  Diseño
                </button>
              </div>

              <ul className="flex justify-center">
                <div
                  className={`${
                    cards ? 'flex flex-wrap justify-center' : 'hidden'
                  } `}>
                  <CardTech src={HTML} className={'bg-[#F16529]'}></CardTech>
                  <CardTech src={CSS} className={'bg-[#2965F1]'}></CardTech>
                  <CardTech src={JS} className={'bg-[#F7DF1E]'}></CardTech>
                  <CardTech src={NODE} className={'bg-[#F2F5DE]'}></CardTech>
                  <CardTech src={REACT} className={'bg-[#D9F4C7]'}></CardTech>
                  <CardTech
                    src={TAILWIND}
                    className={'bg-[#EAE8FF]'}></CardTech>
                  <CardTech src={MYSQL} className={'bg-[#E1CA96]'}></CardTech>
                </div>

                <div
                  className={`${
                    cards ? 'hidden' : 'flex flex-wrap justify-center'
                  } `}>
                  <CardTech src={FIGMA} className={' bg-emptiness'}></CardTech>
                  <CardTech src={GIT} className={'bg-[#F7F0F5]'}></CardTech>
                  <CardTech src={VS} className={'bg-[#C0F5FA]'}></CardTech>
                  <CardTech src={POSTMAN} className={'bg-[#DDE0BD]'}></CardTech>
                  <CardTech src={PHOTO} className={'bg-[#07A0C3]'}></CardTech>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const ContentProject = () => {
  return (
    <>
      <div className=" font-mont text-lg my-14 px-4">
        <p>
          Actualmente estoy disponible y estoy más que feliz de ayudar a
          construir y lanzar su producto y/o inicio. Puede ver y revise mi
          código.
        </p>
      </div>
      <div className="bg-[#F7F7F7] w-full flex flex-col items-center">
        <div className="flex gap-4 mx-auto p-2 w-full   lg:max-w-screen-lg">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            grabCursor={true}
            className="mySwiper p-4 "
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}>
            <SwiperSlide className="flex justify-center items-center">
              <CardProject
                src={DrumKit}
                title="DrumKit"
                link="https://github.com/VillD/Drum-Kit"
                demo="https://villd.github.io/Drum-Kit/">
                Este es un proyecto de práctica en el cual nos desafiamos ha
                realizar un drumk kit. En este desafío trato de demostrar mis
                habilidades de maquetado con Tailwind y JavaScript.
              </CardProject>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <CardProject
                src={Oracle}
                title="Encriptador de texto"
                link="https://github.com/VillD/oracle-challange"
                demo="https://villd.github.io/oracle-challange/">
                Esta es una solución al desafío del mensaje encriptado. En este
                desafío trato de demostrar las habilidades aprendidas en el
                programa de Oracle | ONE dado las clases por ALURA LATAM.
              </CardProject>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <CardProject
                src={YoutuClon}
                title="YoutuClon"
                link="https://github.com/VillD/youtube-clon"
                demo="https://villd.github.io/youtube-clon/">
                Este es un proyecto de práctica en el cual nos desafiamos ha
                realizar el Maquetado de YouTube. En este desafío trato de
                demostrar mis habilidades de maquetado con HTML y CSS.
              </CardProject>
            </SwiperSlide>

            <SwiperSlide
              className="flex justify-center items-center"
              link="https://github.com/VillD/org"
              demo="https://org-villd.vercel.app/">
              <CardProject src={Organizador} title="Organizador de equipos">
                Este es un proyecto de práctica en el cual nos desafiamos ha
                realizar un drumk kit. En este desafío trato de demostrar mis
                habilidades de maquetado con Tailwind y JavaScript.
              </CardProject>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="">
          <img src={Down} alt="" />
        </div>
      </div>
    </>
  )
}
