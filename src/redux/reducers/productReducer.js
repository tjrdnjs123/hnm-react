import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error:null,
};

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

export const fetchProduct = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/tjrdnjs123/hnm-react/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message)
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/fetchDetail",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/tjrdnjs123/hnm-react/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message)
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProduct.rejected, (state,action) => {
        state.isLoading = false;
        state.error=action.payload
      }).addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state,action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      });
  },
});

// export const productActions = productSlice.actions;
export default productSlice.reducer;

