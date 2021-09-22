import { useState } from "react";
import AuthContext from "./authcontext";

const Authstate = (props) => {
    const [userstate, setuserstate] = useState({login:false,authToken:""});
    //this  object define initial state of any user
    

    //userlogin function
    const userLogin = async () => {
            const userCredentials = {
            "email": "amerpoth@gmail.com",
            "password": "6Feb1999#"
        };
        const url = "http://localhost:2020/api/auth/login";
        try {
            const userData = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(userCredentials)
            });
            const userJson=await userData.json();
            setuserstate({
                authToken:userJson.authToken,
                login:true
            })
            localStorage.setItem('authToken',userJson.authToken);
            console.log(userJson.authToken);
        } catch (error) {
            console.log(error)
        }
    }
    return (<AuthContext.Provider value={{ userstate, userLogin }}>
        {props.children}
    </AuthContext.Provider>);

}

export default Authstate;