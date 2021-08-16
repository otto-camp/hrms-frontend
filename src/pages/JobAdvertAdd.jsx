import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import JobTitleService from "../services/JobTitleService";
import JobTimeService from "../services/JobTimeService";
import JobTypeService from "../services/JobTypeService";
import CityService from "../services/CityService";
import JobAdvertService from "../services/JobAdvertService";
import { Form, Header, FormGroup, TextArea } from "semantic-ui-react";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import CustomDropdown from "../components/CustomDropdown";
import CustomInput from "../components/CustomInput";
import { useSelector } from "react-redux";

export default function JobAdvertAdd({ triggerButton }) {
  const user = useSelector((state) => state.user);

  let jobAdvertService = new JobAdvertService();

  const JobAdvertAddSchema = Yup.object().shape({
    applicationDeadline: Yup.date().required("Bu alanı doldurmalısınız!"),
    cityId: Yup.number().required("Bu alanı doldurmalısınız!"),
    description: Yup.string().required("Bu alanı doldurmalısınız!"),
    jobTitleId: Yup.number().required("Bu alanı doldurmalısınız!"),
    jobTimesId: Yup.number().required("Bu alanı doldurmalısınız!"),
    jobTypeId: Yup.number().required("Bu alanı doldurmalısınız!"),
    maxSalary: Yup.number()
      .min(0, "0'dan az olamaz")
      .required("Bu alanı doldurmalısınız!"),
    minSalary: Yup.number()
      .min(0, "0'dan az olamaz")
      .required("Bu alanı doldurmalısınız!"),
    vacantPositionNumber: Yup.number()
      .min(1, "En az 1 kişi almalısınız")
      .required("Bu alanı doldurmalısınız!"),
    status: Yup.bool().required("Bu alanı doldurmalısınız!"),
    isVerified: Yup.bool().required(),
  });

  const initialValues = {
    applicationDeadline: "",
    cityId: "",
    description: "",
    jobTitleId: "",
    jobTimesId: "",
    jobTypeId: "",
    maxSalary: "",
    minSalary: "",
    status: "",
    isVerified: "",
    vacantPositionNumber: "",
  };

  const onSubmit = (values) => {
    values.employerId = user.userId;
    console.log("test");
    jobAdvertService
      .add(values)
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch((result) => {
        toast.error(result.response.data.message);
      });
  };

  const [cities, setcities] = useState([]);
  const [jobTitles, setjobTitles] = useState([]);
  const [jobTimes, setjobTimes] = useState([]);
  const [jobTypes, setjobTypes] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    let jobTimeService = new JobTimeService();
    let jobTypeService = new JobTypeService();
    let cityService = new CityService();
    jobTitleService
      .getJobTitles()
      .then((result) => setjobTitles(result.data.data));
    jobTimeService
      .getJobTimes()
      .then((result) => setjobTimes(result.data.data));
    jobTypeService
      .getJobTypes()
      .then((result) => setjobTypes(result.data.data));
    cityService.getCities().then((result) => setcities(result.data.data));
  }, []);

  const jobTimeOption = jobTimes.map((jobTimes, index) => ({
    key: index,
    text: jobTimes.jobTime,
    value: jobTimes.id,
  }));
  const jobTypeOption = jobTypes.map((jobTypes, index) => ({
    key: index,
    text: jobTypes.jobType,
    value: jobTypes.id,
  }));
  const jobTitleOption = jobTitles.map((jobTitles, index) => ({
    key: index,
    text: jobTitles.title,
    value: jobTitles.id,
  }));
  const cityOption = cities.map((cities, index) => ({
    key: index,
    text: cities.cityName,
    value: cities.id,
  }));

  return (
    <div>
      <Header as="h1" color="pink" textAlign="center">
        İş İlanı Oluştur
      </Header>

      <Formik
        initialValues={initialValues}
        validationSchema={JobAdvertAddSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <CustomDropdown
            label="İş Pozisyonu *"
            name="jobTitles"
            placeholder="İş Pozisyonu *"
            options={jobTitleOption}
          />
          <FormGroup widths="equal">
            <CustomDropdown
              label="Çalışma zamanı"
              name="jobTimes"
              placeholder="Çalışma zamanı"
              options={jobTimeOption}
            />
            <CustomInput
              label="Açık Pozisyon Sayısı *"
              name="vacantPositionNumber"
              placeholder="Açık Pozisyon Sayısı *"
              icon="briefcase"
              iconPosition="left"
            />
          </FormGroup>

          <FormGroup widths="equal">
            <CustomDropdown
              label="Şehir *"
              name="city"
              placeholder="Şehir *"
              options={cityOption}
            />
            <CustomDropdown
              label="Çalışma Şekli *"
              name="jobType"
              placeholder="Çalışma Şekli *"
              options={jobTypeOption}
            />
          </FormGroup>

          <FormGroup widths="equal">
            <CustomInput
              label="Min. Maaş"
              name="minSalary"
              placeholder="Min. Maaş"
              icon="money"
              iconPosition="left"
              type="number"
            />
            <CustomInput
              label="Maks. Maaş"
              name="maxSalary"
              placeholder="Maks. Maaş"
              icon="money"
              iconPosition="left"
              type="number"
            />
          </FormGroup>

          <CustomInput
            label="Son Başvuru Tarihi *"
            name="applicationDeadline"
            placeholder="Son Başvuru Tarihi *"
            icon="calendar alternate"
            iconPosition="left"
            type="date"
          />

          <TextArea name="description" placeholder="Açıklama " />
          <Button
            color="primary"
            size="large"
            variant="contained"
            type="submit"
            style={{ marginTop: "1em" }}
          >
            İlan Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
