import axios from "axios";
import { API_BASE } from "../config/env";

export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";
export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";

export const DELETE_MOVIE_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const DELETE_MOVIE_REJECTED = "FETCH_MOVIES_REJECTED";
export const DELETE_MOVIE_PENDING = "FETCH_MOVIES_PENDING";
/*without redux PROMISE MIDDLEWARE*/
/*
export function fetchMovies() {
  return (dispatch) => {
    axios
      .get(`${API_BASE}/movies`)
      .then((result) => result.data)
      // .then(data=>console.log(data))
      .then((data) =>
        dispatch({
          type: FETCH_MOVIES,
          payload: data,
        })
      )
      //   .catch((error) => console.log(error));
      .catch((error) =>
        dispatch({
          type: FETCH_MOVIES_ERROR,
          payload: error,
        })
      );
  };

}
*/

/*with redux-promise-middleware */
export function fetchMovies() {
  return (dispatch) => {
    dispatch({
        type:"FETCH_MOVIES",
        payload:axios.get(`${API_BASE}/movies`).then(result=>result.data)
    })
  };
}


export function deleteMovie(id) {
  return (dispatch) => {
    dispatch({
        type:"DELETE_MOVIE",
        payload:axios.delete(`${API_BASE}/movies/${id}`)
        .then(result=>Object.assign({},result.data,{id}))
    })
  };
}