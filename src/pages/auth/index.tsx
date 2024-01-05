import React, { useState } from "react";
import style from "./Login.module.css";
import Logo from "../../../public/images/logo.png";
import Head from "next/head";
import Image from "next/image";
import LoginComponent from "../../../components/auth/login/loginComponent";
import RegisterComponent from "../../../components/auth/register/registerComponent";

function Login() {
  const [showRegister, isShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  function changePageAuth() {
    if (showRegister) {
      setName("");
      setEmail("");
      setPassword("");
      isShowRegister(false);
    } else {
      setName("");
      setEmail("");
      setPassword("");

      isShowRegister(true);
    }
  }

  return (
    <div>
      <Head>
        <title>PTPN 1</title>
        <meta
          name="description"
          content="ini merupakan web ptpn yang digunakan untuk mempermudah kinerja pabrik dalam memanajemen "
        />
      </Head>
      <div className={style["login-main"]}>
        <div className={style["login-bg"]}>
          <div className={style["left-bg"]}>
            <Image
              alt="logo image"
              src={Logo}
              className={style["logo-image"]}
              loading="lazy"
            />
            <p className={style["title-bg"]}>PTPN I COT GIREK</p>
          </div>
          <div className={style["right-bg"]} />
        </div>
        <div
          className={
            `${style["login-card"]} ` + `${showRegister ? "" : style["active"]}`
          }
        >
          <LoginComponent
            functionOnclick={changePageAuth}
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
          />
        </div>
        <div
          className={
            `${style["register-card"]} ` +
            `${showRegister ? style["active"] : ""}`
          }
        >
          <RegisterComponent
            functionOnClick={changePageAuth}
            name={name}
            email={email}
            password={password}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
          ></RegisterComponent>
        </div>
      </div>
    </div>
  );
}

export default Login;
