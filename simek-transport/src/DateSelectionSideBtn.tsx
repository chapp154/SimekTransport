type Props = {
	tableVisible: boolean,
	setTableVisible: () => void, 
}

const DateSelectionSideBtn: React.FC<Props> = (tableVisible, setTableVisible) => {
	const handleClick = (): void => {
	};

	return (
		<div className="date-button">
			<p>Datum</p>
		</div>
	);
};

export default DateSelectionSideBtn;