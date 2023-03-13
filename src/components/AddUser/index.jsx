import React, { useState, useEffect } from "react";
import s from "./style.module.css";

function AddUser() {
  const [name, setName] = useState("");
  const [users, setUser] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [sex, setSex] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("users");
    setUser(savedUser ? JSON.parse(savedUser) : []);
  }, []);


  const handleSubmit = (event) => {

    event.preventDefault();
    const newUser = { name, avatar, sex };
    const updatedUser = [...users, newUser];
    setName(updatedUser);
    localStorage.setItem("users", JSON.stringify(updatedUser));
    setName("");

  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAvatar = (event) => {
    setAvatar(event.target.value);
  };

  const handleSex = (event) => {
    setSex(event.target.value);
  };


  return (
    <div>
      <form  className={s.form} onSubmit={handleSubmit}>
        <input className={s.name}
          placeholder="Name"
          type="name"
          value={name}
          onChange={handleName}
        />

        <input className={s.avatarLink}
          placeholder="Link to avatar"
          type="avatar"
          value={avatar}
          onChange={handleAvatar}
        />

        <input className={s.sex} 
          placeholder="Sex"
          type="sex"
          value={sex}
          onChange={handleSex}
        />

        <button className={s.btn} type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddUser;