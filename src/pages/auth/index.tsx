import React, { useState } from "react";
import style from "./Login.module.css";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import LoginComponent from "../../../components/auth/login/loginComponent";
import RegisterComponent from "../../../components/auth/register/registerComponent";

function Login() {
  const [showRegister, isShowRegister] = useState(false);

  function changePageAuth() {
    if (showRegister) {
      isShowRegister(false);
    } else {
      isShowRegister(true);
    }
  }
  return (
    <div>
      <div className={style["login-main"]}>
        <div className={style["login-bg"]}>
          <div className={style["left-bg"]}>
            <Image
              alt=""
              src={Logo}
              className={style["logo-image"]}
            />
            <p className={style["title-bg"]}>PTPN I COT GIREK</p>
          </div>
          <div className={style["right-bg"]}></div>
        </div>
        <div
          className={
            `${style["login-card"]} ` + `${showRegister ? "" : style["active"]}`
          }
        >
          <LoginComponent functionOnclick={changePageAuth} />
        </div>
        <div
          className={
            `${style["register-card"]} ` +
            `${showRegister ? style["active"] : ""}`
          }
        >
          <RegisterComponent functionOnClick={changePageAuth} />
        </div>
      </div>
    </div>
  );
}

export default Login;
