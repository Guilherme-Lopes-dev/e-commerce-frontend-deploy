import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items: [],
    status: null,
};
const APIURL = process.env.REACT_APP_API_URL


export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
      try {
        const response = await axios.get(
          APIURL
        );
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
//Essa função AsyncThunk aceita 3 parametros, a primeira é uma função 
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload; 
          },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }

});

export default productsSlice.reducer;