// import { productActions } from "../reducers/productReducer";

// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/tjrdnjs123/hnm-react/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     dispatch(productActions.getAllProducts({data}))
//   };
// }

// function getProductDetail(id) {
//     return async (dispatch) => {
//       let url = `https://my-json-server.typicode.com/tjrdnjs123/hnm-react/products/${id}`;
//       let response = await fetch(url);
//       let data = await response.json();
//       dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
//     };
//   }

// export const productAction={getProductDetail}    