import { LayersIcon } from '@radix-ui/react-icons';
import { Button } from 'components/Button';
import { WorkspaceLayout } from 'components/Layouts';
import { AddDiagramModal } from 'components/Modal/AddDiagramsModal';
import { useState } from 'react';
import { styled } from 'styles/stitches';

const WorkspaceHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '48px',
  padding: '0 16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  color: '$grey900',
  fontSize: '14px',
  fontWeight: 500,
  gap: '8px',
});

const MenuInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '40px',
});

const MenuInfoTitle = styled('h1', {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '16px',
});

const MenuInfoDescription = styled('p', {
  fontSize: '14px',
  fontWeight: 400,
  color: '$grey500',
  lineHeight: '24px',
  marginBottom: '16px',
});

const Division = styled('div', {
  display: 'flex',
  width: '100%',
  height: '1px',
  backgroundColor: '$grey200',
  margin: '8px 0',
});

const ElementContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '40px',
});

const ElementMenuTitle = styled('h2', {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '$grey700',
  marginBottom: '16px',
});

const DiagramsList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
});

const DiagramItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  height: '200px',
  padding: '16px',
  backgroundColor: '$grey100',
  borderRadius: '8px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  },
});

export const Diagrams = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <LayersIcon />
        다이어그램 관리
      </WorkspaceHeader>
      <MenuInfoContainer>
        <MenuInfoTitle>다이어그램 관리</MenuInfoTitle>
        <MenuInfoDescription>
          본 메뉴에서는 간단하게 디자이너 없이도 다이어그램을 만들 수 있습니다.
        </MenuInfoDescription>
        <Button btnType="default" onClick={() => setIsOpen(true)}>
          다이어그램 추가하기
        </Button>
      </MenuInfoContainer>
      <Division />
      <ElementContainer>
        <ElementMenuTitle>제작된 다이어그램 (1개)</ElementMenuTitle>
        <DiagramsList>
          <DiagramItem>
            <img
              src="https://user-images.githubusercontent.com/59228569/215298964-746e1955-b081-4ee2-b3f3-0f4975937bd9.png"
              width="165"
              height="170"
              alt="diagram"
            />
          </DiagramItem>
        </DiagramsList>
      </ElementContainer>
      <AddDiagramModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </WorkspaceLayout>
  );
};
