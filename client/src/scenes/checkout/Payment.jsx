import { Typography, TextField, Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
//import MaskedInput from "react-text-mask";
import "./collectStyling.css"

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const ccRef = useRef();

  useEffect(() => {
    window.CollectJS.configure({
      variant: "inline",
      styleSniffer: false,
      callback: (token) => {
        console.log(token);
        finishSubmit(token);
      },
      fields: {
        ccnumber: {
          // placeholder: "CC Number",
          selector: "#ccnumber",
        },
        ccexp: {
          placeholder: "CC Expiration",
          selector: "#ccexp",
        },
        cvv: {
          placeholder: "CVV",
          selector: "#cvv",
        },
      },
    });
  });

  // const finishSubmit(response) {
  //   const { isSubmitting, alertMessage, ...formData } = { ...this.state };
  //   formData.token = response.token;
  //   console.log(formData);
  //   this.setState({ isSubmitting: false, alertMessage: 'The form was submitted. Check the console to see the output data.' });
  // }

  const finishSubmit = (response) => {};

  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />

        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />

        {/* <TextField
          fullWidth
          // id="ccnumber"
          // label="Credit Card Number"
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        /> */}

        <Box mb="15px"  sx={{
          // borderRadius: "4px", height: "3.4375em"
        }}>
          <div className="payment-field" id="ccnumber"></div>
        </Box>

        <Box mb="15px" display={'flex'}>
          <div className="payment-field" id="ccexp"></div>
          <div className="payment-field" id="cvv"></div>
        </Box>

        <Box>
          
        </Box>

        {/* <TextField
          fullWidth
          type="text"
          id="ccexp"
          label="Expiration Date"
          auto-complete="cc-exp"
          sx={{ gridColumn: "span 2", marginBottom: "15px" }}
        />

        <TextField
          fullWidth
          type="text"
          id="cvv"
          label="CVV Number"
          sx={{ gridColumn: "span 2" }}
        /> */}
      </Box>
    </Box>
  );
};

export default Payment;
