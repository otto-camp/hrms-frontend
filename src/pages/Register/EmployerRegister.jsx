import { Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Form, FormGroup, Header } from "semantic-ui-react";
import * as Yup from "yup";
import AuthService from "../../services/AuthService";
import CustomInput from "../../components/CustomInput";
import { Button } from "@material-ui/core";

export default function EmployerRegister() {
  const registerSchema = Yup.object().shape({
    companyName: Yup.string().required("Bu alanı doldurmalısınız!"),
    email: Yup.string().required("Bu alanı doldurmalısınız!"),
    password: Yup.string().required("Bu alanı doldurmalısınız!"),
    passwordRep: Yup.string().required("Bu alanı doldurmalısınız!"),
    phoneNumber: Yup.string().required("Bu alanı doldurmalısınız!"),
    website: Yup.string().required("Bu alanı doldurmalısınız!"),
  });
  const initialValues = {
    companyName: "",
    email: "",
    password: "",
    passwordRep: "",
    phoneNumber: "",
    website: "",
  };
  const history = useHistory();
  const authService = new AuthService();

  const onSubmit = (values) => {
    console.log("test");
    authService
      .registerEmployer(values)
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
      <Header as="h1" color="pink" textAlign="center">
        Kayıt Formu
      </Header>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <CustomInput
            name="companyName"
            placeholder="Şirket Adı"
            icon="building"
            iconPosition="left"
          />
          <CustomInput
            name="website"
            placeholder="Website"
            icon="terminal"
            iconPosition="left"
          />
          <CustomInput
            name="email"
            placeholder="Eposta"
            icon="at"
            iconPosition="left"
          />
          <CustomInput
            name="phoneNumber"
            placeholder="Telefon Numarası"
            icon="phone"
            iconPosition="left"
          />
          <FormGroup widths="equal">
            <CustomInput
              name="password"
              placeholder="Şifre"
              icon="lock"
              iconPosition="left"
            />
            <CustomInput
              name="passwordRep"
              placeholder="Şifre Tekrarı"
              icon="lock"
              iconPosition="left"
            />
          </FormGroup>
          <br />
          <Button
            color="primary"
            size="large"
            variant="contained"
            type="submit"
          >
            Kayıt ol
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
