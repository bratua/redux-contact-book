import { useToggle } from 'hooks/useToggle';
import { ModalWindow } from 'components/Modal';
import { EditorRedux } from 'components/Editor';
import { IconButton } from 'components/Button';

export const Modal = ({ icon, modalName, editorOption }) => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      {
        <IconButton type="button" onClick={open}>
          {icon}
        </IconButton>
      }
      {isOpen && (
        <ModalWindow onClose={close} isOpen={isOpen} editorName={modalName}>
          <EditorRedux
            icon={icon}
            onClose={close}
            editorOption={editorOption}
          />
        </ModalWindow>
      )}
    </>
  );
};
