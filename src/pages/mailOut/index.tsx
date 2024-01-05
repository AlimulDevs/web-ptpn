import React, { useState, useEffect } from "react";
import Component from "../../../components/component";
import Image from "next/image";
import style from "./MailOut.module.css";
import checkIcon from "../../../public/icon/check-icon (1).png";
import eyeIcon from "../../../public/icon/eye-icon.png";
import printIcon from "../../../public/icon/print-icon.png";
import mailBlackIcon from "../../../public/icon/mail-black-icon.png";
import filterIcon from "../../../public/icon/filter-icon.png";
import LoadingComponent from "../../../components/loadingComponent/loadingComponent";

function MailOut() {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const test = async () => {
      setTimeout(() => {
        isLoading(false);
      }, 500);
    };
    test();
  }, []);

  return (
    <div>
      <Component pageTitle="mail-out">
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className={style["mail-out-page"]}>
            {/* header component */}
            <div className={style["header-component"]}>
              <div className={style["header-title"]}>
                <Image
                  loading="lazy"
                  alt="image for mail icon"
                  src={mailBlackIcon}
                  className={style["mail-icon"]}
                />
                <p className={style["title-text"]}>DAFTAR SURAT KELUAR</p>
              </div>
              <div className={style["action-btn"]}>
                <button className={style["add-btn"]}>Tambah</button>
                <button className={style["delete-btn"]}>Hapus</button>
              </div>
            </div>
            {/* header component */}

            <div className={style["card"]}>
              {/* card header */}
              <div className={style["card-header"]}>
                <button className={style["filter"]}>
                  <Image
                    loading="lazy"
                    alt="image for filter icon"
                    src={filterIcon}
                    className={style["filter-icon"]}
                  />
                  <p className={style["filter-text"]}>Filter</p>
                </button>
                <input
                  type="text"
                  placeholder="Search Users by Name, Email or Date"
                  className={style["search-input"]}
                />
              </div>
              {/* end card header */}
              {/* card body */}
              <div className={style["card-body"]}>
                <table className={style["table"]}>
                  <thead className={style["table-header"]}>
                    <tr>
                      <th>NO.SURAT</th>
                      <th>TGL.SURAT</th>
                      <th>TGL.MASUK</th>
                      <th>MACAM SURAT</th>
                      <th>PERIHAL</th>
                      <th>AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button className={style["no-surat"]}>
                          <Image
                            loading="lazy"
                            alt="image for check icon"
                            src={checkIcon}
                            className={style["check-icon"]}
                          />
                          <p>001</p>
                        </button>
                      </td>
                      <td>2022-08-07</td>
                      <td>2022-08-07</td>
                      <td>POLSEK</td>
                      <td>Pengawasan kantor teknik Cot girek</td>
                      <td>
                        <button className={style["eye-btn"]}>
                          <Image
                            loading="lazy"
                            alt="image for eye icon"
                            src={eyeIcon}
                            className={style["eye-icon"]}
                          />
                        </button>
                        <button className={style["print-btn"]}>
                          {" "}
                          <Image
                            loading="lazy"
                            alt="image for print icon"
                            src={printIcon}
                            className={style["print-icon"]}
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end card body */}
            </div>
          </div>
        )}
      </Component>
    </div>
  );
}

export default MailOut;
