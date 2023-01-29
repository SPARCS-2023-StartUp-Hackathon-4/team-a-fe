import { Fragment, createContext } from 'react';
import { ModalWrap } from '../ModalWrap';
import { useModalState } from 'hooks';
import { styled } from 'styles/stitches';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

const Container = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 9999,
  top: '50%',
  left: '50%',
  width: '512px',
  height: 'auto',
  padding: '24px',
  transform: 'translate(-50%, -50%)',
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgb(250, 250, 250)',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

const ModalTitle = styled('h1', {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#212121',
  marginBottom: '16px',
});

const ModalDescription = styled('h3', {
  fontSize: '14px',
  fontWeight: 'normal',
  color: '$grey700',
  marginBottom: '24px',
});

interface AddCustomFontsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCustomFontsModalContext = createContext({});

export const AddCustomFontsModal = ({
  isOpen,
  onClose,
}: AddCustomFontsModalProps) => {
  return (
    <Fragment>
      {isOpen && (
        <ModalWrap onOverlayClick={onClose}>
          <Container>
            <ModalTitle>커스텀 폰트 추가하기</ModalTitle>
            <ModalDescription>
              파일을 업로드 하거나, URL을 입력하여 커스텀 폰트를 추가할 수
              있습니다.
            </ModalDescription>
            <Input type="text" placeholder="폰트 이름을 입력해주세요." />
            <Input type="text" placeholder="폰트 URL을 입력해주세요." />
            <Button
              btnType="default"
              fullSize
              onClick={() => {
                alert('현재는 지원하지 않는 기능입니다.');
              }}
            >
              추가하기
            </Button>
          </Container>
        </ModalWrap>
      )}
    </Fragment>
  );
};

const AddCustomFontsModalProvider = () => {
  const { modalState, handleOpen, handleClose } = useModalState();

  return (
    <AddCustomFontsModalContext.Provider value={{ handleOpen, handleClose }}>
      <AddCustomFontsModal isOpen={modalState} onClose={handleClose} />
    </AddCustomFontsModalContext.Provider>
  );
};

export { AddCustomFontsModalProvider };
