import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';

function App() {

  // const [login, setLogin] = useState(false);
  // const [data, setData] = useState({});
  // const [picture, setPicture] = useState('');

  // const responseFacebook = (response) => {
  //   console.log(response);
  //   setData(response);
  //   setPicture(response.picture.data.url);
  //   if (response.accessToken) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // }

  return (
    <div class="container">
      {/* <div style={{ width: '600px' }}>
        <h1>
          {
           <FacebookLogin
              appId="414597001568100"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile" 
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          {login &&
            <img src={picture} roundedCircle />
          }
        </h1>
        {login &&
          <div>
            <p>{data.name}</p>
            <div>
              {data.email}
            </div>
          </div>
        }
      </div> */}
    </div>
  );
}

export default App;