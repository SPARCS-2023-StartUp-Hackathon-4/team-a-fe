import { RocketIcon } from '@radix-ui/react-icons';
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

const NoticeContainers = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Kpi = () => {
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <RocketIcon />
        지표(KPI) 관리
      </WorkspaceHeader>
      <MenuInfoContainer>
        <MenuInfoTitle>지표(KPI) 관리</MenuInfoTitle>
        <MenuInfoDescription>
          본 메뉴에서는 구글 애널리틱스 및 제작된 차트를 기반으로 구성된
          페이지입니다.
        </MenuInfoDescription>
      </MenuInfoContainer>
      <Division />
      <ElementContainer>
        <NoticeContainers>현재 준비 중인 기능입니다.</NoticeContainers>
      </ElementContainer>
    </WorkspaceLayout>
  );
};
