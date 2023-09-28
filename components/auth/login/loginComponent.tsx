import React from "react";
import style from "./LoginComponent.module.css";

interface LoginComponentProps {
  functionOnclick: React.MouseEventHandler<HTMLButtonElement>;
}

function LoginComponent(props: LoginComponentProps) {
  const { functionOnclick } = props;
  return (
    <div className={style["login-box"]}>
      <p className={style["title-login-box"]}>Log In</p>
      <form
        action="post"
        className={style["form-login"]}
      >
        <label
          htmlFor="username"
          className={style["label-login"]}
        >
          Username
        </label>
        <input
          type="text"
          className={style["input-login"]}
          placeholder="Your username"
        />
        <label
          htmlFor="password"
          className={style["label-login"]}
        >
          Password
        </label>
        <input
          type="text"
          className={style["input-login"]}
          placeholder="Your password"
        />
        <button className={style["form-btn"]}>Log in</button>
      </form>
      <div className={style["group-change-page"]}>
        <p>
          Do you have an account?
          <button
            onClick={functionOnclick}
            className={style["btn-link"]}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginComponent;
