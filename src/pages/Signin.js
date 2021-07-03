import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import { connect } from "react-redux";
import Countries from "./subs/Countries";
import firebase from "../firebase";



import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from '@firebase/auth';

const auth = getAuth();

function Signin(props) {
  const { codeSent, setState , confirmation} = props;
  const [country, setCountry] = useState('+94');
  const [phone, setPhone] = useState(null);
  const [vcode, setCode] = useState(null);

  useEffect(() => {
    window.recaptcha  = new RecaptchaVerifier(`captcha`,{},auth);
    window.recaptcha.render().then(widget => {
      window.authWidget = widget;
    }); 

  },[])

  const signin = () => {

    signInWithPhoneNumber(auth,country + phone, window.recaptcha)
    .then(confirmationCode => {
      // store it to redux
      setState({codeSent: true, confirmation: confirmationCode});

    })
    .catch(err => {
      console.log(err);
    })

  }
  const verifyCode = () => {

    confirmation.confirm(vcode)

    .then(result => {
      // store it to redux
      
      setState({session:true, user:result.user});

    })
    .catch(err => {
      console.log(err);
    })

  }

  const authView = () => {
    return (
      <div className={`auth rel`}>
        {/* <img src={Logo} className={`logo bl`} alt="whatsapp logo" /> */}
        <h2 className={`s20 font title b `}>Signin to Whatsapp</h2>
        <h2 className={`s15 font slogan`}>
          Enter Your Phone number. We will verify your number by sending a
          verification code.
        </h2>

        <div className={`signin `}>
          <select onChange={evt=> setCountry(evt.target.value)} className={`input s15 font `} value={country}>
            {Countries.map((item) => (
              <option key={`dd-` +item.name} value={item.dial_code}>{item.dial_code}</option>
            ))}
          </select>
          <input
            type={`text`}
            value={phone == null ? "" : phone}
            onChange={evt => setPhone(evt.target.value == "" ?  null  : evt.target.value)}
            placeholder={`77 123 4567`}
            className={`input s15 font phone`}
          />
        </div>
        <div className={`captcha`} id={`captcha`} />
        <button className={`button s15 font b cfff`} onClick={evt=>signin()}>Continue</button>
      </div>
    );
  };
  const verifyView = () => {
    return (
      <div className={`auth rel`}>
        {/* <img src={Logo} className={`logo bl`} alt="whatsapp logo" /> */}
        <h2 className={`s20 font title b `}>Verify Phone number</h2>
        <h2 className={`s15 font slogan`}>
          We have sent an sms verification code to{" "}
          <span className={`b`}>{country + phone}</span>
        </h2>

        <div className={`signin `}>
          <input
            type={`text`}
            value={vcode || ""}
            onChange={evt => setCode(evt.target.value == "" ?  null : evt.target.value)}
            placeholder={`Enter Code here`}
            className={`input s15 font phone`}
          />
        </div>

        <button className={`button s15 font b cfff`} onClick={evt=>verifyCode()}>Continue</button>
      </div>
    );
  };
  return codeSent ? verifyView() : authView();
}

const mapStateToProps = (state) => {
  return {
    ...state.App,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setState: state =>
      dispatch({ type: "APP_STATE", state: { ...state} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
