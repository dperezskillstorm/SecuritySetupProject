import React from 'react';
import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/login`,
        'data':authRequest
    })
}



export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/userinfo`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })

    



}

export const createNewUser=(data)=>{
    return axios({
        method:'POST',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/register`,
        data:{
            userName:data.userName,
            firstName:data.firstName,
            lastName:data.lastName,
            email: data.email,
            password:data.password,
        },
        headers:{
            
        }
        
    })
}