import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { useId } from "react";
import s from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const initialValues = { name: "", number: "" };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .matches(/^[0-9+()-\s]*$/, "Invalid phone number format")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={s.error} name="name" component="span" />

        <label className={s.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={s.input}
          type="tel"
          inputMode="numeric"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={s.error} name="number" component="span" />
        <button className={s.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
