import React from "react";
import axios from "axios";
// import PropTypes from 'prop-types';

//react 자동적으로 너의 class component의 render method를 실행
class App extends React.Component{
  state = {
    isLoading : true,
    movies:[]
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount(){
    this.getMovies();
  };
  render(){
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We Are Ready"}
      </div>
    );
  }
}

export default App;
