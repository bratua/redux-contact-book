import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/slices/contactsSlice';
import { Section } from 'components/Section';
import { StyledContactsLi, StyledContactsUl } from './ContactsList.styled';
import { Notification } from 'components/PhoneBook/Notification';
import { Filter } from 'components/PhoneBook/Filter';
import { IconButton } from 'components/Button';
import { ContactItem } from 'components/PhoneBook/ContactsList';

export const ContactsListRedux = ({ icons: { editIcon, deleteIcon } }) => {
  const dispatch = useDispatch();
  //   console.log('icons', editIcon, deleteIcon);
  const contacts = useSelector(state => state.contacts.contactsData);
  console.log('contacts', contacts);

  const isContactsEmpty = contacts.length === 0;
  // contacts.length === 0 && this.props.filterValue.length === 0;
  //   console.log('isContactsEmpty', isContactsEmpty);

  const contactFound = contacts.length > 0;
  //   console.log('contactFound', contactFound);

  const renderContacts = contacts => {
    return contacts.map(({ id, number, name }) => (
      <StyledContactsLi key={id}>
        <IconButton onClick={() => dispatch(deleteContact(id))}>
          {deleteIcon}
        </IconButton>
        <IconButton onClick={() => dispatch(editContact(id))}>
          {editIcon}
        </IconButton>
        <ContactItem name={name} number={number} />
      </StyledContactsLi>
    ));
  };

  const contactsBlock = (
    <Section title="Contacts List">
      {/* <Filter
        value={this.props.filterValue}
        onChange={this.props.filterOnChange}
      /> */}
      <StyledContactsUl>{renderContacts(contacts)}</StyledContactsUl>
      {contactFound || <Notification message="Not found" />}
    </Section>
  );
  return isContactsEmpty || contactsBlock;
};
