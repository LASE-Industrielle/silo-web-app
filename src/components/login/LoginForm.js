import React, { useState } from "react";

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: "70%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <p style={styles.heading}>Sign In</p>
        <form
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
          onSubmit={handleSubmit}
        >
          <label style={styles.label}>Email</label>
          <input
            placeholder="xyz@example.com"
            style={styles.input}
            type="text"
            name="email"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label style={styles.label}>Password</label>
          <input
            placeholder={
              "\u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A"
            }
            style={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <a
            href="/"
            style={{
              width: "100%",
              textDecoration: "none"
            }}
          >
            <p style={styles.link}>Forgot Password</p>
          </a>
          <button style={styles.button} type="submit">
            LOG IN
          </button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <p style={styles.footer}>Don't have an account? </p>
          <a href="/" style={{ textDecoration: "none" }}>
            <p style={styles.footerLink}>Sign up</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: 24,
    fontWeight: "400",
    color: "#AAA9A9",
    width: "100%",
    // height:'10%',
    textAlign: "left"
  },
  link: {
    fontSize: 12,
    width: "100%",
    textAlign: "right",
    color: "#02A04E",
    paddingTop: 0,
    marginTop: 3
  },
  input: {
    width: "95%",
    fontWeight: "500",
    color: "#656565",
    height: "30px",
    display: "flex",
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    marginTop: 5,
    paddingLeft: 15
  },
  label: {
    fontSize: 13,
    fontWeight: "400",
    width: "100%",
    display: "flex",
    textAlign: "left",
    marginTop: 8,
    color: "#AAA9A9"
  },
  button: {
    display: "flex",
    width: "100%",
    height: "30px",
    fontSize: "12px",
    fontWeight: "500",
    marginTop: 20,
    backgroundColor: "#02A04E",
    // padding: 15,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)"
  },
  footer: {
    fontSize: 12,
    color: "#AAA9A9",
    fontStyle: "italic",
    height: 10,
    display: "flex"
  },
  footerLink: {
    fontSize: 12,
    fontWeight: "400",
    color: "#02A04E",
    height: 10,
    marginLeft: 5
  }
};

export default LoginForm;
