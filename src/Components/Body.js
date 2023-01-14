//import Card from "./Card";
import { useState } from "react";
import { IMG_URL, RestaurantsList } from "../Constants/config.js";

export const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
}) => {
  // Object Destructuring
  //const {cloudinaryImageId,name,cuisines,totalRatingsString} =restaurant.data;
  return (
    <div key={cloudinaryImageId} className="card card-resturant">
      <img
        src={IMG_URL + cloudinaryImageId}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text h7">{cuisines.join(", ")}</p>
        <a href="#" className="btn btn-primary">
          {totalRatingsString}
        </a>
      </div>
    </div>
  );
};

export default Body = () => {
  const [searchText, setSearchText] = useState("");

  const [filterRestaurant, setFilterRestaurant] = useState(RestaurantsList);

  function onChangeHandler(e) {
    e.keyCode === 13
      ? onClickHandler()
      : e.target.value != ""
      ? setSearchText(e.target.value)
      : (setSearchText(e.target.value), setFilterRestaurant(RestaurantsList));
  }
  function onClickHandler() {
    if (searchText != "") {
      const filteredRest = RestaurantsList.filter(
        (item) =>
          item.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.data.cuisines
            .join(", ")
            .toLowerCase()
            .includes(searchText.toLowerCase())
      );
      setFilterRestaurant(filteredRest);
    }
  }

  return (
    <div className="row">
      <div className="searchbar">
        <div className="row">
          <div className="col" style={{ marginRight: "1px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="search by name, cuisines...."
              onChange={(e) => {
                onChangeHandler(e);
              }}
              onKeyUp={(e) => {
                onChangeHandler(e);
              }}
            />
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-primary"
              onClick={() => {
                onClickHandler();
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="restaurantsList">
        {filterRestaurant && filterRestaurant.length > 0 ? (
          <>
            <span style={{ margin: 10 }} className="row">
              {filterRestaurant.length} Restaurant Found!
            </span>
            {filterRestaurant.map((item) => {
              return <Card {...item.data} key={item.data.id} />;
            })}
            {/* <Card {...RestaurantsList[0].data} />
        <Card {...RestaurantsList[1].data} /> */}
            {/* <Card restaurant={RestaurantsList[1]} /> */}
          </>
        ) : (
          <span style={{ margin: 10 }} className="row">
            No Restaurant Found!
          </span>
        )}
      </div>
    </div>
  );
};
