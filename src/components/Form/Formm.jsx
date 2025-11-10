import { Formik, Field, ErrorMessage, Form } from "formik";
import { validate } from "../../Schema/Schema";
import Button from "@mui/material/Button";

import { BasicModal } from "../Modal/Modal";
import { useState } from "react";
import "./Formm.css";

export const Formm = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: "",
            userName: "",
            email: "",
            pass: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={openModal}
        >
          <Form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              flexDirection: "column",
            }}
          >
            <h1>Regest For Buy</h1>
            <div>
              <Field name="name" placeholder="Write Your Name" />
              <ErrorMessage name="name">{(msg) => <p>{msg}</p>}</ErrorMessage>
            </div>
            <div>
              <Field name="userName" placeholder="Write Your User Name" />
              <ErrorMessage name="userName">
                {(msg) => <p>{msg}</p>}
              </ErrorMessage>
            </div>
            <div>
              <Field name="email" placeholder="Write Your email" />
              <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
            </div>
            <div>
              <Field name="pass" placeholder="Password" />
              <ErrorMessage name="pass">{(msg) => <p>{msg}</p>}</ErrorMessage>
            </div>
            <div>
              <Field name="confirmPassword" placeholder="confirm Password" />
              <ErrorMessage name="confirmPassword">
                {(msg) => <p>{msg}</p>}
              </ErrorMessage>
            </div>
            <Button variant="contained" type="sumbit">
              Regest
            </Button>
          </Form>
        </Formik>
      </div>
      <BasicModal open={open} closeModal={closeModal} />
    </>
  );
};
