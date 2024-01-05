import React, { useState } from "react";
import Component from "../../../../components/component";
import Image from "next/image";
import mailBlackIcon from "../../../../public/icon/mail-black-icon.png";
import style from "./CreateMailEnter.module.css";
import { useRouter } from "next/router";
import LetterRequest from "../../../../types/letter/letterRequest";
import { CreateLetterIntegration } from "../../../../integrations";

function CreateMailEnter() {
  const router = useRouter();

  const [noLetter, setNoLetter] = useState("");
  const [noLetterEnter, setNoLetterEnter] = useState("");
  const [regarding, setRegarding] = useState("");
  const [attachment, setAttachment] = useState("");

  const [dateLetter, setDateLetter] = useState("");
  const [dateEntry, setDateEntry] = useState("");
  const [letterForm, setLetterForm] = useState("");

  const dataLeftInput = [
    {
      label: "NO.SURAT",
      id: "no_mail",
      state: setNoLetter,
      type: "number",
    },
    {
      label: "NO.SURAT MASUK",
      id: "no_mail_enter",
      state: setNoLetterEnter,
      type: "text",
    },
    {
      label: "PERIHAL",
      id: "regarding",
      state: setRegarding,
      type: "text",
    },
    {
      label: "LAMPIRAN",
      id: "attachment",
      state: setAttachment,
      type: "text",
    },
  ];
  const dataRightInput = [
    {
      label: "TGL.SURAT",
      id: "date_letter",
      state: setDateLetter,
      type: "date",
    },
    {
      label: "TGL.SURAT DITERIMA",
      id: "mail_accepted_date",
      state: setDateEntry,
      type: "date",
    },
    {
      label: "BENTUK SURAT",
      id: "mail_form",
      state: setLetterForm,
      type: "text",
    },
  ];

  console.log(noLetter);
  const request: LetterRequest = {
    attachment: attachment,
    attachment_file_url: "tes",
    characteristic: "tes",
    date_entry: dateEntry,
    date_letter: dateLetter,
    letter_form: letterForm.toUpperCase(),
    letter_type: "tes",
    no_letter: Number(noLetter),
    regarding: regarding,
    status: "",
    letter_out: false,
  };
  const LetterCreateHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await CreateLetterIntegration(request);
    console.log(await data);
    if (await data.isSuccess) {
      router.push("/mailEnter");
    }
  };

  return (
    <div>
      <Component pageTitle="">
        <div className={style["create-index"]}>
          <div className={style["card"]}>
            <div className={style["card-header"]}>
              <Image
                loading="lazy"
                alt="image for mail icon"
                src={mailBlackIcon}
                className={style["mail-icon"]}
              />
              <p className={style["title-text"]}>TAMBAH SURAT MASUK</p>
            </div>
            <div className={style["card-body"]}>
              <form
                onSubmit={LetterCreateHandler}
                className={style["form"]}
              >
                <div className={style["form-horizontal"]}>
                  {/* left input */}
                  <div className={style["left-input"]}>
                    {dataLeftInput.map((data, index) => (
                      <div
                        className={style["group-input"]}
                        key={index + 1}
                      >
                        <label
                          htmlFor=""
                          className={style["label"]}
                        >
                          {data.label}
                        </label>
                        <input
                          required={true}
                          type={data.type}
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
                      <div
                        className={style["group-input"]}
                        key={index + 1}
                      >
                        <label
                          htmlFor={data.id}
                          className={style["label"]}
                        >
                          {data.label}
                        </label>
                        <input
                          required={true}
                          type={data.type}
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
                        htmlFor="status"
                        className={style["label"]}
                      >
                        STATUS & SIFAT
                      </label>
                      <select
                        name=""
                        id="status"
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

                <div className={style["form-footer"]}>
                  <button type="submit">Tambah</button>
                  <button
                    onClick={() => {
                      router.back();
                    }}
                  >
                    Kembali
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Component>
    </div>
  );
}

export default CreateMailEnter;
