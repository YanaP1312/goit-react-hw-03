import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ data, onDelete }) {
  return (
    <div>
      <div>
        <p>
          <FaUserAlt />
          {data.name}
        </p>
        <a
          href={`tel:${data.number
            .trim()
            .replace(/\s+/g, "")
            .replace(/-/g, "")}`}
        >
          <FaPhoneAlt />
          {data.number}
        </a>
      </div>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
}
