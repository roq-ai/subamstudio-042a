import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  studio_id: yup.string().nullable().required(),
});
