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
import GetLetterIntegration from "../../integrations/letter/getLetterIntegration";
import LetterResponse from "../../types/letter";
import { HomeResponse } from "../../types";

const inter = Inter({ subsets: ["latin"] });

interface DataHomeResponse {
  message: string;
  data: HomeResponse;
}

function Home(props: DataHomeResponse) {
  CheckTokenStorage();

  const listCard = [
    {
      icon: mailLineIcon,
      title: "SURAT MASUK",
      cardLink: "/mailEnter",
      total_data: props.data.letter_enter_length,
    },
    {
      icon: mailLineIcon,
      title: "SURAT KELUAR",
      cardLink: "/mailOut",
      total_data: props.data.letter_out_length,
    },
    {
      icon: usersLineIcon,
      title: "AKUN",
      cardLink: "/",
      total_data: props.data.user_length,
    },
  ];

  const [loading, isLoading] = useState(true);
  const test = async () => {
    setTimeout(() => {
      isLoading(false);
    }, 0);
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
                      loading="lazy"
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
                    {list.total_data} DATA
                    <div className={style["cycle"]}>
                      <Image
                        loading="lazy"
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

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "home";
  const fetchData = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const data = await fetchData.json();

  return {
    props: data,
  };
}

export default Home;
