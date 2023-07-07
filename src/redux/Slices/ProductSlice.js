import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

export const fetchData = createAsyncThunk("products/fetch", async function () {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return await response.json();
});
const ProductSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { loadProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
