import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/users";
import s from "./style.module.css";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name,
      gender,
      avatar
    };
    dispatch(addUser(user));
    setName("");
    setGender("");
    setAvatar("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          className={s.name}
          type="text"
          placeholder=" Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          className={s.avatarLink}
          type="text"
          placeholder=" Link to avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
      <br />
      <label>
        <select
          className={s.gender}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male"> Select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>
      <br />
      <button className={s.btn} type="submit">
        Add user
      </button>
    </form>
  );
};

export default AddUserForm;
