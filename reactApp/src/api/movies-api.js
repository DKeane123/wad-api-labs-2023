export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8a5f0b2a53aab314ecf8e0198cc38706&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };