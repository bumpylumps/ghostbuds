import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import calendarStylez from '../src/styles/Calendar.module.css'


//ooo aahh we usin react-big-calendar for this

const localizer = momentLocalizer(moment)

const MyCalendar = (props) => {
    return (
        <div className={calendarStylez.calendar}>
            <Calendar 
                localizer={localizer}
                // events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
}


export default MyCalendar