import {
  StepLabel,
  Step,
  Stepper,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Formik, useFormik } from "formik";
import { shades } from "../../theme";
// import * as yup from "yup";
import { initialValues, validationSchema } from "./initialValues";
import { useState } from "react";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MeM66GuAAu0dPWHWhGdqvxyeJxPzU6d228UGhkzHwN7LWVnx5LrUWgEWVSZ5LsWUA8vtx5pFcDkIrR78o4KC90L00zHFHpuRe"
);

const steps = ["Billing Address", "Payment Details", "Review Order"];

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <Shipping />;
    case 1:
      return <Payment />;
    case 2:
      return <Confirmation />;
  }
}

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [currentStep, setStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;

  const handleFormSubmit = async (values, actions) => {
    setStep(currentStep + 1);

    // this copies the billing address onto shipping address
    if (currentStep === 0 && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }
    //After billing and shipping is entered
    if (currentStep === 1) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      handleFormSubmit(values, actions);
    } else {
      setStep(currentStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setStep(currentStep - 1);
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };

    const response = await fetch("http://localhost:1337/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }
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

      {/* Conditional render - Confirmation */}
      {currentStep === steps.length ? (
        <Confirmation />
      ) : (
        // Other parts of the form
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema[currentStep]}
          onSubmit={handleSubmit}
        >
          <Box>
            {renderStepContent(currentStep)}
          </Box>
        </Formik>
      )}
    </Box>
  );
};



export default Checkout;
