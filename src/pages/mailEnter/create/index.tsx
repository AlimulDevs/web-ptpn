import React, { useState } from "react";
import Component from "../../../../components/component";
import Image from "next/image";
import mailBlackIcon from "../../../../public/icon/mail-black-icon.png";
import style from "./CreateMailEnter.module.css";
import { useRouter } from "next/router";

function CreateMailEnter() {
  const router = useRouter();

  const [noMail, setNoMail] = useState("");
  const [noMailEnter, setNoMailEnter] = useState("");
  const [regarding, setRegarding] = useState("");
  const [attachment, setAttachment] = useState("");

  const [mailDate, setMailDate] = useState("");
  const [mailAccepted, setMailAccepted] = useState("");
  const [mailForm, setMailForm] = useState("");

  const dataLeftInput = [
    {
      label: "NO.SURAT",
      id: "no_mail",
      state: setNoMail,
    },
    {
      label: "NO.SURAT MASUK",
      id: "no_mail_enter",
      state: setNoMailEnter,
    },
    {
      label: "PERIHAL",
      id: "regarding",
      state: setRegarding,
    },
    {
      label: "LAMPIRAN",
      id: "attachment",
      state: setAttachment,
    },
  ];
  const dataRightInput = [
    {
      label: "TGL.SURAT",
      id: "mail_date",
      state: setMailDate,
    },
    {
      label: "TGL.SURAT DITERIMA",
      id: "mail_accepted",
      state: setMailAccepted,
    },
    {
      label: "BENTUK SURAT",
      id: "mail_form",
      state: setMailForm,
    },
  ];

  console.log(noMail);

  return (
    <div>
      <Component pageTitle="">
        <div className={style["create-index"]}>
          <div className={style["card"]}>
            <div className={style["card-header"]}>
              <Image
                alt=""
                src={mailBlackIcon}
                className={style["mail-icon"]}
              />
              <p className={style["title-text"]}>TAMBAH SURAT MASUK</p>
            </div>
            <div className={style["card-body"]}>
              <form
                action="post"
                className={style["form"]}
              >
                <div className={style["form-horizontal"]}>
                  {/* left input */}
                  <div className={style["left-input"]}>
                    {dataLeftInput.map((data, index) => (
                      <div className={style["group-input"]}>
                        <label
                          htmlFor=""
                          className={style["label"]}
                        >
                          {data.label}
                        </label>
                        <input
                          type="text"
                          className={style["input"]}
                          onChange={(e) => {
                            data.state(e.target.value);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  {/* end left input */}

                  {/* right input */}
                  <div className={style["right-input"]}>
                    {dataRightInput.map((data, index) => (
                      <div className={style["group-input"]}>
                        <label
                          htmlFor=""
                          className={style["label"]}
                        >
                          {data.label}
                        </label>
                        <input
                          type="text"
                          id={data.id}
                          className={style["input"]}
                          onChange={(e) => {
                            data.state(e.target.value);
                          }}
                        />
                      </div>
                    ))}

                    <div className={style["group-input"]}>
                      <label
                        htmlFor=""
                        className={style["label"]}
                      >
                        STATUS & SIFAT
                      </label>
                      <select
                        name=""
                        id=""
                        className={style["input-two"]}
                      >
                        <option value="tes">tes</option>
                      </select>
                      <select
                        name=""
                        id=""
                        className={style["input-two"]}
                      >
                        <option value="tes">tes</option>
                      </select>
                    </div>
                  </div>
                  {/* end right input */}
                </div>
                <div className={style["bottom-input"]}>
                  <p className={style["label"]}>Unggah Lampiran</p>
                  <label
                    htmlFor="file-input"
                    className={style["label-file-input"]}
                  >
                    KLIK/DROP FILE DISNI
                  </label>
                  <input
                    type="file"
                    className={style["file-input"]}
                    id="file-input"
                  />
                </div>
              </form>
              <div className={style["form-footer"]}>
                <button>Tambah</button>
                <button
                  onClick={() => {
                    router.back();
                  }}
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </Component>
    </div>
  );
}

export default CreateMailEnter;
