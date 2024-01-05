import React from "react";
import Component from "../../../../components/component";
import style from "./EmployeeProfile.module.css";
import Image from "next/image";
import ProfileIcon from "../../../../public/icon/black-profile-icon.png";
import BrojalPhoto from "../../../../public/images/brojal.png";

function EmployeeProfile() {
  return (
    <Component pageTitle="profile page">
      <div className={style["card"]}>
        <div className={style["card-header"]}>
          <Image
            alt="profile icon"
            src={ProfileIcon}
          />
          <h2>PROFILE</h2>
        </div>
        <div className={style["card-body"]}>
          <div className={style["row"]}>
            <Image
              alt="photo user"
              src={BrojalPhoto}
            />
            <div className={style["data-column"]}>
              <div className={style["grup-input"]}>
                <label htmlFor="nama">NAMA</label>
                <p>:</p>
                <input
                  type="text"
                  value={"SYAHRIZAL"}
                />
              </div>
            </div>
          </div>
          <button className={style["btn"]}>EDIT PROFILE</button>
        </div>
      </div>
    </Component>
  );
}

export default EmployeeProfile;
