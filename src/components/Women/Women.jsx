import React from "react";
import s from "./style.module.css";
import femaleAvatar from "./female.jpeg";

function Women(props) {
  return (
    <div className={s.women}>
      <p className={s.female}>Women</p>
      <form className={s.form}>
        <img src={femaleAvatar} alt="photo" height={160} width={160} />
        <img src={femaleAvatar} alt="photo" height={160} width={160} />
        <img src={femaleAvatar} alt="photo" height={160} width={160} />
        <img src={femaleAvatar} alt="photo" height={160} width={160} />
      </form>
    </div>
  );
}

export default Women;
