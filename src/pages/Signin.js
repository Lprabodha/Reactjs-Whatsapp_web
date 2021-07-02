import React, {useState,useEffect} from "react";
import Logo from "../images/logo.png";
import { connect } from "react-redux";
import Countries from "./subs/Countries";

function Signin(props) {
 
  const {codeSent } = props; 

  const authView = () =>{
    return(
      <div className={`auth rel`}>
      {/* <img src={Logo} className={`logo bl`} alt="whatsapp logo" /> */}
      <h2 className={`s20 font title b `}>Signin to Whatsapp</h2>
      <h2 className={`s15 font slogan`}>Enter Your Phone number. We will verify your number by sending  a verification
       code.</h2>

       <div className={`signin `}>
            <select className={`input s15 font `} value={`+94`}>
              {
                Countries.map(item => <option value={item.dial_code}>{item.dial_code}</option>)
              }

            </select>
            <input type={`text`}  placeholder={`77 123 4567`} className={`input s15 font phone`}/>
       </div>

       <button className={`button s15 font b cfff`}>Continue</button>
    </div>
    );
  }
  const verifyView = () =>{
    return(
      <div className={`auth rel`}>
      {/* <img src={Logo} className={`logo bl`} alt="whatsapp logo" /> */}
      <h2 className={`s20 font title b `}>Verify Phone number</h2>
      <h2 className={`s15 font slogan`}>We  have  sent  an sms  verification code to <span className={`b`}>+94 77 123 4567</span></h2>

       <div className={`signin `}>
  
            <input type={`text`}  placeholder={`Enter Code here`} className={`input s15 font phone`}/>
       </div>

       <button className={`button s15 font b cfff`}>Continue</button>
    </div>
    );
  }
  return (
    codeSent ? verifyView() : authView()
  
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.App,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "APP_STATE", state: { loaded: loaded } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
