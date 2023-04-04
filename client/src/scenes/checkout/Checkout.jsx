import {
  Alert,
  StepLabel,
  Step,
  Stepper,
  Typography,
  Button,
} from "@mui/material";
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
import Payment from "./Payment";

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
  const isFirstStep = currentStep === 0;
  const isSecondStep = currentStep === 1;

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
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}

              <Box
                display="flex"
                justifyContent="space-between"
                gap="50px"
                backgroundColor="red"
              >
                {/* Back Button */}
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                    onClick={() => setStep(currentStep - 1)}
                  >
                    Back
                  </Button>
                )}

                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[200],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 40px",
                  }}
                  onClick={() => setStep(currentStep + 1)}
                >
                  {isFirst ? "Next" : "Place Order"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Checkout;
