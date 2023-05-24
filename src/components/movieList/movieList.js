import React, { Component } from "react";
import MovieService from '../../services/movieService';
// import './moviList.css'

export default class MovieList extends Component {
  movieService = new MovieService();

  // state = {
  //   title: null,
  //   id: null,
  //   overview: null,
  //   releaseDate: null,
  //   genres: null,
  //   backdropPath: null,
  // };
  state = {
    films: []
  }

  constructor() {
    super();
    this.updateMovie();
  }

  updateMovie() {
    this.movieService.SearchMovie('fight')
      .then((data) => {
        console.log(data)
        this.setState({
          films: data.results
        })
      })






    // this.movie.getSingleMovie().then((body) => {
    //   console.log(body);
    //   console.log(body.backdrop_path);
    //   this.setState({
    //     title: body.title,
    //     id: body.id,
    //     overview: body.overview,
    //     releaseDate: body.release_date,
    //     backdropPath: body.backdrop_path,
    //     genres: body.genres.map((array) => {
    //       return `${array.name}     `;
    //     }),
    //   });
    // });
  }

  render() {

    // <input type='text' ></input>
    // const { title, id, overview, releaseDate, genres, backdropPath ,films} =
    //   this.state;
    
    const { films } = this.state;

    const filmCards = films.map((film) => {

      return (
      <li key={film.id}>
 <div className="card" >
  <img className="card-img-top" src={film.id} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{film.title}</h5>
    <p className="card-text">{film.release_date}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{film.genres}</li>
    <li className="list-group-item">{film.overview}</li>
  </ul>
  {/* <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div> */}
</div> 
      </li>
      )
    })

    return <ul>
      {filmCards}
    </ul>



    // const rootPoster = "https://image.tmdb.org/t/p/original/";
    // return (
    //   <div className="d-flex cont-div">
       
 
    //      <div className="cont-image">
    //       <img
    //         className="my-img, img-fluid"
    //         src={`${rootPoster}${backdropPath}`}
    //       ></img>
    //     </div>
    //     <div className="w-50 cont-ul">
    //       <ul>w
    //         <li>{title}</li>
    //         <li>{overview}</li>
    //         <li>{}</li>
    //         <li>{genres}</li>
    //         <li>{films}</li>
    //       </ul>

        
    //     </div> 
    //   </div> 
    // );
  }
}