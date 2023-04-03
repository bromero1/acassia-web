import { Alert, StepLabel, Step, Stepper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Form, Formik, useFormik, Field } from "formik";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state/";
import { unstable_useBlocker, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import * as yup from "yup";
import { validationSchema } from "./schema";
import { useState } from "react";
import Shipping from "./Shipping";

const handleSubmitForm = () => {};

const Checkout = () => {
  const initialValues = {
    billingAddress: {
      firstName: "",
      lastName: "",
      country: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    shippingAddress: {
      isSameAddress: true,
      firstName: "",
      lastName: "",
      country: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    email: "",
    phoneNumber: "",
  };
  const cart = useSelector((state) => state.cart.cart);
  const [currentStep, setStep] = useState(0);
  const [isFirst, setFirst] = useState(true);

  return (
    <Box width="80%" m="40px auto" backgroundColor={shades.primary[100]}>
      <Stepper activeStep={currentStep}>
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
      <Box>
        <Formik
          onSubmit={handleSubmitForm}
          initialValues={initialValues}
          validationSchema={validationSchema[currentStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirst && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Checkout;
