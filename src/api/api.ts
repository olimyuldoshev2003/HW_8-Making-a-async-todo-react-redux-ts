import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IToDoList } from "../reducers/values";

const API = "http://localhost:3000/todo";

export const getData = createAsyncThunk("reducers/values.ts", async () => {
  try {
    const { data } = await axios.get(API);
      return data;
      
  } catch (error) {
    console.log(error);
  }
});

export const postData = createAsyncThunk(
  "todo/postData",
  async function postData(text:string, { dispatch }) {
    try {
      const obj = {
        id: new Date().getTime(),
        title: text,
        completed: false,
      };
      const { data } = await axios.post(API, obj);
      dispatch(getData());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

  export const deleteData = createAsyncThunk(
    "todo/deleteTodo",
    async function(id:number, {dispatch}) {
        try {
            const { data } = await axios.delete(`${API}/${id}`)
            dispatch(getData())
            return data
        } catch (error) {
            console.log(error);
        }
    }
)


export const completedData = createAsyncThunk(
    "todo/completedData",
    async function (obj:IToDoList, { dispatch }) {
        try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await axios.put(`${API}/${obj.id}`, {
            title: obj.title,
            complete: !obj.complete,
        });
        console.log(obj.complete);
            
            

        dispatch(getData());
        } catch (error) {
            console.log(error);
        }
    }
    );

// export const putData = createAsyncThunk(
//   "todo/putData",
//   async function (obj, { dispatch }) {
//     try {
//       // eslint-disable-next-line no-unused-vars
//       const { data } = await axios.put(`${API}/${obj.id}`, {
//         title: obj.title,
//         complete: !obj.complete,
//       });        

//       dispatch(getData());
//     } catch (error) {
//       console.log(error);
//       console.log(4);
//     }
//   }
// );

