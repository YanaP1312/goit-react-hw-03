import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  return (
    <div className={s.listItem}>
      <div className={s.contactInfo}>
        <p className={s.contactName}>
          <FaUserAlt size={18} style={{ marginRight: 10 }} />
          {data.name}
        </p>
        <a
          className={s.contactNum}
          href={`tel:${data.number
            .trim()
            .replace(/\s+/g, "")
            .replace(/-/g, "")}`}
        >
          <FaPhoneAlt
            className={s.icon}
            size={18}
            style={{ marginRight: 10 }}
          />
          {data.number}
        </a>
      </div>
      <button onClick={() => onDelete(data.id)} className={s.btnDelete}>
        Delete
      </button>
    </div>
  );
}
