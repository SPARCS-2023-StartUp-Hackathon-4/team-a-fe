import { FontSizeIcon } from '@radix-ui/react-icons';
import { Button } from 'components/Button';
import { WorkspaceLayout } from 'components/Layouts';
import { AddCustomFontsModal } from 'components/Modal/AddCustomFontsModal';
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

const FontsItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '48px',
  padding: '0 16px',
  alignItems: 'center',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  marginBottom: '8px',
  gap: '16px',
});

const FontsText = styled('p', {
  fontSize: '14px',
  fontWeight: 400,
  color: '$grey900',
});

export const Fonts = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <FontSizeIcon />
        커스텀 폰트 관리
      </WorkspaceHeader>
      <MenuInfoContainer>
        <MenuInfoTitle>커스텀 폰트 관리</MenuInfoTitle>
        <MenuInfoDescription>
          본 메뉴에서는 사업계획서 작성 과정에서 사용될 커스텀 폰트를 관리할 수
          있습니다.
        </MenuInfoDescription>
        <Button btnType="default" onClick={() => setIsOpen(true)}>
          커스텀 폰트 추가하기
        </Button>
      </MenuInfoContainer>
      <Division />
      <ElementContainer>
        <FontsItem>
          <FontsText>Impact</FontsText>
          <FontsText>
            https://www.dafontfree.io/download/impact/?wpdmdl=56846&refresh=63d597217e3571674942241&ind=1591711299933&filename=Impact-Font.zip
          </FontsText>
        </FontsItem>
      </ElementContainer>
      <AddCustomFontsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </WorkspaceLayout>
  );
};
