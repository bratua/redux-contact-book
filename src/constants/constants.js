import { FiEdit, FiSave, FiTrash2, FiPlusCircle } from 'react-icons/fi';

export const BUTTON_ICONS = {
  addIcon: <FiPlusCircle size="30" style={{ verticalAlign: 'middle' }} />,
  saveIcon: <FiSave size="30" style={{ verticalAlign: 'middle' }} />,
  editIcon: <FiEdit size="20" style={{ verticalAlign: 'middle' }} />,
  deleteIcon: <FiTrash2 size="20" style={{ verticalAlign: 'middle' }} />,
};

export const MODAL_NAMES = {
  add: 'Добавить контакт',
  edit: 'Редактировать контакт',
};

export const INITIAL_VALUES = {
  name: '',
  number: '',
};
