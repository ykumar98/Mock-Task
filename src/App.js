import { Container, Row, Stack, Form } from "react-bootstrap";
import { Header } from "./Header";
import { FormData } from "./FormData";
import "./styles.css";
import { useState } from "react";
import { Formik } from "formik";
import { initialValues } from "./data";
import * as yup from "yup";
const App = () => {
  const [value, setValue] = useState(initialValues);
  const schema = yup.object({
    name: yup.string().required(),
    dateOfBirth: yup.string().required(),
    mobile: yup.string().required(),
    occupation: yup.string().required(),
    email: yup.string().email().required(),
    annualIncome: yup.string().required()
  });
  return (
    <Stack gap={5}>
      <Header />
      <Container>
        <Row>
          <h6>Proposer Details</h6>
          <p style={{ color: "grey" }}>Star Women Care Policy</p>
        </Row>
        <Formik
          validationSchema={schema}
          initialValues={value}
          onSubmit={(values) => {
            console.log(values);
          }}
          enableReinitialize
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors
            // isValid,
            // isSubmitting
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormData
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
            </Form>
          )}
        </Formik>
      </Container>
    </Stack>
  );
};

export default App;
