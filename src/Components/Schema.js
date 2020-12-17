import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().email("Email Required!").required("This is required!"),
  terms: yup.boolean().oneOf([true], "You must accept to continue!"),
});
