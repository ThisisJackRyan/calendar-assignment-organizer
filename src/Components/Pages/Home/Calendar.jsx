import Day from "./Day";
import "./Calendar.css"



const Calendar = () => {

    const getDayOfWeek = (num) => {
        let weekday = "";
        switch(num){
            case 0: weekday = "Sunday"; break;
            case 1: weekday = "Monday"; break;
            case 2: weekday = "Tuesday"; break;
            case 3: weekday = "Wednesday"; break;
            case 4: weekday = "Thursday"; break;
            case 5: weekday = "Friday"; break;
            case 6: weekday = "Saturday"; break;
            default: weekday = "Error"; break;
        }
        return weekday;
    }
    const getMonthName = (num) => {
        let monthName
        switch(num){
            case 0: monthName = "January"; break;
            case 1: monthName = "February"; break;
            case 2: monthName = "March"; break;
            case 3: monthName = "April"; break;
            case 4: monthName = "May"; break;
            case 5: monthName = "June"; break;
            case 6: monthName = "July"; break;
            case 7: monthName = "August"; break;
            case 8: monthName = "September"; break;
            case 9: monthName = "October"; break;
            case 10: monthName = "November"; break;
            case 11: monthName = "December"; break;
            default: monthName = "Error"; break;
        }
        return monthName;
    }
    
    const date = new Date();

    const calendar = [];
    for(let i = 1; i < 31; i++){
        calendar.push(<Day  getWeekDay={getDayOfWeek} Date="2023-6-6" />)
    }
    return(
        <div>
            <div className="ThisMonthName">
                {getMonthName(date.getMonth())}
            </div>
            <div>
                {calendar}
            </div>
            
        </div>
    )
}

export default Calendar;