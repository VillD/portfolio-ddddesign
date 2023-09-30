// import IconLight from '../../assets/img/svg/ligh-mode.svg'

export const ButtonIcon = ({ src, alt, className }) => {
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>
  )
}

export const ButtonText = ({ style, children, icon, href, download }) => {
  return (
    <>
      <a href={href} className={style} download={download}>
        {children}
        <img src={icon} />
      </a>
    </>
  )
}

export const ButtonSocial = ({ className, icon, href, alt }) => {
  return (
    <>
      <li
        className={
          className +
          ' hover:translate-y-[2px] hover:shadow-none active:translate-y-0 active:shadow-buttonsSocial select-none transition'
        }>
        <a href={href} target="_blank" className="p-2 inline-flex">
          <img className="w-5" src={icon} alt={alt} />
        </a>
      </li>
    </>
  )
}
