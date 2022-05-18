import axios from "axios";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { API } from "../helpers/const";

export const clientContext = React.createContext();

const initState = {
  products: [],
  user: null,
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  myCart: null,
  productDetails: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "CHECK_USER":
      return { ...state, user: action.payload };
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_IN_CART":
      return { ...state, cartCount: action.payload };
    case "GET_PRODUCTS_FROM_CART":
      return { ...state, myCart: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
  }
};

const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getProducts = async () => {
    const response = await axios(`${API}${window.location.search}`);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  //pagination

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastproduct = currentPage * productsPerPage;
  const indexOfFirstproduct = indexOfLastproduct - productsPerPage;

  const products = state.products.slice(
    indexOfFirstproduct,
    indexOfLastproduct
  );

  const totalCount = state.products.length;

  const handlePagination = (page) => {
    setCurrentPage(page);
    // setCurrentPage(currentPage + 1);
  };

  //login

  const authWidthGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  //cart

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    const newProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };
    newProduct.subPrice = product.price * newProduct.count;
    cart.products.push(newProduct);
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));

    const action = {
      type: "ADD_PRODUCT_TO_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      return false;
    }
    let prod = cart.products.find((item) => {
      return item.product.id === id;
    });
    if (prod) {
      return true;
    } else {
      return false;
    }
  };

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newProducts = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.products = newProducts;
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    const action = {
      type: "DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const getProductsFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { products: [] };
    const action = {
      type: "GET_PRODUCTS_FROM_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountProductInCart = (id, count) => {
    if (count < 1) {
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.count * item.product.price;
      }
      return item;
    });
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductsFromCart();
  };

  //like

  const likeCounter = async (id, count) => {
    await axios.patch(`${API}/${id}`, { likes: count + 1 });
    getProducts();
  };
  const getProductDetails = async (id) => {
    const response = await axios(`${API}/${id}`);
    const action = {
      type: "GET_PRODUCT_DETAILS",
      payload: response.data,
    };
    dispatch(action);
  };

  //comment

  const addFeedback = async (newFeedback, product) => {
    if (product.feedBacks) {
      product.feedBacks.push(newFeedback);
      await axios.patch(`${API}/${product.id}`, product);
    } else {
      product.feedBacks = [newFeedback];
      await axios.patch(`${API}/${product.id}`, product);
    }
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        authWidthGoogle: authWidthGoogle,
        logOut: logOut,
        addProductToCart: addProductToCart,
        checkProductInCart: checkProductInCart,
        deleteProductInCart: deleteProductInCart,
        getProductsFromCart: getProductsFromCart,
        changeCountProductInCart: changeCountProductInCart,
        likeCounter: likeCounter,
        getProductDetails: getProductDetails,
        addFeedback: addFeedback,
        handlePagination: handlePagination,
        products: products,
        user: state.user,
        cartCount: state.cartCount,
        myCart: state.myCart,
        productDetails: state.productDetails,
        totalCount: totalCount,
        productsPerPage: productsPerPage,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;
