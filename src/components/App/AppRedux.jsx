import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact, editContact } from 'redux/slices/contactsSlice';
import { changeFilter } from 'redux/slices/filterSlice';
import { FiEdit, FiSave, FiTrash2, FiPlusCircle } from 'react-icons/fi';
import { ContactsListRedux } from 'components/PhoneBook/ContactsList';
import { Modal } from 'components/Modal';
import { IconButton } from 'components/Button';
import { AppStyled } from './App.styled';

const BUTTON_ICONS = {
  addIcon: <FiPlusCircle size="30" style={{ verticalAlign: 'middle' }} />,
  saveIcon: <FiSave size="30" style={{ verticalAlign: 'middle' }} />,
  editIcon: <FiEdit size="20" style={{ verticalAlign: 'middle' }} />,
  deleteIcon: <FiTrash2 size="20" style={{ verticalAlign: 'middle' }} />,
};

const MODAL_NAMES = {
  add: 'Добавить контакт',
  edit: 'Редактировать контакт',
};

const initialValues = {
  name: '',
  number: '',
};

export const AppRedux = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [updateContact, setUpdateContact] = useState(null);
  const contacts = useSelector(state => state.contacts.contactsData);
  const filter = useSelector(state => state.filter.filterData);
  const hasContacts = contacts.length > 0;

  // console.log('openModal ', openModal);
  // console.log('contacts (APP) ', contacts);
  // console.log('hasContacts', hasContacts);

  const toggleModal = () => {
    if (openModal) {
      //если модалка ЭДИТ закрывается, то обнулить стэйт с контактом для редактирования
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
    console.log({ name, number, id });
    dispatch(editContact({ name, number, id }));
    setUpdateContact(null);
    toggleModal();
  };

  const filterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const filtred = () => {
    // const { filter, contacts } = this.state;
    const filterNormalize = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const editorOption = !updateContact
    ? {
        //* ADD button condition
        initialValues: initialValues,
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

      {hasContacts && (
        <ContactsListRedux
          icons={BUTTON_ICONS}
          contacts={filtred()}
          getContactToEdit={getContactToEdit}
          filterChange={filterChange}
        />
      )}
    </AppStyled>
  );
};
