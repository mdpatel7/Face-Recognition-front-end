import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className = 'mt0 white f3'>
				{`${name}, your rank is ...`}
			</div>
			<div className = 'mt0 white f2'>
				{entries}
			</div>
		</div>	
	);
}
export default Rank;