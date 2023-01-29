import { TextIcon, TrashIcon } from '@radix-ui/react-icons';
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

const ElementMenuTitle = styled('h2', {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '$grey700',
  marginBottom: '16px',
});

const ConstantsList = styled('ul', {
  display: 'flex',
  gap: '8px',
});

const ConstantsListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '8px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  color: '$grey900',
  fontSize: '14px',
  fontWeight: 500,
  gap: '8px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$grey100',
  },
});

export const Constants = () => {
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <TextIcon />
        상수 텍스트 추가/제거
      </WorkspaceHeader>
      <MenuInfoContainer>
        <MenuInfoTitle>상수 텍스트 추가/제거</MenuInfoTitle>
        <MenuInfoDescription>
          본 메뉴에서는 사업계획서 작성 과정에서 사용될 커스텀 폰트를 관리할 수
          있습니다.
        </MenuInfoDescription>
      </MenuInfoContainer>
      <Division />
      <ElementContainer>
        <ElementMenuTitle>생성된 상수 텍스트</ElementMenuTitle>
        <ConstantsList>
          <ConstantsListItem
            onClick={() => {
              confirm('정말 삭제하시겠습니까?');
            }}
          >
            <TextIcon />
            상수 텍스트 1
          </ConstantsListItem>
        </ConstantsList>
      </ElementContainer>
    </WorkspaceLayout>
  );
};
