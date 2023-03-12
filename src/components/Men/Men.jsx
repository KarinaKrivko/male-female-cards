import React from "react";
import s from "./style.module.css";
import maleAvatar from "./maleAvatar.png";

function Men(props) {
  return (
    <div className={s.men}>
      <p className={s.male}>Men</p>
      <form className={s.form}>
        <img src={maleAvatar} alt="photo" />
        <img src={maleAvatar} alt="photo" />
        <img src={maleAvatar} alt="photo" />
        <img src={maleAvatar} alt="photo" />
      </form>
    </div>
  );
}

export default Men;
