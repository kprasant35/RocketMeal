const RestaurantCard = ({
    name,
    cloudinaryImageId,
    area,
    cuisines,
    lastMileTravelString,
    costForTwoString,
    address,
    avgRating,
  }) =>{
    
    return (
        <div className="card">
            <img
                src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
                }
            />
            <div className="ratings">
                <p>{name}</p> 
                <p style={avgRating > 3 ? {color:"green"}:{color:"red"} }>{avgRating}</p>
            </div>
            <p>{costForTwoString}</p>
            {/* optional chaining */}
            <p>{cuisines?.join(", ")}</p> 
            <p>{lastMileTravelString}</p>
        </div>
    )
}

export default RestaurantCard;