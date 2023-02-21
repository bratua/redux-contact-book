import { Formik, Form } from 'formik';
import { addContact, editContact } from 'redux/slices/contactsSlice';
import { nanoid } from 'nanoid';
import { IconButton } from 'components/Button';
import { TitleFields, Fields, ErrorStyled } from './Editor.styled';
import { useDispatch, useSelector } from 'react-redux';
import { schema } from 'options/options';
import { INITIAL_VALUES } from 'constants/constants';

const nameId = nanoid();
const numberId = nanoid();

export const EditorRedux = ({
  icon,
  editorOption = INITIAL_VALUES,
  onClose,
}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactsData);

  const checkSameName = name => {
    return contacts.find(el => el.name === name);
  };

  const handleAddContact = ({ name, number, id }) => {
    dispatch(addContact({ name, number, id }));
    onClose();
  };

  const handleEditContact = ({ name, number, id }) => {
    dispatch(editContact({ name, number, id }));
    onClose();
  };

  const handleSubmit = ({ name, number, id }, actionsFormik) => {
    if (id) {
      handleEditContact({ name, number, id });
      return;
    }

    if (checkSameName(name)) {
      return alert(`${name} уже в списке контактов!`);
    }

    handleAddContact({ name, number, id: nanoid() });

    actionsFormik.resetForm();
  };

  return (
    <Formik
      initialValues={editorOption}
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
