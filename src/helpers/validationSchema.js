import * as Yup from 'yup';

const validSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, 'Contact name is too short')
    .max(50, 'Contact name is too long')
    .required('Contact name is required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Number is invalid. Number template is "123-456-7890"'
    )
    .required('Phone number is required'),
});

export default validSchema;
