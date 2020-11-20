import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function Facebook() {
  const [userInfo, setUserInfo] = useState();
  const componentClicked = () => console.log('clicked');

  const responseFacebook = (response) => {
    console.log(response);

    // this.setState({
    //   isLoggedIn: true,
    //   userID: response.userID,
    //   name: response.name,
    //   email: response.email,
    //   picture: response.picture.data.url,
    // });
  };

  return (
    <>
      <FacebookLogin
        appId="750285922246047"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </>
  );
}

export default Facebook;
