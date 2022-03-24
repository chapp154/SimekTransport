import DateSelectionSideBtn from "./DateSelectionSideBtn";
import DateSelectionTable from "./DateSelectionTable";
import React, { useState } from 'react';


// Trying to find out how to pass props to component
interface Props {
	tableVisible: boolean;
	setTableVisible: boolean;
}

const DateSelection = ({tableVisible, setTableVisible} : Props) => {
	[tableVisible, setTableVisible] = useState<boolean>(false);

	return (
		<div>
			<DateSelectionSideBtn tableVisible/>
			{tableVisible && <DateSelectionTable/>}
		</div>
	);
};

export default DateSelection;