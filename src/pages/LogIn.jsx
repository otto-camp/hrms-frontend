import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, Header, Segment } from "semantic-ui-react";
import CustomInput from "../components/CustomInput";
import { login } from "../store/actions/userActions";
import { getByEmail } from "../store/actions/userActions";

export default function LogIn() {
  const dispatch = useDispatch();

  const history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().min(1).max(100),
    password: Yup.string().required().min(1).max(100),
  });

  const pushToHome = () => {
    history.push("/");
  };
  const initialValues = {
    email: undefined,
    password: undefined,
  };
  const userStates = [
    {
      type: "employee",
      function: (data) => {},
    },
    {
      type: "employer",
      function: (data) => {},
    },
    {
      type: "personnel",
      function: (data) => {},
    },
  ];
  const onSubmit = (values) => {
    dispatch(login(values)).then((response) => {
      if (response != null) {
        dispatch(getByEmail(values.email));
        const userState = userStates.find(
          (s) => s.type === response.user.userType
        );
        userState.function(response);
        setTimeout(() => {
          pushToHome();
        }, 1);
      }
    });
  };

  return (
    <div>
      <Header as="h1" color="teal" textAlign="center">
        Giriş Yap
      </Header>
      <Segment stacked>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="ui form">
            <CustomInput
              name="email"
              placeholder="E-Posta"
              icon="mail"
              iconPosition="left"
              type="email"
            />

            <CustomInput
              name="password"
              placeholder="Şifre"
              icon="lock"
              iconPosition="left"
              type="password"
            />

            <Button type="submit" color="teal" fluid size="large">
              Giriş Yap
            </Button>
          </Form>
        </Formik>
      </Segment>
    </div>
  );
}
