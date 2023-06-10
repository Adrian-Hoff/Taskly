import * as Yup from "yup";

const SignUpFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must have at least 6 characters")
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

export default SignUpFormSchema;
