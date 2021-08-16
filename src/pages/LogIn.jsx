import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Header, Message, Segment } from "semantic-ui-react";
import CustomInput from "../components/CustomInput";
import { userLogin } from "../store/actions/userActions";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function LogIn() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();

  const handleLogin = (user) => {
    dispatch(userLogin(user));
  };

  const history = useHistory();

  let userService = new UserService();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Bu alandı doldurmak zorundasınız!"),
    password: Yup.string().required("Bu alanı doldurmak zorunasınzı!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    userService.login(values).then((result) => {
      handleLogin(result.data.data);
      history.push("/");
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
            <Button
              color="primary"
              size="large"
              variant="contained"
              type="submit"
              style={{marginTop:"0.5em"}}
            >
              Giriş yap
            </Button>
          </Form>
        </Formik>
        <Message info>
          Kayıtlı değil misin?{" "}
          <b>
            <Link to={"/register/register"}>Şimdi Kaydol</Link>
          </b>
        </Message>
      </Segment>
    </div>
  );
}
