import api from "../all_api/common_api.js"
import {createAsyncThunk} from "@reduxjs/toolkit"

const add_bookapi =  async (data)=>{
 const response = await api.post(import.meta.env.VITE_ADD_BOOK,data);
 console.log(import.meta.env.VITE_ADD_BOOK)
return  response.data

}

const addBook_thunk = createAsyncThunk("add/book",
    async(data,thunkApi)=>{
        try {
         
            return await  add_bookapi(data)


            
        } catch (error) {
        return  thunkApi.rejectWithValue(error.message)
        } 









    }
)

export default addBook_thunk