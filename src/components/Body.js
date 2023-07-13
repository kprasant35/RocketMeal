import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { swiggy_api } from "../constants";
import Shimmer from "./Shimmer";

const filteredRestaurants = (searchText, restaurantList) =>{
    const restaurants = restaurantList.filter((restaurant) =>{
        return restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase());
    });

    return restaurants;
}

const Body = () =>{
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

     // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        // handle the error using try... catch
        try {
          const data = await fetch(swiggy_api);
          const json = await data.json();
          // updated state variable restaurants with Swiggy API data
          setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
          setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        } catch (error) {
          console.log(error);
        }
    }


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
                        const data = filteredRestaurants(searchText, restaurantList);
                        if (data.length === 0) {
                            setErrorMessage("No restaurant found");
                        }else {
                            setErrorMessage("");   
                        }
                        setRestaurants(data);
                        
                    }}
                > Search</button>
              </form>
            </div>
            {/* If No restaurants are found for the searchText */}
                {errorMessage && <div className="error-container">{errorMessage}</div>}

            {restaurantList.length === 0 ? (<Shimmer />) : 
                (
                    <div className="restaurant-list">
                        {restaurants.map((restaurant) =>{
                            
                            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
                        })}
                   </div>
                )}
        </>
    );
}

export default Body;