import React from 'react';
import CardList from './CardList';

	const ErrorBoundry = ({catchError, selectedRobots}) =>{
	 if(catchError){
		    return (<h1>Ooops. That is not good</h1>);
		}else{
	 		return (<CardList robots={selectedRobots} />);
	 	}
}

export default ErrorBoundry;