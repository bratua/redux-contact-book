import { ContactStyled } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => (
  <ContactStyled>
    {name}: {number} (id: {id})
  </ContactStyled>
);
