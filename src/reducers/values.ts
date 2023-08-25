import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  getData } from "../api/api";

export interface IToDoList {
  id: number;
  title: string;
  complete: boolean;
}

export interface IToDoListState {
  data: IToDoList[];
    loading: boolean;
    text:string
    modal:boolean
    title:string
    idx:null|number
}

const initialState: IToDoListState = {
  data: [],
    loading: false,
    text: "",
    modal: false,
    title: "",
    idx:null
};

const setLoading = (state: IToDoListState) => {
  state.loading = true;
};

export const toDoSlice = createSlice({
  name: "To Do List",
  initialState,
  reducers: {
    setText(state: IToDoListState, action: PayloadAction<string>) {
      state.text = action.payload;
    },
      handleClose(state: IToDoListState) {
        state.modal = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, setLoading);
    builder.addCase(
      getData.fulfilled,
      (state: IToDoListState, action: PayloadAction<IToDoList[]>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getData.rejected, (state: IToDoListState) => {
      state.loading = false;
    });
  },
});

export const {setText, handleClose} = toDoSlice.actions;

export default toDoSlice.reducer;
