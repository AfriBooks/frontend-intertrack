import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode"
import {toast} from "react-toastify"

const initialState = {
    
    name: "",
    email: "",
    _id: "",
    logInStatus: "",
    logInError: "",
    userLoaded: false,

}

export const logInUser = createAsyncThunk (
    "authSignIn/logInUser",
    async ( user, {rejectWithValue} ) => {

        try {

            const tok = await axios.post(`https://afribook.herokuapp.com/login`, {
                email: user.email,
                password: user.password,
            });

            console.log(tok)

            if (tok) {
                localStorage.setItem("afribook_user", JSON.stringify(tok));
                window.location.pathname = "/home";
                alert("Welcome! Click ok to continue")

                toast.success("Welcome back", {position: "top-left" }) 
            }
            const [data] = tok;
            if (data.status === "200") {
                //redirect to homepage
            }

        } catch(err) {
            console.log(err.response.data);
            return rejectWithValue(err.response.data);

        }

    }
)

const signInSlice = createSlice({

    name: "authSignIn",
    initialState,
    reducers: {},
    extraReducers: (builder) => {


        builder.addCase( logInUser.pending, ( state, action ) => {
            return { ...state, logInStatus: "pending" }
        });
        builder.addCase( logInUser.fulfilled, ( state, action ) => {
            if (action.payload) {

                const user = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    email: user.email,
                    _id: user._id,
                    logInStatus: "success"
                }

            } else return state
        });
        builder.addCase( logInUser.rejected, ( state, action ) => {
            return {
                ...state,
                logInStatus: "rejected",
                logInError: action.payload,
                
            }

        });


    },

});

export const { logoutUser } = signInSlice.actions


export default signInSlice.reducer;



