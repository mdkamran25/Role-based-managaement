import * as React from 'react';
import Lottie from 'lottie-react';
import animation from "./login.json";
function LoginPageAnimation() {
    return ( 
        <>
            <Lottie  animationData={animation} />
        </>
     );
}

export default  LoginPageAnimation;