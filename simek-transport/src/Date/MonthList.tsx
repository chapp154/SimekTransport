import React, { ReactNode, useState } from 'react'

export default function MonthList() {
	type DateElements = () => ReactNode;

	const months: string[] = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
	const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
	const getMonths: DateElements = () => months.map((month, i) => <p onClick={(e: React.MouseEvent): void => handleMonthChange(e)} key={i} data-key={i}>{month}</p>);
	const getDays: DateElements = (tempDay = 1) => {
		const tempDate = new Date();
		tempDate.setMonth(currentMonth);
		let days: number[] = [];
		while (currentMonth === tempDate.getMonth()) {
			tempDate.setDate(tempDay);
			days = [...days, tempDay];
			tempDay++;
			tempDate.setDate(tempDay);
		}

		return <p>{days}</p>
		
	};


	function handleMonthChange(e: React.MouseEvent) {
		const element = e.target as HTMLElement;
		const dataKey = Number(element.attributes.getNamedItem("data-key")?.nodeValue);

		setCurrentMonth(dataKey);
		console.log(dataKey);
	}

	return (
		<div className="date__table-month">
			{getMonths()}
			{getDays()}
		</div>
	)
}
