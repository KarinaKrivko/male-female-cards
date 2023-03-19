import React from "react";
import s from "./style.module.css";

import { useSelector } from "react-redux";

const Men = (props) => {
  const users = useSelector((state) => state.users);

  return (
    <div className={s.men}>
      <p className={s.male}>Men</p>
      <div className={s.form}>
        {Object.values(users)
          .flatMap((user) => user)
          .filter((usr) => usr.gender === "male")
          .map((user, index) => (
            <div key={index}>
              <img className={s.image} src={user.avatar} alt="photo" />
              <span className={s.name}>{user.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Men;
