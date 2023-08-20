import {createSlice, current} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export const bucketSlice = createSlice({
  initialState: {
    value: [],
  },
  name: 'bucket',
  reducers: {
    setQuantity: (state, action: PayloadAction<object>) => {
      const index = state.value.findIndex(object => {
        return object._id === action.payload._id;
      });
      if (index >= 0 && action.payload.quantity > 0) {
        state.value[index] = action.payload;
      } else if (index >= 0 && action.payload.quantity === 0) {
        state.value.splice(index, 1);
      } else if (index < 0 && action.payload.quantity > 0) {
        state.value.push(action.payload);
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.value.findIndex(object => {
        return object._id === action.payload;
      });
      const item = {
        ...state.value[index],
        quantity: state.value[index].quantity - 1,
      };
      if (item.quantity === 0) {
        state.value.splice(index, 1);
      } else {
        state.value[index] = item;
      }
    },
    increaseQuantity: (state, action) => {
      const index = state.value.findIndex(object => {
        return object._id === action.payload;
      });
      const item = {
        ...state.value[index],
        quantity: state.value[index].quantity + 1,
      };
      state.value[index] = item;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setQuantity, decreaseQuantity, increaseQuantity} =
  bucketSlice.actions;

export default bucketSlice.reducer;
