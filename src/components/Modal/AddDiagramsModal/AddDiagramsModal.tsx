import { Fragment, createContext, useRef, useState } from 'react';
import { ModalWrap } from '../ModalWrap';
import { useModalState } from 'hooks';
import { styled } from 'styles/stitches';
import { Button } from 'components/Button';
import axios from 'axios';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const Container = styled('div', {
  position: 'absolute',
  display: 'flex',
  gap: '24px',
  zIndex: 9999,
  top: '50%',
  left: '50%',
  width: '1024px',
  height: '614px',
  padding: '24px',
  transform: 'translate(-50%, -50%)',
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgb(250, 250, 250)',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

const CodeEditorContainer = styled('textarea', {
  width: '100%',
  height: '100%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  padding: '24px',
  resize: 'none',
  '&:focus': {
    outline: 'none',
  },
});

const DiagramsViewerContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: 'white',
});

const DiagramsViewerControls = styled('div', {
  position: 'absolute',
  bottom: '24px',
  right: '24px',
  display: 'flex',
  gap: '8px',
});

const DiagramsSVGS = styled('svg', {
  width: '100%',
  height: '100%',
});

interface AddDiagramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddDiagramModalContext = createContext({});

export const AddDiagramModal = ({ isOpen, onClose }: AddDiagramModalProps) => {
  const [diagrams, setDiagrams] = useState<string>('');

  const getDiagrams = async (value: string) => {
    const response = await axios.post(
      'https://d2api.fly.dev/getSvg',
      {
        diagramCode: value || '',
      },
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      },
    );

    setDiagrams(response.data);
  };

  const handleCodeEditorChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (e.target.value === '') {
      return;
    }
    getDiagrams(e.target.value);
  };

  const [zoom, setZoom] = useState<number>(0.55);

  return (
    <Fragment>
      {isOpen && (
        <ModalWrap onOverlayClick={onClose}>
          <Container>
            <CodeEditorContainer
              onBlur={handleCodeEditorChange}
              placeholder={`Write Replica Canada <-> Write Replica AustraliaRead Replica <- Master x -- y super long shape id here -> super long shape id even longer here`}
            />
            <DiagramsViewerContainer>
              <DiagramsViewerControls>
                <Button
                  btnType="outline"
                  onClick={() => {
                    alert('현재는 지원되지 않는 기능입니다.');
                  }}
                >
                  해당 다이어그램 추가하기
                </Button>
                <Button
                  btnType="outline"
                  onClick={() => setZoom((prev) => prev + 0.1)}
                >
                  <PlusIcon />
                </Button>
                <Button
                  btnType="outline"
                  onClick={() => setZoom((prev) => prev - 0.1)}
                >
                  <MinusIcon />
                </Button>
              </DiagramsViewerControls>
              <DiagramsSVGS
                style={{
                  zoom: zoom,
                }}
                dangerouslySetInnerHTML={{ __html: diagrams }}
              />
            </DiagramsViewerContainer>
          </Container>
        </ModalWrap>
      )}
    </Fragment>
  );
};

const AddDiagramModalProvider = () => {
  const { modalState, handleOpen, handleClose } = useModalState();

  return (
    <AddDiagramModalContext.Provider value={{ handleOpen, handleClose }}>
      <AddDiagramModal isOpen={modalState} onClose={handleClose} />
    </AddDiagramModalContext.Provider>
  );
};

export { AddDiagramModalProvider };
