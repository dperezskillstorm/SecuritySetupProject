import React,{useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {fetchUserData, createNewUser} from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';

const MainWrapper=styled.div`
    padding-top:40px;
`;

export const Dashboard=(props)=>{
    const navigate = useNavigate();



    const dispatch=useDispatch();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({});

    React.useEffect(()=>{
//if user tries to go straign to dashboard without logging in, the featchusedata
// does not reolve th promise and it clears and goe back to login


        fetchUserData()
        
        .then((response)=>{
            console.log(response.data)
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
             navigate('/');
        })
    },[])

    const logOut=()=>{

        localStorage.clear();
        navigate('/');

    }

   
    return (
        <Container>
            <MainWrapper>
                <h4>Hello {data && `${data.firstName} ${data.lastName}`}</h4>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.roleCode==='ADMIN').length>0 && <Button type="variant">Add User</Button> }
                <br></br>
                {data.email} {console.log(data)}

                <Button style={{marginTop:'5px'}} onClick={() =>logOut()}>Logout</Button>




            </MainWrapper>
        </Container>
    )
}