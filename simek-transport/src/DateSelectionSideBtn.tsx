import React, { useState } from 'react';

const DateSelectionSideBtn = (props: object) => {
	let [tableVisible, setTableVisible] = useState(false);
	const handleClick = (): void => {
		console.log(props.test)
	};

	return (
		<div className="date-button">
			<p>Datum</p>
		</div>
	);
};

export default DateSelectionSideBtn;