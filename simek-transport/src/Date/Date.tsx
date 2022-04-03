import DateSelectionSideBtn from "./SideBtn";
import DateSelectionTable from "./Table";
import React, { useState } from 'react';

const DateSelection = () => {
	const [tableVisible, setTableVisible] = useState(false);
	
	return (
		<div className="date">
			<p>{tableVisible}</p>
			<DateSelectionSideBtn tableVisible={tableVisible} setTableVisible={setTableVisible}/>
			{tableVisible && <DateSelectionTable/>}
		</div>
	);
};

export default DateSelection;