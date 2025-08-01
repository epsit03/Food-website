import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu">
      <h1>Discover Delicious Choices</h1>
      <p className="explore-menu-text">
       From appetizers to desserts, explore our carefully curated menu crafted to delight your taste buds and deliver a premium dining experience.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
                alt="menu_image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
