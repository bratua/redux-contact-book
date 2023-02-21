import { useSelector } from 'react-redux';
import { ContactsListRedux } from 'components/PhoneBook/ContactsList';
import { Modal } from 'components/Modal';
import { AppStyled } from './App.styled';
import { BUTTON_ICONS, MODAL_NAMES } from 'constants/constants';

export const AppRedux = () => {
  const contacts = useSelector(state => state.contacts.contactsData);
  const hasContacts = contacts.length > 0;

  return (
    <AppStyled>
      <Modal icon={BUTTON_ICONS.addIcon} modalName={MODAL_NAMES.add}>
        {BUTTON_ICONS.addIcon}
      </Modal>

      {hasContacts && <ContactsListRedux />}
    </AppStyled>
  );
};
