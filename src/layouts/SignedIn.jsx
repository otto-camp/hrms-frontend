import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Icon, Menu } from "semantic-ui-react";
import {userLogout} from "../store/actions/userActions"

export default function SignedIn() {
  const {userItem} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleSignOut=(user) => {
    dispatch(userLogout(user))
    history.push("/")
  } 

  return (
   <div>
     <Menu.Item>
       <Dropdown pointing="top right" text={userItem[0].user.name}>
         <Dropdown.Menu>
            {userItem[0].user.userType===1 && <Dropdown.Item as={Link} to={`/candidates`} />}
            <Dropdown.Item onClick={()=> handleSignOut(userItem[0].user)}>
              <Icon name="sign-out"/> 
            </Dropdown.Item>
          </Dropdown.Menu>
       </Dropdown>
     </Menu.Item>
   </div>
  );
}
