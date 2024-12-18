import { useId } from "react";
import s from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  const searchId = useId();
  return (
    <div>
      <label className={s.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="name"
        id={searchId}
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      ></input>
    </div>
  );
}
