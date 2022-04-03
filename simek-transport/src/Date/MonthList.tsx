import React, { ReactNode, useState } from 'react'

export default function Month() {
	type DateElements = () => ReactNode;

	const months: string[] = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
	const dateNow = new Date();
	const [currentMonth, setCurrentMonth] = useState<number>(dateNow.getMonth());
	const getMonths: DateElements = () => months.map((month, i) => <p key={i}>{month}</p>);
	const getDays: DateElements = () => {
		let tempDay = 1;
		
	};

	const testDate = 


	console.log(new Date());

	return (
		<div className="date__table-month">
			{getMonths()}
		</div>
	)
}
