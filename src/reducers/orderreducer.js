import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'

const API_URL = 'http://localhost:8080/'


const orderreducers = createSlice({
    name:'order',
    initialState:{
        isorder:false,
        message:null,
        isloading:false,
        iserror:false,
        issucces:false

    }, 
    reducers:{
        checkout:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.ischeckout=true
                state.isloading=false
            }else{
                state.isloading=false
                state.ischeckout=false
                state.iserror=true
                state.message=payload
            }
        },
        save:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.issave=true
                state.isloading=false
            }else{
                state.isloading=false
                state.issave=false
                state.iserror=true
                state.message=payload
            }
        },
        getorder:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.isgetorder=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isgetorder=false
                state.iserror=true
                state.message=payload
            }
        },
        getorderdetail:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.isgetorderdetail=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isgetorderdetail=false
                state.iserror=true
                state.message=payload
            }
        },
    },
})

    export const checkoutAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'order/checkout',
                {
                    headers :{"Authorization":`Bearer$ {token}` } 
                },
                data)
                console.log(response)
                dispatch(checkout(response.data))
            }catch(error){
                throw new Error(error)
            }
        }  
        export const saveAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'order/save',
                {
                    headers :{"Authorization":`Bearer${token}` } 
                },
                data)
                console.log(response)
                dispatch(save(response.data))
            }catch(error){
                throw new Error(error)
            }
        }  
        export const updateAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'order/update',
                {
                    headers :{"Authorization":`Bearer${token}` } 
                },
                data)
                console.log(response)
                dispatch(update(response.data))
            }catch(error){
                throw new Error(error)
            }
        }  
        export const destroyAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'order/delete',
                {
                    headers :{"Authorization":`Bearer${token}` } 
                },
                data)
                console.log(response)
                dispatch(destroy(response.data))
            }catch(error){
                throw new Error(error)
            }
        }  
        export const getorderAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'order/getorder',
                {
                    headers :{"Authorization":`Bearer${token}` } 
                },
                data)
                console.log(response)
                dispatch(getorder(response.data))
            }catch(error){
                throw new Error(error)
            }
        }  
        export const getorderdetailAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'order/getorderdetail',
                {
                    headers :{"Authorization":`Bearer${token}` } 
                },
                data)
                console.log(response)
                dispatch(getorderdetail(response.data))
            }catch(error){
                throw new Error(error)
            }
        }  
        export const {save,update,destroy,getorderdetail,getorder,checkout}=orderreducers.actions
        export default orderreducers.reducer