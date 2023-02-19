import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slices/contactsSlice';
import { Section } from 'components/Section';
import { StyledContactsLi, StyledContactsUl } from './ContactsList.styled';
import { Notification } from 'components/PhoneBook/Notification';
import { Filter } from 'components/PhoneBook/Filter';
import { IconButton } from 'components/Button';
import { ContactItem } from 'components/PhoneBook/ContactsList';

export const ContactsListRedux = ({
  icons: { editIcon, deleteIcon },
  contacts,
  getContactToEdit,
  filterChange,
}) => {
  const dispatch = useDispatch();
  //   console.log('icons', editIcon, deleteIcon);
  const filterValue = useSelector(state => state.filter.filterData);
  console.log('filterValue', filterValue);
  console.log('filterChange', filterChange);

  const isContactsEmpty = contacts.length === 0 && filterValue.length === 0;
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
        <IconButton onClick={() => getContactToEdit(id)}>{editIcon}</IconButton>
        <ContactItem name={name} number={number} id={id} />
      </StyledContactsLi>
    ));
  };

  const contactsBlock = (
    <Section title="Contacts List">
      <Filter value={filterValue} onChange={filterChange} />
      <StyledContactsUl>{renderContacts(contacts)}</StyledContactsUl>
      {contactFound || <Notification message="Not found" />}
    </Section>
  );
  return isContactsEmpty || contactsBlock;
};
