import React, { useContext, useCallback, useMemo } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
const FoodItem = React.memo(({
  id,
  name,
  price,
  description,
  image,
  rating = 4.5,
  category
}) => {
  const {
    getCartItemCount,
    addToCart,
    removeFromCart,
    toggleLike,
    isItemLiked
  } = useContext(StoreContext);

  const cartQuantity = useMemo(() => getCartItemCount(id), [getCartItemCount, id]);
  const liked = useMemo(() => isItemLiked(id), [isItemLiked, id]);

  const handleLikeClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLike(id);
  }, [toggleLike, id]);

  const handleAddToCart = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id);
  }, [addToCart, id]);

  const handleRemoveFromCart = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(id);
  }, [removeFromCart, id]);

  const formattedPrice = useMemo(() => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  }, [price]);

  const displayName = name || "Unnamed Item";
  const displayDescription = description || "No description available";

  if (!id) {
    return null;
  }

  return (
    <article className="food-item" role="article" aria-labelledby={`food-${id}-name`}>
      <div className="food-item-img-container">
        {image ? (
          <img
            src={image}
            alt={`${displayName} - ${category || 'Food item'}`}
            className="food-item-img"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="image-fallback" style={{ display: image ? 'none' : 'flex' }}>
          <span>No Image Available</span>
        </div>

        <div className="food-item-actions" role="group" aria-label="Food item actions">

          <button
            className={`heart-button ${liked ? 'heart-button--liked' : ''}`}
            onClick={handleLikeClick}
            aria-label={liked ? `Remove ${displayName} from favorites` : `Add ${displayName} to favorites`}
            aria-pressed={liked}
            type="button"
          >
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeartRegular}
              aria-hidden="true"
            />
          </button>

          {cartQuantity === 0 ? (
            <button
              className="add-to-cart-button"
              onClick={handleAddToCart}
              aria-label={`Add ${displayName} to cart`}
              type="button"
            >
              <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
            </button>
          ) : (
            <div className="quantity-controls" role="group" aria-label="Quantity controls">
              <button
                className="quantity-button quantity-button--decrease"
                onClick={handleRemoveFromCart}
                aria-label={`Remove one ${displayName} from cart`}
                type="button"
              >
                <FontAwesomeIcon icon={faMinus} aria-hidden="true" />
              </button>
              <span className="quantity-display" aria-label={`${cartQuantity} in cart`}>
                {cartQuantity}
              </span>
              <button
                className="quantity-button quantity-button--increase"
                onClick={handleAddToCart}
                aria-label={`Add one more ${displayName} to cart`}
                type="button"
              >
                <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="food-item-info">
        <div className="food-item-header">
          <h3 id={`food-${id}-name`} className="food-item-name">
            {displayName}
          </h3>
          <div className="food-item-rating" aria-label={`Rating: ${rating} out of 5 stars`}>
            <div className="rating-stars" role="img" aria-hidden="true">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`star ${index < Math.floor(rating) ? 'star--filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="rating-text sr-only">{rating} out of 5 stars</span>
          </div>
        </div>

        <p className="food-item-desc">
          {displayDescription}
        </p>

        <div className="food-item-footer">
          <span className="food-item-price" aria-label={`Price: ₹${formattedPrice}`}>
            ₹{formattedPrice}
          </span>
          {category && (
            <span className="food-item-category">
              {category}
            </span>
          )}
        </div>
      </div>
    </article>
  );
});

FoodItem.displayName = 'FoodItem';

export default FoodItem;