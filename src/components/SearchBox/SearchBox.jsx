import { useId } from "react";

export default function SearchBox({ filter, onFilter }) {
  const searchId = useId();
  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="name"
        id={searchId}
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      ></input>
    </div>
  );
}
