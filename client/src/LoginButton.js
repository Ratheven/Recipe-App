import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = ()=> {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        !isAuthenticated && (
          <p className="header-sign-in" onClick={() => loginWithRedirect()}>Sing In</p>
        )
      );
}
export default LoginButton