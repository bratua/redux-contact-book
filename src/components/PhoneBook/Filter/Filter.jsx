import { useDispatch, useSelector } from 'react-redux';
import Box from 'components/Box/Box';
import { changeFilter } from 'redux/slices/filterSlice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filterData);

  const filterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const filter = (
    <Box>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={filterChange}
      />
    </Box>
  );
  return filter;
};
