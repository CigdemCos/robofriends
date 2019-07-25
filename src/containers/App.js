import React,{Component} from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
const mapStateToProps = state =>{
   return{
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
   }
}

//dispatch (about flux) is what triggers the action, so an action is just an object
//In order to send this action we need smt called dispatch. so it gets dispatched into the reducer.
//So this dispatch can now be used to send actions, so the reducers are aware of it
const mapDispatchToProps = (dispatch) =>{
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) //requestRobots(dispatch)
  }
}

  class App extends Component{

    componentDidMount(){

     this.props.onRequestRobots();
   
    }

    render(){
      const {searchField, onSearchChange, robots, isPending, error } =this.props;
      const filteredRobots=robots.filter(robot=>{
       return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
   
            return isPending?
              <h1>Loading</h1>:
             (
              <div className='tc'>
               <h1 className='f2'>RoboFriends</h1>
               <SearchBox searchChange={onSearchChange}/>
               <Scroll>
                 <ErrorBoundry catchError ={error} selectedRobots={filteredRobots}/>
              </Scroll>
             </div>
            );
    
}//render
}//app

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
