import React from "react";
import s from "./style.module.css";

function Men(props) {
  return (
    <div className={s.men}>
      <p className={s.male}>Men</p>
      <form className={s.form}>
        <img alt="photo" />
        <img alt="photo" />
        <img alt="photo" />
        <img alt="photo" />
      </form>
    </div>
  );
}

export default Men;
