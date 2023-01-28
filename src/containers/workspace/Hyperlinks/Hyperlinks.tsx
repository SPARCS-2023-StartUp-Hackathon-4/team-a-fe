import { Link2Icon } from '@radix-ui/react-icons';
import { Collapse, CollapseItem } from 'components/Collapse';
import { WorkspaceLayout } from 'components/Layouts';
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

export const Hyperlinks = () => {
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <Link2Icon />
        하이퍼링크 관리
      </WorkspaceHeader>
      <MenuInfoContainer>
        <MenuInfoTitle>하이퍼링크 관리</MenuInfoTitle>
        <MenuInfoDescription>
          본 메뉴에서는 사업계획서 내 포함된 링크 관련하여 손상 여부 및
          추가/수정을 관리하고 있습니다.
        </MenuInfoDescription>
      </MenuInfoContainer>
      <Division />
      <ElementContainer>
        <Collapse>
          <CollapseItem />
        </Collapse>
        <Collapse>
          <CollapseItem />
        </Collapse>
      </ElementContainer>
    </WorkspaceLayout>
  );
};
