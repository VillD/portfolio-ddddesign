import Title from '../Titles/Title'
import { ContentSkills } from '../Contents/Content'

const SectionSkills = ({ title }) => {
  return (
    <section className="w-full bg-goldenLion-400 min-h-[calc(100vh-66px)] flex flex-col justify-start items-center">
      <Title
        className="mt-10 font-mont text-4xl z-10 inline relative font-extrabold before:inline-block before:w-full before:h-1/3 before:bg-emptiness before:absolute before:bottom-0 before:-z-10"
        title={title}></Title>
      <ContentSkills></ContentSkills>
    </section>
  )
}

export default SectionSkills
