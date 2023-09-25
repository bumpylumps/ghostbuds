import footerStylez from '../src/styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStylez.main}>
        <p className={footerStylez.link}><a href="https://github.com/bumpylumps/ghostBuds" target="_blank">Find me on Github</a></p>
        <p>&#169; Bumpsites 10/2022</p>
        <p className={footerStylez.link}><a href="mailto:alexander.fulop.art@gmail.com"> Email me for questions, comments, concerns</a></p>
    </footer>
  )
}

export default Footer
