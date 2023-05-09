import { Typography, TextField, Box } from "@mui/material";
import React, { useEffect } from "react";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  useEffect(() => {
    window.CollectJS.configure({
      variant: "inline",
      styleSniffer: true,
      callback: (token) => {
        console.log(token);
        finishSubmit(token);
      },
      fields: {
        ccnumber: {
          placeholder: "CC Number",
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

  const finishSubmit = () => {};

  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
        <Typography sx={{ mb: "15px", gridColumn: "span 4" }} fontSize="18px">
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

        <TextField
          fullWidth
          type="text"
          id="ccnumber"
          label="Credit Card Number"
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />

        <TextField
          fullWidth
          type="text"
          id="ccexp"
          label="Expiration Date"
          sx={{ gridColumn: "span 2", marginBottom: "15px" }}
        />

        <TextField
          fullWidth
          type="text"
          id="cvv"
          label="CVV Number"
          sx={{ gridColumn: "span 2" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
