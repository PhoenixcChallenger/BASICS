import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter your name"),
    email: Yup.string().email().required("Please Enter your email"),
    password: Yup.string().min(6).required("Please Enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
})