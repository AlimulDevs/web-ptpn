import React, { useState } from "react";
import style from "./RegisterComponent.module.css";
import { RegisterIntegration } from "../../../integrations";
import Router, { useRouter } from "next/router";

interface RegisterComponentProps {
  functionOnClick: React.MouseEventHandler<HTMLButtonElement>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  name: string;
  email: string;
  password: string;
}

function RegisterComponent(props: RegisterComponentProps) {
  const router = useRouter();
  const {
    functionOnClick,
    setName,
    setEmail,
    setPassword,
    name,
    email,
    password,
  } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  async function RegisterHandler(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const request = {
      name,
      email,
      password,
    };

    const data = await RegisterIntegration(request);
    setAlertMessage(await data.message);
    if (await data.isSuccess) {
      // document.getElementById("btn-link")?.click();
      setLoading(false);
      setSuccess(true);
      setAlert(true);
    } else {
      setLoading(false);
      setAlert(true);
      setSuccess(false);
    }
    setTimeout(() => {
      setAlert(false);
    }, 6000);

    console.log(await data);
  }

  return (
    <div className={style["login-box"]}>
      <p className={style["title-login-box"]}>Register Account</p>
      <div
        className={
          `${style["alert"]} ` +
          `${alert ? (success ? style["success"] : style["danger"]) : ""} `
        }
      >
        {alertMessage}
      </div>
      <form
        onSubmit={RegisterHandler}
        className={style["form-login"]}
      >
        <label
          htmlFor="name"
          className={style["label-login"]}
        >
          Name
        </label>
        <input
          type="text"
          className={style["input-login"]}
          placeholder="Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label
          htmlFor="email"
          className={style["label-login"]}
        >
          Email
        </label>
        <input
          type="email"
          className={style["input-login"]}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label
          htmlFor="password"
          className={style["label-login"]}
        >
          Password
        </label>
        <input
          type="password"
          className={style["input-login"]}
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className={style["form-btn"]}>
          {loading ? <span className={style["loading"]}></span> : "Register"}
        </button>
      </form>
      <div className={style["group-change-page"]}>
        <p>
          Already have an account?
          <button
            onClick={functionOnClick}
            className={style["btn-link"]}
            id="btn-link"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterComponent;
