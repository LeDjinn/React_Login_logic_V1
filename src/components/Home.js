import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Adminregister from "./Adminregister";
import UserService from "../services/user.service";

const Home = () => {
  const currentUser = AuthService.getCurrentUser();
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  let name ='';
    if (currentUser){
      name = currentUser.username
    }else{
      name = 'Stranger'
    }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3> Welcome {name}</h3>
        <Adminregister/>
      </header>
    </div>
  );
};

export default Home;