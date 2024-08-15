import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(ele => {
          if (ele.categoryId === 'COURSE') {
            return <CourseTimelineCard courseList={ele} />
          }
          return <ProjectTimelineCard projectList={ele} />
        })}
      </Chrono>
    </>
  )
}

export default TimelineView
