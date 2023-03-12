import React from "react";
import s from "./style.module.css";

function Form(props) {
  return (
    <form className={s.form}>
      <input className={s.name} placeholder=" Name"></input>
      <input className={s.avatarLink} placeholder=" Link to avatar"></input>
      <input className={s.sex} placeholder=" Sex"></input>
      <button className={s.btn}>Add</button>
    </form>
  );
}

export default Form;
