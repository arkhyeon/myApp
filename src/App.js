import React from "react";
// import PropTypes from 'prop-types';

//react 자동적으로 너의 class component의 render method를 실행
class App extends React.Component{
  state = {
    isLoading : true
  };
  render(){
    console.log("I'm render");
    return (
      const { isLoadging } = this.state;
      <div>
        {isLoading ? "Loading" : "we are ready"}
      </div>
    );
  }
}

export default App;
