import React, { useEffect, useState } from "react";
import MonthList from "./MonthList";

const DateTable = () => {
	const [calendarDays, setCalendarDays] = useState<number[]>([]);
	return (
		<div className="date__table">
			<MonthList calendarDays={calendarDays} setCalendarDays={setCalendarDays}></MonthList>
			// TODO Create component with calendarDay and loop 
			{calendarDays.length > 0 && <p>{calendarDays}</p>}
		</div>
	);
};

export default DateTable;