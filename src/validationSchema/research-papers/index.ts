import * as yup from 'yup';

export const researchPaperValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  author_id: yup.string().nullable(),
  editor_id: yup.string().nullable(),
  reviewer_id: yup.string().nullable(),
});
