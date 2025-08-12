import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
   const [user, setUser] = React.useState(null)
    return(
    <UserContext.Provide value= {{user, setUser}}>
    {children}
    </UserContext.Provide>
  )
}

export default UserContextProvider