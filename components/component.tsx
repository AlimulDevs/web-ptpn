import React, { ReactNode } from "react";
import Sidebar from "./sidebar/sidebar";
import style from "./Component.module.css";
import Header from "./header/header";

interface ComponentProps {
  children: ReactNode;
  pageTitle: string;
}

function Component(props: ComponentProps) {
  const { children, pageTitle } = props;

  return (
    <div className={style["component"]}>
      <Sidebar />
      <Header />

      <div className={style["pages"]}>{children}</div>
    </div>
  );
}

export default Component;
