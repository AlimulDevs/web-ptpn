import React from "react";
import style from "./RegisterComponent.module.css";

interface RegisterComponentProps {
  functionOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

function RegisterComponent(props: RegisterComponentProps) {
  const { functionOnClick } = props;
  return (
    <div className={style["login-box"]}>
      <p className={style["title-login-box"]}>Register Account</p>
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
        <label
          htmlFor="password"
          className={style["label-login"]}
        >
          Password Confirm
        </label>
        <input
          type="text"
          className={style["input-login"]}
          placeholder="Your password"
        />
        <button className={style["form-btn"]}>Register</button>
      </form>
      <div className={style["group-change-page"]}>
        <p>
          Already have an account?
          <button
            onClick={functionOnClick}
            className={style["btn-link"]}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterComponent;
