import React, { useState } from "react";
import Component from "../../../../components/component";
import Image from "next/image";
import style from "./MailEnterEmployee.module.css";
import EmailIcon from "../../../../public/icon/mail-black-icon.png";

function MailEnterEmploye() {
  const [name, setName] = useState<string | null>();
  const firstInputLeft = [
    {
      label: "NAMA",
      type: "text",
      id: "nama",
      state: setName,
    },
    {
      label: "NO. REGISTER/NRK",
      type: "text",
      id: "no_register",
      state: setName,
    },
    {
      label: "GOLONGAN",
      type: "text",
      id: "golongan",
      state: setName,
    },
    {
      label: "BAGIAN/AFDILING/KEBUN",
      type: "text",
      id: "bagian",
      state: setName,
    },
  ];
  const firstInputRight = [
    {
      label: "LAMA CUTI YANG DIAMBIL",
      type: "text",
      id: "lama_cuti",
      state: setName,
    },
    {
      label: "TANGGAL MULAI CUTI",
      type: "text",
      id: "tanggal_mulai_cuti",
      state: setName,
    },
    {
      label: "KEPERLUAR CUTI",
      type: "text",
      id: "keperluan_cuti",
      state: setName,
    },
    {
      label: "ALAMAT SELAMA CUTI",
      type: "text",
      id: "alamat_cuti",
      state: setName,
    },
  ];
  const secondInputLeft = [
    {
      label: "PERIODE",
      type: "text",
      id: "periode_cuti_tahunan",
      state: setName,
    },
    {
      label: "JUMLAH",
      type: "text",
      id: "jumlah_cuti_tahunan",
      state: setName,
    },
    {
      label: "SISA SETELAH CUTI TAHUNAN",
      type: "text",
      id: "sisa_cuti_tahunan",
      state: setName,
    },
    {
      label: "JUMLAH",
      type: "text",
      id: "jumlah_cuti_tahunan",
      state: setName,
    },
  ];
  const secondInputRight = [
    {
      label: "PERIODE",
      type: "text",
      id: "periode_cuti_tahunan",
      state: setName,
    },
    {
      label: "JUMLAH",
      type: "text",
      id: "jumlah_cuti_tahunan",
      state: setName,
    },
    {
      label: "SISA SETELAH CUTI TAHUNAN",
      type: "text",
      id: "sisa_cuti_tahunan",
      state: setName,
    },
    {
      label: "JUMLAH",
      type: "text",
      id: "jumlah_cuti_tahunan",
      state: setName,
    },
  ];

  return (
    <Component pageTitle="mail enter employee">
      <div className={style["card"]}>
        <div className={style["card-header"]}>
          <Image
            loading="lazy"
            src={EmailIcon}
            alt="image for mail icon"
          />
          <p>SURAT CUTI</p>
        </div>
        <div className={style["card-body"]}>
          <form
            action=""
            className={style["form"]}
          >
            <div className={style["form-input-first"]}>
              <div className={style["left-group-input"]}>
                {firstInputLeft.map((data, index) => (
                  <div
                    className={style["horizontal-input"]}
                    key={index + 1}
                  >
                    <label htmlFor="name">{data.label}</label>
                    <input
                      type={data.type}
                      id={data.id}
                      onChange={(e) => {
                        data.state(e.target.value);
                      }}
                      className={style["long-input"]}
                    />
                  </div>
                ))}
              </div>
              <div className={style["right-group-input"]}>
                {firstInputRight.map((data, index) => (
                  <div
                    className={style["horizontal-input"]}
                    key={index + 1}
                  >
                    <label htmlFor="name">{data.label}</label>
                    <input
                      type={data.type}
                      id={data.id}
                      onChange={(e) => {
                        data.state(e.target.value);
                      }}
                      className={style["long-input"]}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={style["form-input-second"]}>
              <div className={style["left-group-input"]}>
                <p className={style["header-input"]}>CUTI TAHUNAN PERIODE</p>
                {secondInputLeft.map((data, index) => (
                  <div
                    className={style["horizontal-input"]}
                    key={index + 1}
                  >
                    <label htmlFor="name">{data.label}</label>
                    <input
                      type={data.type}
                      id={data.id}
                      onChange={(e) => {
                        data.state(e.target.value);
                      }}
                      className={style["sort-input"]}
                    />
                  </div>
                ))}
              </div>
              <div className={style["right-group-input"]}>
                <p className={style["header-input"]}>CUTI PANJANG PERIODE</p>
                {secondInputRight.map((data, index) => (
                  <div
                    className={style["horizontal-input"]}
                    key={index + 1}
                  >
                    <label htmlFor="name">{data.label}</label>
                    <input
                      type={data.type}
                      id={data.id}
                      onChange={(e) => {
                        data.state(e.target.value);
                      }}
                      className={style["sort-input"]}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={style["form-footer"]}>
              <button>KIRIM</button>
              <button>BATAL</button>
            </div>
          </form>
        </div>
      </div>
    </Component>
  );
}

export default MailEnterEmploye;
