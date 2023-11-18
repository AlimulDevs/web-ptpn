import React, { useState } from "react";
import style from "./LoginComponent.module.css";
import isEmail from "validator/lib/isEmail";
import { LoginIntegration } from "../../../integrations";
import { Router, useRouter } from "next/router";

interface LoginComponentProps {
  functionOnclick: React.MouseEventHandler<HTMLButtonElement>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  password: string;
}

function LoginComponent(props: LoginComponentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { functionOnclick, setEmail, setPassword, email, password } = props;

  const loginHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const loginInput = {
      email,
      password,
    };

    const fetchData = await LoginIntegration(loginInput);

    if (await fetchData.isSuccess) {
      localStorage.setItem("token", fetchData.data.token);
      localStorage.setItem("role", fetchData.data.role);
      localStorage.setItem("name", fetchData.data.name);
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <div className={style["login-box"]}>
      <p className={style["title-login-box"]}>Log In</p>
      <form
        className={style["form-login"]}
        onSubmit={loginHandler}
      >
        <label
          htmlFor="email"
          className={style["label-login"]}
        >
          Email
        </label>
        <input
          type="text"
          className={style["input-login"]}
          placeholder="Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={style["form-btn"]}>
          {" "}
          {loading ? <span className={style["loading"]}></span> : "Log In"}
        </button>
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
