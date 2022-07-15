import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'
const API_URL = 'http://localhost:8080/'


const productreducers = createSlice({
    name:'product',
    initialState:{
        isproduct:false,
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
        findById:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                localStorage.setItem("user",JSON.stringify(payload.data))
                localStorage.setItem("token",JSON.stringify(payload.data))
                state.isfindById=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isfindById=false
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
    },
})

    export const findAllAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'product/findAll',
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
        export const findByIdAsync = (data) => async (dispatch) => {
            try{
                console.log(data)
                const user = JSON.parse(localStorage.getItem("user"))
                const token =user.data.access_token
                console.log(token)
                const response = await axios.post(API_URL+'product/findById',
                {
                    headers :{"Authorization":`Bearer${token}` } 
                },
                data)
                console.log(response)
                dispatch(findById(response.data))
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
                const response = await axios.post(API_URL+'product/add',
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
                const response = await axios.post(API_URL+'product/update',
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
        
export const {findAll,findById,add,update,destroy}=productreducers.actions
export default productreducers.reducer
     
 