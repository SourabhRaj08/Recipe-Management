import React from "react";
import "./FavoriteItem.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export const FavoriteItem = (props) => {
  const { id, image, title, removeFromFav } = props;
  const {theme} = useContext(ThemeContext)

  return (
    <div key={id} className="favorite-item">
      <div>
        <img src={image} alt="image of recipe" />
      </div>

      <p style={theme ? {color : "#4ec31c"} : {}}>{title}</p>
      <button type="button" style={theme ? {backgroundColor : "#4ec31c"} : {}} onClick={removeFromFav}>
        Remove from Favorite
      </button>
    </div>
  );
};
