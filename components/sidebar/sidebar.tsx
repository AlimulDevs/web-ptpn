import React, { useState } from "react";
import Image from "next/image";
import style from "./Sidebar.module.css";
import Link from "next/link";
import { useRouter, Router } from "next/router";
import homeIcon from "../../public/icon/home-icon.png";
import profileIcon from "../../public/images/user.png";
import mailIcon from "../../public/icon/mail-icon.png";
import contentIcon from "../../public/icon/content-icon.png";
import settingIcon from "../../public/icon/setting-icon.png";
import logoutIcon from "../../public/icon/logout-icon.png";
import burgerIcon from "../../public/icon/burger-icon.png";
import userIcon from "../../public/icon/user-icon.png";
import arsipIcon from "../../public/icon/arsip-icon.png";

const ListMenuAdmin = [
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

const ListMenuEmployee = [
  {
    icon: userIcon,
    name: "PROFILE",
    url: "/employee/profile",
  },
  {
    icon: mailIcon,
    name: "SURAT MASUK",
    url: "/mailEnter/employee",
  },
  {
    icon: arsipIcon,
    name: "ARSIP CUTI",
    url: "/employee/arsip-cuti",
  },
];

function Sidebar() {
  const getRole = localStorage.getItem("role");
  console.log(getRole);
  const router = useRouter();
  const [sideBarHidden, isSideBarHidden] = useState(false);
  function burgerForHiddenSideBar() {
    if (sideBarHidden) {
      isSideBarHidden(false);
    } else {
      isSideBarHidden(true);
    }
  }

  function Logout() {
    localStorage.clear();
    router.replace("/auth");
  }
  const name = localStorage.getItem("name")?.toUpperCase();
  const role = localStorage.getItem("role")?.toUpperCase();
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
                loading="lazy"
                alt="burger icon"
                src={burgerIcon}
                className={style["burger-icon"]}
              />
            </button>
          </div>
          <Image
            loading="lazy"
            priority={false}
            alt="profile icon"
            src={profileIcon}
            className={style["photo-profile"]}
          />
          <p className={style["name"]}>{name}</p>
          <p className={style["role"]}>{role}</p>
        </div>
        {}
        <ul className={style["sidebar-menu"]}>
          {getRole == "admin"
            ? ListMenuAdmin.map((menu, index) => (
                <Link
                  href={menu.url}
                  key={index + 1}
                  className={
                    `${style["list-menu"]} ` +
                    `${router.asPath == menu.url ? style["active"] : ""}` +
                    `${
                      index == 1
                        ? router.asPath == "/mailEnter/create"
                          ? style["active"]
                          : ""
                        : ""
                    }`
                  }
                >
                  <Image
                    loading="lazy"
                    alt="menu icon"
                    src={menu.icon}
                    className={style["icon-menu"]}
                  />
                  <p className={style["text-menu"]}>{menu.name}</p>
                </Link>
              ))
            : ListMenuEmployee.map((menu, index) => (
                <Link
                  href={menu.url}
                  key={index + 1}
                  className={
                    `${style["list-menu"]} ` +
                    `${router.asPath == menu.url ? style["active"] : ""}`
                  }
                >
                  <Image
                    loading="lazy"
                    alt="menu icon"
                    src={menu.icon}
                    className={style["icon-menu"]}
                  />
                  <p className={style["text-menu"]}>{menu.name}</p>
                </Link>
              ))}

          <div className={style["line"]} />
          <Link
            href={"/auth"}
            className={style["logout-menu"]}
            onClick={Logout}
          >
            <Image
              loading="lazy"
              alt="logout icon"
              src={logoutIcon}
              className={style["icon-menu"]}
            />
            <p className={style["text-menu"]}>LOGOUT</p>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
