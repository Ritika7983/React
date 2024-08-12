import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=11748&catalog_qa=undefined&submitAction=ENTER"
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            // console.log(json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
            setError("Failed to fetch menu");
        }
    };
    if (!resInfo) {
        return <Shimmer />;
      }
    

    // Safe access to restaurantInfo
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { name = "Restaurant Name Not Available", cuisines = "Cuisines Not Available", costForTwoMessage = "Cost Information Not Available" } = restaurantInfo;
    const Itemcard= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(Itemcard);
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

    if (error) {
        return <div>{error}</div>; // Display error message if fetching fails
    }

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
            {cuisines.join(",")}
            {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {/* Example static list; replace with dynamic data if needed */}
                <li>{ resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.name}</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;
