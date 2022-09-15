import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/LoginButton.css"
import { AiOutlineTeam } from 'react-icons/ai';
const LoginButton = ()=> {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        !isAuthenticated && (
          <p onClick={() => loginWithRedirect()}><AiOutlineTeam  className="sign-out-button" /></p>
        )
      );
}
export default LoginButton