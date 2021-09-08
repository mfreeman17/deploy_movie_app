import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import WatchlistComponent from "./WatchlistComponet.js"
import   'react-router-dom';
import './card.css';




class Movie extends React.Component {




  getMovieRequest = async () =>{
    const url = "http://www.omdbapi.com/?i="+ this.props.match.params.id+"&apikey=283116eb"
    console.log("url", url)
    const response = await fetch(url);
    const movieJson = await response.json();
    this.setState({data: movieJson})

  }



  componentWillMount(){
    this.getMovieRequest()
    const watchlist = JSON.parse(localStorage.getItem("react-movie-app-watchlist"))
    if (watchlist){
      this.setState({watchlist: watchlist})
      console.log("watchlist", watchlist)
    }
  }
  checkInWatchList(){
    for (var index = 0; index < this.state.watchlist.length; ++index) {

     var movie = this.state.watchlist[index];

     if(movie.imdbID === this.state.data.imdbID){

     }
    }

  }
  constructor(props) {
    super(props)
    this.state = {
       data : {},
       watchlist : [],

    }
  }

  routeChange=()=> {
    let path = `/`;
    this.props.history.push(path)
}
  addToWatchList = () =>{
    localStorage.setItem("react-movie-app-watchlist", JSON.stringify([]))
    let newWatchlist
    if(this.state.watchlist.length > 0){

       newWatchlist = [...this.state.watchlist, this.state.data]
    }
    else {
      newWatchlist = [this.state.data];
    }
    console.log("new watch list", newWatchlist)

    localStorage.setItem("react-movie-app-watchlist", JSON.stringify(newWatchlist))
    window.location.reload();

  }

  removeFromWatchList = () => {
		const newWatchlist = this.state.watchlist.filter(
			(movie) => movie.imdbID !== this.state.data.imdbID
		);

    localStorage.setItem("react-movie-app-watchlist", JSON.stringify(newWatchlist))
    window.location.reload();

	};

  render(){
    let watchlistString = "Add to Watchlist"
    let watchlistFunction = this.addToWatchList
    for (var index = 0; index < this.state.watchlist.length; ++index) {

       var movie = this.state.watchlist[index];

       if(movie.imdbID === this.state.data.imdbID){
         watchlistString= "Remove From Watchlist"
         watchlistFunction= this.removeFromWatchList
       }
    }
      return (

        <div class="wrapper">
          <div class = "socail-btn ">
            <button style = {{ background : "#691b25"}} onClick = {this.routeChange}>
              <i class="fas fa-play"  ></i> Back
            </button>
          </div>
         	<div class="main_card">
         		<div class="card_left">
         			<div class="card_datails">
         				<h1>{this.state.data.Title}</h1>
         				<div class="card_cat">
         					<p class="PG">{this.state.data.Rated}</p>
         					<p class="year">{this.state.data.Year}</p>
         					<p class="genre">{this.state.data.Genre} </p>
         					<p class="time">{this.state.data.Runtime}</p>
         				</div>
         				<p class="disc">{this.state.data.Plot}</p>
                  <WatchlistComponent
                  heading = {watchlistString}
                  handleClick = {watchlistFunction}/>

              </div>
         		</div>
         		<div class="card_right">

         				<img src={this.state.data.Poster} alt=""></img>


         			</div>
         		</div>
         	</div>




     )
   }
}
export default Movie
