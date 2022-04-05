import React, { ReactNode, useState } from 'react'

export default function MonthList() {
	type DateElements = () => ReactNode;
	type EventObject = {
		target: object
	}

	const months: string[] = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
	const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
	const getMonths: DateElements = () => months.map((month, i) => <p onClick={handleMonthChange} key={i}>{month}</p>);
	const getDays: DateElements = (tempDay = 1) => {
		const tempDate = new Date();
		let days: number[] = [];
		while (currentMonth === tempDate.getMonth()) {
			tempDate.setDate(tempDay);
			days = [...days, tempDay];
			tempDay++;
			tempDate.setDate(tempDay);
		}

		return <p>{days}</p>
		
	};

	function handleMonthChange(e: EventObject) {
		//setCurrentMonth();
		console.log(e.target);
	}

	return (
		<div className="date__table-month">
			{getMonths()}
			{getDays()}
		</div>
	)
}
