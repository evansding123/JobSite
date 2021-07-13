import Calendar from 'tui-calendar'; /* ES6 */

const createSched = (calendar, id, calendarId, title, category, date, start, end = null) => {
    calendar.createSchedules([
        {
            id: '1',
            calendarId: '1',
            title: title,
            category: 'time',
            dueDateClass: '',
            start: '2021-07-18T22:30:00+09:00'
        }
    ]);
}


export default createSched;