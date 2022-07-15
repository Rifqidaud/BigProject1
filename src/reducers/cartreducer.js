import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'
const API_URL = 'http://localhost:8080/'


const cartreducers = createSlice({
    name:'cart',
    initialState:{
        isfindAll:false,
        isadd:false,
        isupdate:false,
        isdestroy:false,
        message:null,
        isloading:false,
        iserror:false,
        issucces:false

    }, 
    reducers:{
        findAll:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.isfindAll=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isfindAll=false
                state.iserror=true
                state.message=payload
            }
        },
        add:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.isadd=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isadd=false
                state.iserror=true
                state.message=payload 
            }
        },
        update:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.isupdate=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isupdate=false
                state.iserror=true
                state.message=payload 
            }
        },
        destroy:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.isdestroy=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isdestroy=false
                state.iserror=true
                state.message=payload 
            }
        },
    }


   
})
export const findAllAsync = (data) => async (dispatch) => {
    try{
        console.log(data)
        const user = JSON.parse(localStorage.getItem("user"))
        const token =user.data.access_token
        console.log(token)
        const response = await axios.post(API_URL+'cart/findAll',
        {
            headers :{"Authorization":`Bearer${token}` } 
        },
        data)
        console.log(response)
        dispatch(findAll(response.data))
    }catch(error){
        throw new Error(error)
    }
}  
export const addAsync = (data) => async (dispatch) => {
    try{
        console.log(data)
        const user = JSON.parse(localStorage.getItem("user"))
        const token =user.data.access_token
        console.log(token)
        const response = await axios.post(API_URL+'cart/add',
        {
            headers :{"Authorization":`Bearer${token}` } 
        },
        data)
        console.log(response)
        dispatch(add(response.data))
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
        const response = await axios.post(API_URL+'cart/update',
        {
            headers :{"Authorization":`Bearer${token}` } 
        },
        data)
        console.log(response)
        dispatch(findAll(response.data))
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
        const response = await axios.post(API_URL+'cart/delete',
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
export const {findAll,add,update,destroy}=cartreducers.actions
export default cartreducers.reducer