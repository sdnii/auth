//imports
import React, {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";

import "./FavoritesPage.css";

function FavoritesPage() {
  //handle pushing to word page onclick
  // const navToWord = () => {
  //   history.push("/word");
  // };

  //declare variables and stores
  const dispatch = useDispatch();
  const history = useHistory();
  const favorites = useSelector(
    (store) => store.favorites
  );

  let favoritesSearch = useSelector(
    (store) => store.favoritesSearch
  );

  //set search hook
  const [search, setSearch] = useState("");

  //fetch words on mount -
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
    console.log(event.currentTarget);
    console.log("favs", favorites);
    console.log("favs search", favoritesSearch);
  }, []);

  return (
    <div className="containerFavs">
      <div>
        {/* Search favorites bar, dispatches FETCH_FAVORITES_SEARCH */}
        <div className="searchFavsContainer">
          <label>
            <input
              className="searchFavs"
              type="text"
              placeholder="Search favorites..."
              onChange={(event) => {
                dispatch({
                  type: "FETCH_FAVORITES_SEARCH", //!!!
                  payload: event.target.value,
                });
                setSearch(event.target.value);
              }}
            />
          </label>
        </div>
        {favorites.length === 0 && search === "" && (
          <div className="noFavorites">
            <h3>No favorites yet!</h3>
          </div>
        )}
        {/* only render fav list if nothing is in search bar */}
        {search === "" ? (
          <section className="favoritesSection">
            {/* loop through our favorites and display them */}
            {favorites.map((favorite) => {
              return (
                <div key={favorite.word_id}>
                  {/* display the favorite in all its languages */}
                  <h3
                    onClick={() =>
                      history.push(
                        `/word/${favorite.word_id}`
                      )
                    }
                  >
                    {favorite.english},&nbsp;
                    {favorite.french},&nbsp;
                    {favorite.italian},&nbsp;
                    {favorite.spanish},&nbsp;
                    {favorite.portuguese}
                  </h3>

                  {/* render a delete button */}
                  <button
                    className="btn btn_sizeSm"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_FAVORITE",
                        payload: favorite.word_id,
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </section>
        ) : (
          //if there is a search term, render the filtered list
          <section className="favoritesSearchSection">
            {/* loop through our favoritesSearch and display them */}
            {favoritesSearch.length === 0 &&
              search !== "" && (
                <>
                  <h3>
                    No matching search results!
                  </h3>
                </>
              )}
            {favoritesSearch.map(
              (favoriteSearch) => {
                return (
                  <div
                    key={favoriteSearch.word_id}
                  >
                    {/* display the favoriteSearch in all its languages */}
                    <h3
                      onClick={() =>
                        history.push(
                          `/word/${favoriteSearch.word_id}`
                        )
                      }
                    >
                      {favoriteSearch.english},
                      {favoriteSearch.french},
                      {favoriteSearch.italian},
                      {favoriteSearch.spanish},
                      {favoriteSearch.portuguese},
                      {favoriteSearch.word_id}
                    </h3>
                    {/* render a delete button */}
                    <button
                      className="btn btn_sizeSm"
                      onClick={() => {
                        dispatch({
                          type: "DELETE_FAVORITE",
                          payload:
                            favoriteSearch.word_id,
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              }
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
