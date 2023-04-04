import * as yup from "yup";

export const initialValues = {
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

export const validationSchema = [
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
