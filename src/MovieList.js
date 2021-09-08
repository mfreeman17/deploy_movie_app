import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
    console.log("movies", this.props.movies)
    if (this.props.movies){
      return (
        <>
          {this.props.movies.map((movie, index) => (

            <div className='image-container d-flex justify-content-start'
            onClick={() =>{this.props.handleClick(movie)}}>
              <img src={movie.Poster} alt={movie.Title}></img>
              <div

              >
              </div>
            </div>
          ))}
        </>
      );
    }
    else{
      return(
        <h1></h1>
      )
    }
  };
}
export default MovieList;
