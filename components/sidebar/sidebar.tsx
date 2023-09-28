import React, { useState } from "react";
import Image from "next/image";
import style from "./Sidebar.module.css";
import Link from "next/link";
import { useRouter, Router } from "next/router";
import homeIcon from "../../public/icon/home-icon.png";
import mailIcon from "../../public/icon/mail-icon.png";
import contentIcon from "../../public/icon/content-icon.png";
import settingIcon from "../../public/icon/setting-icon.png";
import logoutIcon from "../../public/icon/logout-icon.png";
import burgerIcon from "../../public/icon/burger-icon.png";

const ListMenu = [
  {
    icon: homeIcon,
    name: "DASHBOARD",
    url: "/",
  },
  {
    icon: mailIcon,
    name: "SURAT MASUK",
    url: "/mailEnter",
  },
  {
    icon: mailIcon,
    name: "SURAT KELUAR",
    url: "/mailOut",
  },
  {
    icon: contentIcon,
    name: "LAPORAN SURAT",
    url: "/mailReport",
  },
  {
    icon: settingIcon,
    name: "PENGATURAN",
    url: "/setting",
  },
];

function Sidebar() {
  const router = useRouter();
  const [sideBarHidden, isSideBarHidden] = useState(false);
  function burgerForHiddenSideBar() {
    if (sideBarHidden) {
      isSideBarHidden(false);
    } else {
      isSideBarHidden(true);
    }
  }
  return (
    <>
      <div
        className={
          `${style["shadow-width"]} ` +
          `${sideBarHidden ? style["hidden"] : ""}`
        }
      />
      <div
        className={
          `${style["sidebar"]} ` + `${sideBarHidden ? style["hidden"] : ""}`
        }
      >
        <div className={style["side-header"]}>
          <div className={style["burger-menu"]}>
            <button
              onClick={burgerForHiddenSideBar}
              className={style["icon"]}
            >
              <Image
                alt=""
                src={burgerIcon}
                className={style["burger-icon"]}
              ></Image>
            </button>
          </div>
          <Image
            alt=""
            src={""}
            className={style["photo-profile"]}
          ></Image>
          <p className={style["name"]}>ADMIN</p>
          <p className={style["role"]}>SUPER USER</p>
        </div>

        <ul className={style["sidebar-menu"]}>
          {ListMenu.map((menu) => (
            <Link
              href={menu.url}
              className={
                `${style["list-menu"]} ` +
                `${router.asPath == menu.url ? style["active"] : ""}`
              }
            >
              <Image
                alt=""
                src={menu.icon}
                className={style["icon-menu"]}
              />
              <p className={style["text-menu"]}>{menu.name}</p>
            </Link>
          ))}

          <div className={style["line"]} />
          <li className={style["logout-menu"]}>
            {" "}
            <Image
              alt=""
              src={logoutIcon}
              className={style["icon-menu"]}
            />
            <p className={style["text-menu"]}>LOGOUT</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
