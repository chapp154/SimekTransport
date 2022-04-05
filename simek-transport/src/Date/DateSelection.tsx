import DateButton from "./DateButton";
import DateTable from "./DateTable";
import React, { useState } from 'react';

const DateSelection = () => {
	const [tableVisible, setTableVisible] = useState(false);
	
	return (
		<div className="date">
			<p>{tableVisible}</p>
			<DateButton tableVisible={tableVisible} setTableVisible={setTableVisible}/>
			{tableVisible && <DateTable/>}
		</div>
	);
};

export default DateSelection;