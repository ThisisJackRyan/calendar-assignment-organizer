


const Day = (props) => {

    const date = new Date(props.Date);//Year, Month, Day
                                    //Year , Month-1, Day
    return (
        <div className="container">
            <div className="dayBox">
                <div className="dayOfTheWeek">
                {
                    props.getWeekDay(date.getDay())
                }
                </div>
                <div className="DateOfTheDay">
                    <span>{date.getDate()}</span>
                </div>
                <div className="content">
                    
                </div>
            </div>
        </div>
    )
}

export default Day;
