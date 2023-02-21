import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { FiXCircle } from 'react-icons/fi';
import {
  BackDropStyled,
  ModalWindowStyled,
  ModalTitle,
} from './ModalWindow.styled';

export const ModalWindow = ({ isOpen, onClose, children, editorName }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const escPressHendler = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', escPressHendler);
    return () => document.removeEventListener('keydown', escPressHendler);
  }, [onClose]);

  const backDropClickClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const content = (
    <BackDropStyled onClick={backDropClickClose}>
      <ModalWindowStyled>
        <button className="modal-close-button" type="button" onClick={onClose}>
          <FiXCircle size="30" />
        </button>
        <ModalTitle>{editorName}</ModalTitle>
        {children}
      </ModalWindowStyled>
    </BackDropStyled>
  );

  return isOpen && ReactDOM.createPortal(content, modalRoot);
};
