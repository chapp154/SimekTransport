import React, { useEffect, useState } from "react";
import MonthList from "./MonthList";

const DateTable = () => {
	const [calendarDays, setCalendarDays] = useState([]);
	return (
		<div className="date__table">
			//TODO: setCalendarDays sort issue
			<MonthList calendarDays={calendarDays} setCalendarDays={setCalendarDays}></MonthList>
		</div>
	);
};

export default DateTable;