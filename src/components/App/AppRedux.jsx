import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact, editContact } from 'redux/slices/contactsSlice';
import { ContactsListRedux } from 'components/PhoneBook/ContactsList';
import { Modal } from 'components/Modal';
import { IconButton } from 'components/Button';
import { AppStyled } from './App.styled';
import { BUTTON_ICONS, MODAL_NAMES, INITIAL_VALUES } from 'constants/constants';

export const AppRedux = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [updateContact, setUpdateContact] = useState(null);
  const contacts = useSelector(state => state.contacts.contactsData);
  const hasContacts = contacts.length > 0;

  const toggleModal = () => {
    if (openModal && updateContact !== null) {
      //если модалка EDIT закрывается, то обнулить стэйт updateContact с контактом для редактирования
      setUpdateContact(null);
    }
    setOpenModal(openModal => !openModal);
  };

  const getContactToEdit = id => {
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    setUpdateContact(contacts[contactIndex]);
    toggleModal();
  };

  const checkSameName = name => {
    return contacts.find(el => el.name === name);
  };

  const handleAddContact = ({ name, number }) => {
    if (checkSameName(name)) {
      return alert(`${name} уже в списке контактов!`);
    }

    dispatch(addContact({ name, number, id: nanoid() }));
    toggleModal();
  };

  const handleEditContact = ({ name, number, id }) => {
    dispatch(editContact({ name, number, id }));
    setUpdateContact(null);
    toggleModal();
  };

  const editorOption = !updateContact
    ? {
        //* ADD button condition
        initialValues: INITIAL_VALUES,
        onSubmitForm: handleAddContact,
        buttonIcon: BUTTON_ICONS.addIcon,
        modalName: MODAL_NAMES.add,
      }
    : {
        //* EDIT button condition
        initialValues: updateContact,
        onSubmitForm: handleEditContact,
        buttonIcon: BUTTON_ICONS.saveIcon,
        modalName: MODAL_NAMES.edit,
      };

  return (
    <AppStyled>
      <IconButton type="button" onClick={() => toggleModal()}>
        {BUTTON_ICONS.addIcon} ADD
      </IconButton>

      {openModal ? (
        <Modal
          close={toggleModal}
          typeCloseButton="button"
          editorOption={editorOption}
        />
      ) : null}

      {hasContacts && <ContactsListRedux getContactToEdit={getContactToEdit} />}
    </AppStyled>
  );
};
