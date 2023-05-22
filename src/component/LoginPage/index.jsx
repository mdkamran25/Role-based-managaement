import * as React from 'react';
import AdminLogin from './AdminLogin/adminLogin';
import "./index.css";
import LoginPageAnimation from './LoginPageAnimation/LoginPageAnimation';
import MultiUserLoginButtton from './MultiUSerLoginButton/MultiUserLoginButton';
function Index() {
    return ( 
        <>
          <div className='container d-flex align-items-center justify-content-center h-100'>
            <div className='row g-0 w-100 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-center'>
                <div className='col-12 rounded-start LoginPageAnimation col-sm-6'>
                    <LoginPageAnimation />
                </div>
                <div className='col-12 pt-3 pt-md-0 col-sm-6 d-flex flex-column
                 justify-content-center align-items-center'>
                    <MultiUserLoginButtton />
                </div>
            </div>
          </div>  
        </>
     );
}

export default Index;