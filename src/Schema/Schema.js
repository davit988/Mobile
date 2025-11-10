import * as YUP from "yup";

export const validate = YUP.object().shape({
  name: YUP.string().min(3, "min lenght").required("filed is requered"),
  userName: YUP.string().min(3, "min lenght").required("filed is requered"),
  email: YUP.string().email().required("filed is requered"),
  pass: YUP.string().min(3, "min lenght").required("filed is requered"),
  confirmPassword: YUP.string()
    .oneOf([YUP.ref("pass")], "wrong pass")
    .required("filed is requered"),
});