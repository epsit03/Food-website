import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [likedItems, setLikedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('likedItems');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading liked items from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('likedItems', JSON.stringify(likedItems));
    } catch (error) {
      console.error('Error saving liked items to localStorage:', error);
    }
  }, [likedItems]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Error loading cart items from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart items to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = useCallback((itemId) => {
    if (!itemId) return;
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    if (!itemId) return;
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] <= 1) {
        delete newCart[itemId];
      } else {
        newCart[itemId] -= 1;
      }
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems({});
  }, []);

  const updateCartItemQuantity = useCallback((itemId, quantity) => {
    if (!itemId || quantity < 0) return;
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (quantity === 0) {
        delete newCart[itemId];
      } else {
        newCart[itemId] = quantity;
      }
      return newCart;
    });
  }, []);

  const toggleLike = useCallback((itemId) => {
    if (!itemId) return;
    setLikedItems((prev) => {
      const isLiked = prev.includes(itemId);
      return isLiked ? prev.filter((id) => id !== itemId) : [...prev, itemId];
    });
  }, []);

  const isItemLiked = useCallback((itemId) => {
    return likedItems.includes(itemId);
  }, [likedItems]);

  const getTotalQuantity = useMemo(() => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  }, [cartItems]);

  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = food_list.find((product) => product._id === itemId);
      return item ? total + item.price * quantity : total;
    }, 0);
  }, [cartItems]);

  const getCartItemCount = useCallback((itemId) => {
    return cartItems[itemId] || 0;
  }, [cartItems]);

  const getCartItems = useMemo(() => {
    return Object.entries(cartItems)
      .map(([itemId, quantity]) => {
        const item = food_list.find((product) => product._id === itemId);
        return item ? { ...item, quantity } : null;
      })
      .filter(Boolean);
  }, [cartItems]);

  const deliveryFee = 2;

  const contextValue = useMemo(
    () => ({
      food_list,
      cartItems,
      likedItems,
      addToCart,
      removeFromCart,
      clearCart,
      updateCartItemQuantity,
      getCartItemCount,
      toggleLike,
      isItemLiked,
      getTotalQuantity,       
      getTotalCartAmount,       
      getCartItems,            
      deliveryFee,
    }),
    [
      cartItems,
      likedItems,
      addToCart,
      removeFromCart,
      clearCart,
      updateCartItemQuantity,
      getCartItemCount,
      toggleLike,
      isItemLiked,
      getTotalQuantity,
      getTotalCartAmount,
      getCartItems,
      deliveryFee,
    ]
  );

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
