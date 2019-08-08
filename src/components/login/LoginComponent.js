import React, {useEffect} from 'react';
import AuthService from "../../services/AuthService";
import {useStateValue} from "../../context/StateContext";
import LoginForm from "./LoginForm";

let styles = {
  fullDimensions: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F1F1F1',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    width: '55%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    background: 'linear-gradient(#6CC799, #3A7F78)',
    width: '35%',
    height: '90%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 0,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.12)",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex'
  },
  logoContainer: {
    width: '100%', display: 'flex', alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 26,
    letterSpacing: 16
  },
  formContainer: {
    width: '40%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.12)"
  },
  gradientRight: {
    background: 'linear-gradient(#6CC799, #3A7F78)',
    width: '3%',
    height: '90%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 12,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.12)"
  }
}
const Login = (props) => {
  const [{auth}, dispatch] = useStateValue();
  const {history} = props;

  useEffect(() => {
    if (auth.token !== '' && auth.token !== undefined) {
      localStorage.setItem('token', auth.token);
      history.push('/home');
    }
  }, [auth.token]);

  const login = (username, password) => {
    AuthService.authCall(dispatch, username, password);
  };

  return (
    <div style={styles.fullDimensions}>
      <div style={styles.centerContent}>
        <div style={styles.gradientContainer}>
          <div style={styles.logoContainer}>
            <p style={styles.logoText}>SILO</p>
          </div>
        </div>
        <div style={styles.formContainer}>
          <LoginForm login={login}/>
        </div>
        <div style={styles.gradientRight}>
        </div>
      </div>
    </div>

  );
}

export default Login;
