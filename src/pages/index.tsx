import Image from "next/image";
import { Inter } from "next/font/google";
import Component from "../../components/component";
import style from "../styles/Index.module.css";
import mailLineIcon from "../../public/icon/mail-line-icon.png";
import usersLineIcon from "../../public/icon/users-line-icon.png";
import arrowRightIcon from "../../public/icon/arrow-right-icon.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import { time } from "console";
import CheckTokenStorage from "../../middleware/client/checkToken";
import { stringify } from "querystring";

const inter = Inter({ subsets: ["latin"] });

const listCard = [
  {
    icon: mailLineIcon,
    title: "SURAT MASUK",
    cardLink: "/mailEnter",
  },
  {
    icon: mailLineIcon,
    title: "SURAT KELUAR",

    cardLink: "/",
  },
  {
    icon: usersLineIcon,
    title: "AKUN",
    cardLink: "/",
  },
];
const totalData = [
  {
    total_data: 2,
  },
  {
    total_data: 3,
  },
  {
    total_data: 4,
  },
];

export default function Home() {
  CheckTokenStorage();

  const [loading, isLoading] = useState(true);
  const test = async () => {
    setTimeout(() => {
      isLoading(false);
    }, 500);
  };
  test();

  return (
    <div>
      <Component pageTitle="">
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className={style["index"]}>
            <div className={style["d-flex"]}>
              {listCard.map((list, index) => (
                <div
                  className={style["card"]}
                  key={index + 1}
                >
                  <div className={style["opal"]}>
                    <Image
                      alt="icon-opals"
                      src={list.icon}
                      className={style["icon"]}
                    />
                  </div>
                  <div className={style["title"]}>{list.title} </div>
                  <Link
                    href={list.cardLink}
                    className={style["button"]}
                  >
                    {totalData[index].total_data} DATA
                    <div className={style["cycle"]}>
                      <Image
                        alt="arrow-icon"
                        src={arrowRightIcon}
                        className={style["btn-icon"]}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </Component>
    </div>
  );
}
