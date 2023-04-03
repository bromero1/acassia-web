import { Alert, StepLabel, Step, Stepper, Typography } from "@mui/material";
import { Form, Formik, useFormik, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state/";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import * as yup from "yup";

const initialValues = {
  billingAddress: {
    email: "",
    firstName: "",
    lastName: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
  },
  shippingAddress: {
    isSameAsBilling: true,
    firstName: "",
    lastName: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
  },
};

const validationSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zip: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAsBilling: yup.boolean(),
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zip: yup.string().required("required"),
    }),
  }),
  yup.object().shape({
    email: yup.string().email().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

const handleSubmitForm = () => {};

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box width="80%" height="100vh" backgroundColor={shades.primary[100]}>
      <Stepper>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipping</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>

      <Formik
        onSubmit={handleSubmitForm}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <Typography variant="h1">Hello</Typography>
        <button type="submit">Submit</button>
        </Form>
        
      </Formik>
    </Box>
  );
};

export default Checkout;
