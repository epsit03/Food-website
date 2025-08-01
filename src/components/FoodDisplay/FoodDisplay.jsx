import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list, likedItems, toggleLike } = useContext(StoreContext);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const sortedDishes = useMemo(() => {
    let filteredDishes = [...food_list];
    if (filter === "liked") {
      filteredDishes = filteredDishes.filter((item) => likedItems.includes(item._id));
    } else if (category !== "All") {
      filteredDishes = filteredDishes.filter((item) => item.category === category);
    }
    return filteredDishes.sort((a, b) => {
      const isALiked = likedItems.includes(a._id);
      const isBLiked = likedItems.includes(b._id);
      if (isALiked && !isBLiked) return -1;
      if (!isALiked && isBLiked) return 1;
      return sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price;
    });
  }, [food_list, likedItems, filter, sortOrder, category]);

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-controls">
        <div className="filter-toggle">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => {
              setFilter("all");
            }}
          >
            All Dishes
          </button>
          <button
            className={filter === "liked" ? "active" : ""}
            onClick={() => {
              setFilter("liked");
            }}
          >
            Liked Dishes
          </button>
        </div>
        <div className="sort-dropdown">
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      {filter === "liked" && (
        <div className="liked-dishes">
          <h2>Dishes You Like</h2>
          {sortedDishes.length > 0 ? (
            <div className="food-display-list">
              {sortedDishes.map((item, index) => {
                return (
                  <FoodItem
                    key={`liked-${index}`}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    isLiked={true}
                    toggleLike={() => toggleLike(item._id)}
                  />
                );
              })}
            </div>
          ) : (
            <p>No liked dishes yet. Click the heart icon to add some!</p>
          )}
          <div className="place-order">
            <Link to="/cart" aria-label="Shopping Cart">
              <button className="place-order-button">Place Order</button>
            </Link>
          </div>
        </div>
      )}
      {filter === "all" && (
        <>
          <h2>Top Dishes Near You</h2>
          <div className="food-display-list">
            {sortedDishes.length > 0 ? (
              sortedDishes.map((item, index) => (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  isLiked={likedItems?.includes(item._id) || false}
                  toggleLike={() => toggleLike(item._id)}
                />
              ))
            ) : (
              <p>No dishes available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default FoodDisplay;