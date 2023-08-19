import {createSlice} from '@reduxjs/toolkit';
import {items} from '../../utils/constants';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ItemsState {
  value: object;
}

const initialState: ItemsState = {
  value: items,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction) => {},
  },
});

// Action creators are generated for each case reducer function
export const {increment} = itemsSlice.actions;

export default itemsSlice.reducer;
