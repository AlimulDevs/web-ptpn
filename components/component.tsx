import React, { ReactNode, useState, useEffect } from "react";
import Sidebar from "./sidebar/sidebar";
import style from "./Component.module.css";
import Header from "./header/header";

interface ComponentProps {
  children: ReactNode;
  pageTitle: string;
}

function Component(props: ComponentProps) {
  const { children, pageTitle } = props;
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const changeToken = async () => {
      setToken(localStorage.getItem("token"));
    };
    changeToken();
  }, []);
  return (
    <div className="">
      {token == null ? (
        <div></div>
      ) : (
        <div className={style["component"]}>
          <Sidebar />
          <Header />

          <div className={style["pages"]}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Component;
