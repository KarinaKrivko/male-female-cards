import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";

const Women = (props) => {
  const users = useSelector((state) => state.users);
  return (
    <div className={s.women}>
      <p className={s.female}>Women</p>
      <div className={s.form}>
        {Object.values(users)
          .flatMap((user) => user)
          .filter((usr) => usr.gender === "female")
          .map((user, index) => (
            <div className={s.row} key={index}>
              <img className={s.image} src={user.avatar} alt="photo" />
              <span className={s.name}>{user.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Women;
