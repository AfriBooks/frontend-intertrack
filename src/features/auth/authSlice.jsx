import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../api";
import jwtDecode from "jwt-decode"

const initialState = {
    
    name: "",
    email: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    userLoaded: false,

}

export const registerUser = createAsyncThunk (
    "auth/registerUser",
    async ( user, {rejectWithValue} ) => {

        try {

            const token = await axios.post(`https://afribook.herokuapp.com/user`, {
                name: user.name,
                email: user.email,
                password: user.password,
            });

            console.log(token)

            if (token) {
                window.location.pathname = "/payment-info";
            }
            const [data] = token;
            if (data.status === "200") {
                //redirect to homepage
            }

        } catch(err) {
            console.log(err.response.data);
            return rejectWithValue(err.response.data);

        }

    }
)


const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase( registerUser.pending, ( state, action ) => {
            return { ...state, registerStatus: "pending" }
        });
        builder.addCase( registerUser.fulfilled, ( state, action ) => {
            if (action.payload) {

                const user = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    registerStatus: "success"
                }

            } else return state
        });
        builder.addCase( registerUser.rejected, ( state, action ) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload,
                
            }

        });


    },

});


export default authSlice.reducer;