import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  editContact,
} from 'redux/slices/contactsSlice';
import { changeFilter } from 'redux/slices/filterSlice';

export const AppRedux = () => {
  const dispatch = useDispatch();

  return (
    <div>
      APP Redux
      <button type="button" onClick={() => dispatch(addContact())}>
        ADD
      </button>
      <button type="button" onClick={() => dispatch(deleteContact())}>
        DELETE
      </button>
      <button type="button" onClick={() => dispatch(editContact())}>
        EDIT
      </button>
      <button type="button" onClick={() => dispatch(changeFilter())}>
        NEW SEARCH
      </button>
      <button type="button" onClick={() => dispatch(changeFilter())}>
        NEW SEARCH
      </button>
    </div>
  );
};
