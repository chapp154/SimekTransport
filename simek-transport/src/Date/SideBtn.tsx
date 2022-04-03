import React from "react";

type Props = {
	tableVisible: boolean,
	setTableVisible: (val: boolean) => void, 
}

const DateSelectionSideBtn = ({tableVisible, setTableVisible}: Props) => {
	const handleClick = (): void => {
		setTableVisible(!tableVisible);
	};
	
	return (
		<div className="date__button">
			<button onClick={handleClick}>Datum</button>
		</div>
	);
};

export default DateSelectionSideBtn;
