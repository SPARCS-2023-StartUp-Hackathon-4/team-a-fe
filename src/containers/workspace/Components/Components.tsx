import { Component1Icon } from '@radix-ui/react-icons';
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

const ComponentsList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
});

const ComponentsItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  minHeight: '100px',
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

const ComponentsItemHeaderTitle = styled('h3', {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '$grey700',
  marginBottom: '8px',
});

const ComponentsItemDescription = styled('p', {
  fontSize: '14px',
  fontWeight: 400,
  color: '$grey500',
  lineHeight: '24px',
});

export const Components = () => {
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <Component1Icon />
        컴포넌트 관리
      </WorkspaceHeader>
      <MenuInfoContainer>
        <MenuInfoTitle>컴포넌트 관리</MenuInfoTitle>
        <MenuInfoDescription>
          본 메뉴에서는 사업계획서 작성 과정에서 사용될 커스텀 폰트를 관리할 수
          있습니다.
        </MenuInfoDescription>
      </MenuInfoContainer>
      <Division />
      <ElementContainer>
        <ElementMenuTitle>생성된 컴포넌트 (2개)</ElementMenuTitle>
        <ComponentsList>
          <ComponentsItem>
            <ComponentsItemHeaderTitle>창업 동기</ComponentsItemHeaderTitle>
            <ComponentsItemDescription>
              IT 업계를 창업한 이유는 다양할 수 있지만, 일반적으로는 다음과 같은
              이유가 있을 수 있다: 최신 기술을 활용하여 새로운 서비스를 제공하기
              위해 시장 점유율을 높이기 위해 자신의 아이디어를 실현하기 위해
              자신의 일에 대한 자유를 추구하기 위해
            </ComponentsItemDescription>
          </ComponentsItem>
        </ComponentsList>
      </ElementContainer>
    </WorkspaceLayout>
  );
};
