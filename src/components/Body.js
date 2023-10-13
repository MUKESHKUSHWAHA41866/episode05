
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
// import resList from "../utils/mockData";



const Body = () => {
  
    // Local State Variable
    const [listOfRestaurants, setListOfRestraunt] = useState(resList);
// Normal Variable
// let listOfRestaurants = null;
//   let listOfRestaurantsJs = [
      
    // {
    //     "info": {
    //       "id": "502932",
    //       "name": "Andhra Gunpowder",
    //       "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
    //       "cuisines": [
    //         "Andhra",
    //         "Biryani",
    //         "South Indian"
    //       ],
    //       "avgRating": 4.3, 
    //         }
    //       },
    //       {
    //         "info": {
    //           "id": "502954",
    //           "name": "Biriani",
    //           "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
    //           "cuisines": [
    //             "Andhra",
    //             "Biryani",
    //             "South Indian"
    //           ],
    //           "avgRating": 4.6, 
    //             }
    //           },
    //           {
    //             "info": {
    //               "id": "502958",
    //               "name": "Dominos",
    //               "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
    //               "cuisines": [
    //                 "Andhra",
    //                 "Biryani",
    //                 "South Indian"
    //               ],
    //               "avgRating": 3.8, 
    //                 }
    //               },
    //               {
    //                 "info": {
    //                   "id": "502950",
    //                   "name": "Burger",
    //                   "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
    //                   "cuisines": [
    //                     "Andhra",
    //                     "Biryani",
    //                     "South Indian"
    //                   ],
    //                   "avgRating": 3.5, 
    //                     }
    //                   },
           
   
//   ];

    return (
       <div className="body">
           <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestraunt(filteredList);

                //  listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                //  console.log(listOfRestaurants);
        }}
        >
            Top Rated Restaurants</button>
           </div>
           <div className="res-container">
            {listOfRestaurants.map((restaurant) => ( <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>))}
           {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Foods"/>  */}
           </div>
       </div>
    );   
   };


   export default Body;