import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
    },
    reducers:{
        addItem: (store, action)=>{
            store.items.push(action.payload);
        },
        removeItem: (store, action)=>{
            store.items = store.items.filter(item=>item.id!==action.payload)
        },
        clearCart: (store) =>{
            store.items = [];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;