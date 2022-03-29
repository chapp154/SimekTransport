import DateSelectionSideBtn from "./DateSelectionSideBtn";
import DateSelectionTable from "./DateSelectionTable";
import React, { useState } from 'react';

const DateSelection: React.FC = () => {
	const [tableVisible, setTableVisible] = useState(true);
	return (
		<div>
			<p>{tableVisible}</p>
			<DateSelectionSideBtn tableVisible={tableVisible} setTableVisible={setTableVisible}/>
			{tableVisible && <DateSelectionTable/>}
		</div>
	);
};

export default DateSelection;