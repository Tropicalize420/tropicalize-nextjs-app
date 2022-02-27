import createDataContext from "./CreateDataContext";
import axios from "axios";
//
const appReducer = (state, action) => {
  switch (action.type) {
    case "get_cart":
      return {
        ...state,
        cart: action.payload,
      };
    case "edit_cart":
      return {
        ...state,
        cart: action.payload,
      };
    case "get_products":
      return {
        ...state,
        products: action.payload,
      };
    case "clear_cart":
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
};
//
const cleanCart = (dispatch) => {
  return async (fullObj, type) => {
    //
    let res = {
      fail: false,
      [type]: {
        fullObj,
        quantity: 0,
      },
    };
    //
    dispatch({
      type: "clear_cart",
      payload: res,
    });
  };
};
//
const getProducts = (dispatch) => {
  return async (prods) => {
    //  
    try {
      dispatch({
        type: "get_products",
        payload: prods,
      });
    } catch (err) {
      console.log("Error heree ", err);
    }
  };
};
//
const generateCartFromStorage = (dispatch) => {
  return async (cart) => {
    //
    try {
      dispatch({
        type: "get_cart",
        payload: cart,
      });
    } catch (err) {
      dispatch({
        type: "get_cart",
        payload: { fail: true, hasProducts: false },
      });
    }
  };
};
//
const addOne = (dispatch) => {
  return async (fullObj, grinderType) => {
    //
    fullObj[grinderType].quantity += 1;
    //
    let data = fullObj;
    //
    try {
      dispatch({
        type: "get_cart",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "get_cart",
        payload: { fail: true, hasProducts: false },
      });
    }
  };
};
//
const editQuantity = (dispatch) => {
  return async (fullObj, grinderType, quantity) => {
    console.log("Heree ------> ", fullObj, grinderType, quantity);
    // Testing this
    try {
      fullObj[grinderType].quantity = quantity;
      let data = fullObj;
      console.log("data:", data);
      dispatch({
        type: "edit_cart",
        payload: "data",
      });
    } catch {
      dispatch({
        type: "edit_cart",
        payload: { fail: true, hasProducts: false },
      });
    }
  };
};
export const { Context, Provider } = createDataContext(
  appReducer,
  {
    cleanCart,
    generateCartFromStorage,
    getProducts,
    addOne,
    editQuantity,
  },
  []
);
