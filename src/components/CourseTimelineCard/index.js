import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, duration, description, tagsList} = courseList
  return (
    <div>
      <div className="headingBox">
        <h1>{courseTitle}</h1>
        <div className="durationBox">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(ele => (
          <li>
            <p>{ele.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
