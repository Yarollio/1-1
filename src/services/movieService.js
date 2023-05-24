export default class MovieService {

  async getSingleMovie(filmId) {
    const resourse = await fetch`https://api.themoviedb.org/3/movie/${filmId}
    ?api_key=98312ffcf969092a3b66b9fb44af06cc`;
    const result = await resourse.json();
    return result;
  }

  async SearchMovie(search) {
    const resourse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=98312ffcf969092a3b66b9fb44af06cc&query=${search}`);
    const result = await resourse.json()
    return result
  }
}
   



// const movie = new MovieService();
// movie.getResourse().then((body) => {
//   const { title, id, genres, overview, release_date } = body;


// });
// render()
// {

// }