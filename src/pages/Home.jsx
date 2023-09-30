import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import AboutMe from './AboutMe'
import Project from './Project'
import Skills from './Skills'

function Home() {
  return (
    <>
      <Main />
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Project></Project>
    </>
  )
}

export default Home
