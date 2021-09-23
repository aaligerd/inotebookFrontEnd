import { useState } from "react";
import AuthContext from "./authcontext";

const Authstate = (props) => {
    const [userstate, setuserstate] = useState({ login: false, authToken: "" });
    //this  object define initial state of any user


    //userlogin function
    const userLogin = async (credentials) => {
        const userCredentials = {
            "email": credentials.email,
            "password": credentials.password
        };
        const url = "http://localhost:2020/api/auth/login";
        try {
            const userData = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userCredentials)
            });
            const userJson = await userData.json();
            setuserstate({
                authToken: userJson.authToken,
                login: true
            })
            localStorage.setItem('authToken', userJson.authToken);
        } catch (error) {
            console.log(error)
        }
    }
    //userlogout function
    const userLogout = async () => {
        try {
            setuserstate({
                authToken: "",
                login: false
            });
        } catch (error) {
            console.log(error)
        }
    }

    //creat new user function
    const createUser =async (userDetails) => {
        const userData = {
            "name": userDetails.fullname,
            "email": userDetails.email,
            "password": userDetails.password
        }
        const url="http://localhost:2020/api/auth/createuser";
        const newUserCreated=await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userData)
        });

        const newUserJson=await newUserCreated.json();
        setuserstate({
            authToken: newUserJson.authToken,
            login: true
        })
        console.log(newUserCreated);
        
    }


    return (<AuthContext.Provider value={{ userstate, userLogin, userLogout, createUser }}>
        {props.children}
    </AuthContext.Provider>);

}

export default Authstate;