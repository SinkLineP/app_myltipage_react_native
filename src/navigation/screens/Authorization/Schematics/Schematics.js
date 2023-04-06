import * as Yup from "yup";

const errorsMessages = {
  shortText: 'Слишком коротко!',
  longText: 'Слишком длинно!',
  required: 'Обязательно для заполнения',
  usernameIsBusy: 'Такой пользователь уже существует',
  passwordsDontMatch: 'Пароли не совпадают',
  emailIsNotCorrectFormat: 'Неверный формат почты'
}
export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email(errorsMessages.emailIsNotCorrectFormat).min(2, errorsMessages.shortText).max(50, errorsMessages.longText).required(errorsMessages.required),
  password: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
  confirmPassword: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).oneOf([Yup.ref('password')], errorsMessages.passwordsDontMatch).required(errorsMessages.required),
});

export const acceptPhoneSchema = Yup.object().shape({
  phone: Yup.number().min(10, errorsMessages.shortText).max(10, errorsMessages.longText).required(errorsMessages.required),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().min(2, errorsMessages.shortText).max(50, errorsMessages.longText).required(errorsMessages.required),
  password: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
});

export const aboutUser = Yup.object().shape({
  username: Yup.string().min(2, errorsMessages.shortText).max(50, errorsMessages.longText).required(errorsMessages.required),
  lastname: Yup.string().min(2, errorsMessages.shortText).max(50, errorsMessages.longText).required(errorsMessages.required),
  firstname: Yup.string().min(2, errorsMessages.shortText).max(50, errorsMessages.longText).required(errorsMessages.required),
  surname: Yup.string().min(2, errorsMessages.shortText).max(50, errorsMessages.longText).required(errorsMessages.required),
  age: Yup.string().min(1, errorsMessages.shortText).max(3, errorsMessages.longText).required(errorsMessages.required),
})