import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectList} = props
  const {projectTitle, description} = projectList
  const {imageUrl, duration, projectUrl} = projectList
  return (
    <div className="containerMain">
      <img className="projectImg" src={imageUrl} alt="project" />
      <div className="headingBox">
        <h1>{projectTitle}</h1>
        <div className="durationBox">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} rel="noreferrer" target="_blank">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
