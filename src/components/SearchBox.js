import React from 'react';
//we are using destructuring here: ({..})
//-allows us to grab the props object and grab its properties.
const SearchBox=({searchChange})=>{
	return(
		<div className='pa2'>
		 <input className='pa3 ba b--green bg-lightest-blue' 
		 type='search' 
		 placeholder='search robots'
		 onChange={searchChange}
		  />
		</div>
	);
}

export default SearchBox;