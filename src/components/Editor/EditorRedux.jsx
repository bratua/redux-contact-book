import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { IconButton } from 'components/Button';
import { TitleFields, Fields, ErrorStyled } from './Editor.styled';

const nameId = nanoid();
const numberId = nanoid();

export const EditorRedux = ({ icon, initialValues, updateData }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required('Введите имя'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
      )
      .required('Введите номер'),
  });

  const handleSubmit = ({ name, number, id }, actionsFormik) => {
    updateData({ name, number, id }); //function from APP (add or edit)
    actionsFormik.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor={nameId}>
          <TitleFields>Name</TitleFields>
          <Fields
            id={nameId}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoFocus
          ></Fields>
          <ErrorStyled name="name" component="div" />
        </label>

        <label htmlFor={numberId}>
          <TitleFields>Number</TitleFields>
          <Fields
            id={numberId}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          ></Fields>
          <ErrorStyled name="number" component="div" />
        </label>
        <IconButton type="submit">{icon}</IconButton>
      </Form>
    </Formik>
  );
};
