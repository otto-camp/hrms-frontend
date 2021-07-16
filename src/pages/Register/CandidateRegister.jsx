import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import AuthService from "../../services/AuthService";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { Button, Form, FormGroup } from "semantic-ui-react";
import CustomInput from "../../components/CustomInput";

export default function CandidateRegister() {
  const registerSchema = Yup.object().shape({
    birthDate: Yup.date().required("Bu alanı doldurmalısınız!"),
    email: Yup.string().required("Bu alanı doldurmalısınız!"),
    firstName: Yup.string().required("Bu alanı doldurmalısınız!"),
    identityNumber: Yup.string()
      .min(11)
      .max(11)
      .required("Bu alanı doldurmalısınız!"),
    lastName: Yup.string().required("Bu alanı doldurmalısınız!"),
    password: Yup.string().required("Bu alanı doldurmalısınız!"),
    passwordRep: Yup.string().required("Bu alanı doldurmalısınız!"),
  });
  const history = useHistory();

  const authService = new AuthService();
  
  const initialValues =  {
      birthDate: "",
      email: "",
      firstName: "",
      identityNumber: "",
      lastName: "",
      password: "",
      passwordRep: "",
    }
    
    const onSubmit =  (values) => {
      authService
        .registerCandidate(values)
        .then((result) => {
          toast.success(result.data.message);
          history.push("/login");
        })
        .catch((result) => {
          toast.error(result.response.data.message);
        });
    };
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <FormGroup widths="equal">
            <CustomInput
              name="firstName"
              placeholder="Ad"
              icon="user"
              iconPosition="left"
            />
            <CustomInput
              name="lastName"
              placeholder="Soyad"
              icon="user"
              iconPosition="left"
            />
          </FormGroup>
          <CustomInput
            name="identityNumber"
            placeholder="TC Kimlik No"
            icon="id card"
            iconPosition="left"
          />
          <CustomInput
            name="birthDate"
            placeholder={"Doğum Yılınız"}
            icon="birthday"
            iconPosition="left"
            type="date"
          />
          <CustomInput
            name="email"
            placeholder="E-Posta"
            icon="mail"
            iconPosition="left"
            type="email"
          />
          <FormGroup widths="equal">
            <CustomInput
              name="password"
              placeholder="Şifre"
              icon="lock"
              iconPosition="left"
              type="password"
            />
            <CustomInput
              name="passwordRep"
              placeholder="Şifre Tekrarı"
              icon="lock"
              iconPosition="left"
              type="password"
            />
          </FormGroup>
          <br />
          <Button type="submit" color="teal" fluid size="large">
            Kayıt Ol
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
