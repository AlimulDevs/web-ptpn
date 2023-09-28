import Image from "next/image";
import { Inter } from "next/font/google";
import Component from "../../components/component";
import style from "../styles/Index.module.css";
import mailLineIcon from "../../public/icon/mail-line-icon.png";
import usersLineIcon from "../../public/icon/users-line-icon.png";
import arrowRightIcon from "../../public/icon/arrow-right-icon.png";

const inter = Inter({ subsets: ["latin"] });

const listCard = [
  {
    icon: mailLineIcon,
    title: "SURAT MASUK",
    cardLink: "/",
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
  return (
    <div>
      <Component pageTitle="">
        <div className={style["index"]}>
          <div className={style["d-flex"]}>
            {listCard.map((list, index) => (
              <div className={style["card"]}>
                <div className={style["opal"]}>
                  <Image
                    alt=""
                    src={list.icon}
                    className={style["icon"]}
                  />
                </div>
                <div className={style["title"]}>{list.title} </div>
                <button className={style["button"]}>
                  {totalData[index].total_data} DATA
                  <div className={style["cycle"]}>
                    {" "}
                    <Image
                      alt=""
                      src={arrowRightIcon}
                      className={style["btn-icon"]}
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </Component>
    </div>
  );
}
