import { useAuth0 } from "@auth0/auth0-react";
import "./css/LogoutButton.css"
import { AiOutlineTeam } from 'react-icons/ai';
const LogoutButton = ()=> {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
          <p className="header-sign" onClick={() => logout({ returnTo: window.location.origin })}>
            <AiOutlineTeam className="sign-in-button"/>
          </p>
        )
      );
}

export default LogoutButton