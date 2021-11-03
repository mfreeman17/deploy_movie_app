import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import MovieList from './MovieList.js';
import MovieHeading from './MovieHeading.js'

import   'react-router-dom';


import './App.css';

class Home extends React.Component {

  getMovieRequest = async () => {
    const url = "https://www.omdbapi.com/?s="+ this.state.search + "&apikey=283116eb"
    const response = await fetch(url);
    const movieJson = await response.json();
    this.setState({movies: movieJson.Search})
    console.log(this.state.search)
  }
  componentWillMount(){
    const watchlist = JSON.parse(localStorage.getItem("react-movie-app-watchlist"))
    if (watchlist){
      this.setState({watchlist: watchlist})
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevState.search !== this.state.search)
      this.getMovieRequest()
  }

  constructor(props) {
    super(props)
    this.state = {
       movies : [],
       search: "",
       watchlist : []
    }

  };
  goTo = (movie) => {
    const string ='movie/'+movie.imdbID
    console.log(movie.imdbID)
    this.props.history.push(string)
  }




  render (){
    return (
      <div className= 'container-fluid scroll' >
      <div className ='row'>
          <MovieHeading heading = "Movies" />
          <div className="col col-sm-2">
            <input className = "form-control"
              value = {this.state.search}
              onChange = {(event)=> this.setState({search: event.target.value}) }
             placeHolder= "Search"></input>
          </div>
        </div>
      <div className="row">
        <MovieList movies = {this.state.movies}
        handleClick= {this.goTo}/>
        </div>

        <div className='row d-flex align-items-center mt-4 mb-4'>
        				<MovieHeading heading='Watchlist' />
        			</div>
        			<div className='row'>
        				<MovieList
        					movies={this.state.watchlist}
        					handleClick = {this.goTo}
        				/>
        			</div>


      </div>

    );
  }
}

export default Home;
