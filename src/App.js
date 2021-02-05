import React from "react";
// import PropTypes from 'prop-types';

//react 자동적으로 너의 class component의 render method를 실행
class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count:0
  };
  add = () => {
    this.setState(current => ({count: current.count+ 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count-1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just update");
  }
  componentWillUnmount(){
    console.log("component unmount");
  }
  render(){
    console.log("I'm render");
    return (
      <div>
        <h1>number : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
