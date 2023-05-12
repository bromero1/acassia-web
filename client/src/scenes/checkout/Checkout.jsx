import { StepLabel, Step, Stepper, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { shades } from "../../theme";
import * as yup from "yup";
// import { validationSchema } from "./schema";
import { useState } from "react";
import Shipping from "./Shipping";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { HOST } from "../../constant";

const stripePromise = loadStripe(
  "pk_test_51MeM66GuAAu0dPWHWhGdqvxyeJxPzU6d228UGhkzHwN7LWVnx5LrUWgEWVSZ5LsWUA8vtx5pFcDkIrR78o4KC90L00zHFHpuRe"
);
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
  const isFirstStep = currentStep === 0;
  const isSecondStep = currentStep === 1;

  const handleFormSubmit = async (values, actions) => {
    // console.log("inside: handleFormSubmit");
    setStep(currentStep + 1);

    // this copies the billing address onto shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }
    //After billing and shipping is entered
    if (isSecondStep) {
      // makePayment(values);
      // this.setState({ isSubmitting: true });
      window.CollectJS.startPaymentRequest();
    }

    actions.setTouched({});
  };

  // const finishSubmit(response) {
  //   const { isSubmitting, alertMessage, ...formData } = { ...this.state };
  //   formData.token = response.token;
  //   console.log(formData);
  //   this.setState({ isSubmitting: false, alertMessage: 'The form was submitted. Check the console to see the output data.' });
  // }

  async function makePayment(values) {}
  // async function makePayment(values) {
  //   //
  //   const requestBody = {
  //     userName: [values.billingAddress.firstName, values.billingAddress.lastName].join(" "),
  //     email: values.email,
  //     products: cart.map(({ id, count, price }) => ({
  //       id,
  //       count,
  //       price,
  //     }))};

  //   const response = await fetch(`${HOST}/api/orders`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(requestBody),
  //   });

  //   const stripe = await stripePromise;
  //   const session = await response.json();
  //   await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });
  // }
  return (
    <Box width="80%" m="40px auto" maxWidth={"800px"}>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          // validationSchema={validationSchema[currentStep]}
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
                  type="submit"
                  color="primary"
                  variant="contained"
                  id={isSecondStep ? "payButton" : "next"}
                  sx={{
                    backgroundColor: shades.primary[200],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 40px",
                  }}
                >
                  {!isSecondStep ? "Next" : "Place Order"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const validationSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];
export default Checkout;
