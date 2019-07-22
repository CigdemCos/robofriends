import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

  class App extends Component{

    constructor(){
      super();
      this.state={
         robots:[],
         searchfield: ''
      } //state means what describes our app, usually lives in parent component
       // console.log('constructor');
    }//const

    componentDidMount(){
     // console.log("check");
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>{
      return response.json();
     })
     .then(users=>this.setState({robots:users}));
    }

    onSearchChange=(event)=>{
     //console.log(event);
     //console.log(event.target.value);
    this.setState({searchfield:event.target.value})

    }//onsearchange

    render(){
      const {robots, searchfield}=this.state;
       const filteredRobots=robots.filter(robot=>{
       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
    
          if(!robots.length){
        return <h1>Loading</h1>
       } else{
         return(
         <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
         <SearchBox searchChange={this.onSearchChange}/>
         <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
        </div>
     );}
    
}//render
}//app

export default App;
