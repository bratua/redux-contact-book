import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  editContact,
} from 'redux/slices/contactsSlice';
import { changeFilter } from 'redux/slices/filterSlice';
import { FiEdit, FiSave, FiTrash2, FiPlusCircle } from 'react-icons/fi';
import { ContactsListRedux } from 'components/PhoneBook/ContactsList';

import { EditorRedux } from 'components/Editor';

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

export const AppRedux = () => {
  const dispatch = useDispatch();

  return (
    <>
      <EditorRedux icon={BUTTON_ICONS.saveIcon}></EditorRedux>
      <ContactsListRedux icons={BUTTON_ICONS} />
    </>
  );
};
// <div>
//   APP Redux
//   <button type="button" onClick={() => dispatch(addContact())}>
//     ADD
//   </button>
//   <button type="button" onClick={() => dispatch(deleteContact())}>
//     DELETE
//   </button>
//   <button type="button" onClick={() => dispatch(editContact())}>
//     EDIT
//   </button>
//   <button type="button" onClick={() => dispatch(changeFilter())}>
//     NEW SEARCH
//   </button>
//   <button type="button" onClick={() => dispatch(changeFilter())}>
//     NEW SEARCH
//   </button>
// </div>
