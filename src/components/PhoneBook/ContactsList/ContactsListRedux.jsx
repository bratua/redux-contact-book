import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slices/contactsSlice';
import { Section } from 'components/Section';
import { StyledContactsLi, StyledContactsUl } from './ContactsList.styled';
import { Notification } from 'components/PhoneBook/Notification';
import { Filter } from 'components/PhoneBook/Filter';
import { IconButton } from 'components/Button';
import { ContactItem } from 'components/PhoneBook/ContactsList';
import { BUTTON_ICONS, MODAL_NAMES } from 'constants/constants';
import { Modal } from 'components/Modal';

export const ContactsListRedux = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactsData);
  const filterValue = useSelector(state => state.filter.filterData);
  const isContactsEmpty = contacts.length === 0 && filterValue.length === 0;

  const filtred = () => {
    const filterNormalize = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const renderContacts = contacts => {
    return contacts.map(({ id, number, name }) => (
      <StyledContactsLi key={id}>
        <IconButton onClick={() => dispatch(deleteContact(id))}>
          {BUTTON_ICONS.deleteIcon}
        </IconButton>
        <Modal
          editorOption={{ id, number, name }}
          icon={BUTTON_ICONS.editIcon}
          modalName={MODAL_NAMES.edit}
        />
        <ContactItem name={name} number={number} id={id} />
      </StyledContactsLi>
    ));
  };

  const contactFound = renderContacts(filtred()).length > 0;
  const contactsBlock = (
    <Section title="Contacts List">
      <Filter />
      <StyledContactsUl>{renderContacts(filtred())}</StyledContactsUl>
      {contactFound || <Notification message="Not found" />}
    </Section>
  );

  return isContactsEmpty || contactsBlock;
};
