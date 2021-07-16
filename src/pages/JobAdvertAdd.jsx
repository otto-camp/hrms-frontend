import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import JobTitleService from "../services/JobTitleService";
import JobTimeService from "../services/JobTimeService";
import JobTypeService from "../services/JobTypeService";
import CityService from "../services/CityService";
import JobAdvertService from "../services/JobAdvertService";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Form,
  Grid,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function JobAdvertAdd({ triggerButton }) {
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

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId = 52;
      jobAdvertService
        .add(values)
        .then((result) => {
          toast.success(result.data.message);
        })
        .catch((result) => {
          toast.error(result.response.data.message);
        });
    },
  });

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

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <Dropdown
            clearable
            item
            placeholder="Şehir"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "cityId")
            }
            onBlur={formik.onBlur}
            id="cityId"
            value={formik.values.cityId}
            options={cityOption}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            clearable
            item
            placeholder="İş Başlığı"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "jobTitleId")
            }
            onBlur={formik.onBlur}
            id="jobTitleId"
            value={formik.values.jobTitleId}
            options={jobTitleOption}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            clearable
            item
            placeholder="Çalışma Tipi"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "jobTypeId")
            }
            onBlur={formik.onBlur}
            id="jobTypeId"
            value={formik.values.jobTypeId}
            options={jobTypeOption}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            clearable
            item
            placeholder="Çalışma Zamanı"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "jobTimeId")
            }
            onBlur={formik.onBlur}
            id="jobTimeId"
            value={formik.values.jobTimeId}
            options={jobTimeOption}
          />
        </Form.Field>
        <Form.Field>
          <Grid stackable>
            <Grid.Column width={8}>
              <Input
                style={{ width: "100%" }}
                type="number"
                placeholder="Minimum Maaş"
                value={formik.values.minSalary}
                name="minSalary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.errors.minSalary && formik.touched.minSalary && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.minSalary}
                </div>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <Input
                style={{ width: "100%" }}
                type="number"
                placeholder="Maksimum Maaş"
                value={formik.values.maxSalary}
                name="maxSalary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.errors.maxSalary && formik.touched.maxSalary && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.maxSalary}
                </div>
              )}
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field>
          <Grid stackable>
            <Grid.Column width={8}>
              <Input
                style={{ width: "100%" }}
                id="vacantPositionNumber"
                name="vacantPositionNumber"
                error={Boolean(formik.errors.vacantPositionNumber)}
                onChange={formik.handleChange}
                value={formik.values.vacantPositionNumber}
                onBlur={formik.handleBlur}
                type="number"
                placeholder="Açık Posisyon sayısı"
              />
              {formik.errors.vacantPositionNumber &&
                formik.touched.vacantPositionNumber && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.vacantPositionNumber}
                  </div>
                )}
            </Grid.Column>
            <Grid.Column width={8}>
              <Input
                style={{ width: "100%" }}
                type="date"
                error={Boolean(formik.errors.applicationDeadline)}
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "applicationDeadline")
                }
                value={formik.values.applicationapplicationDeadline}
                onBlur={formik.handleBlur}
                name="applicationDeadline"
                placeholder="Son başvuru tarihi"
              />
              {formik.errors.applicationapplicationDeadline &&
                formik.touched.applicationDeadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                )}
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field></Form.Field>
        <Form.Field>
          <TextArea
            placeholder="Açıklama"
            style={{ minHeight: 100 }}
            error={Boolean(formik.errors.description).toString()}
            value={formik.values.description}
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.description && formik.touched.description && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.description}
            </div>
          )}
        </Form.Field>
        <Button
          content="Ekle"
          labelPosition="right"
          icon="add"
          primary
          type="submit"
          style={{ marginLeft: "20px" }}
        />
      </Form>
      )
    </div>
  );
}
