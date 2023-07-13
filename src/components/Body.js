import {restaurantList} from "../constants.js"
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filteredRestaurants = (searchText) =>{
    const restaurants = restaurantList.filter((restaurant) =>{
        return restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase());
    });

    return restaurants;
}

const Body = () =>{
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <> 
            <div className="search-container">
             <form action="" onSubmit={(e) => e.preventDefault()}>

                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}   

                    ></input>

                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filteredRestaurants(searchText);
                        setRestaurants(data);
                    }}
                > Search</button>
              </form>
            </div>

            <div className="restaurant-list">
                {restaurants.map((restaurant) =>{
                    
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
                })}
            </div>
        </>
    );
}

export default Body;