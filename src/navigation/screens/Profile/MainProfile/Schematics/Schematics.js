import * as Yup from "yup";

export const errorsMessages = {
  shortText: 'Слишком коротко!',
  longText: 'Слишком длинно!',
  required: 'Обязательно для заполнения!',
  onlyString: 'Не должно содержать цифры!'
}

const regexpOnlyString = /^([а-яё][А-ЯЁ]+|[a-z][A-Z]+|[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+)$/i
export const EditUserSchema = Yup.object().shape({
  firstname: Yup.string().matches(regexpOnlyString, errorsMessages.onlyString).min(2, errorsMessages.shortText).max(50, errorsMessages.longText),
  lastname: Yup.string().matches(regexpOnlyString, errorsMessages.onlyString).min(2, errorsMessages.shortText).max(50, errorsMessages.longText),
  surname: Yup.string().matches(regexpOnlyString, errorsMessages.onlyString).min(2, errorsMessages.shortText).max(50, errorsMessages.longText),
  age: Yup.string().min(1, errorsMessages.shortText).max(3, errorsMessages.longText),
  username: Yup.string().min(2, errorsMessages.shortText).max(30, errorsMessages.longText),
});