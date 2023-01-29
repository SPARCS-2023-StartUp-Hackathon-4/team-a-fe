import { CaretRightIcon, Pencil2Icon } from '@radix-ui/react-icons';
import axios from 'axios';
import { WorkspaceLayout } from 'components/Layouts';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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

const CollapseWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  widht: '100%',
  minHeight: '64px',
  padding: '0 16px',
  border: '1px solid #DDE2E4',
  borderRadius: '8px',
  backgroundColor: '#F6F7F8',
  userSelect: 'none',
  hover: {
    backgroundColor: '#E9ECEF',
  },
  marginBottom: '24px',
  cursor: 'pointer',
});

const CollapseInfoGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minHeight: '64px',
});

const CollapseTitle = styled('p', {
  fontSize: '16px',
  fontWeight: '500',
  color: '#252C32',
  lineHeight: '24px',
});

export const BusinessPlan = () => {
  const router = useRouter();
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <Pencil2Icon />
        사업계획서 작성
      </WorkspaceHeader>
      <MenuInfoContainer>
        <MenuInfoTitle>사업계획서 관리</MenuInfoTitle>
        <MenuInfoDescription>
          본 메뉴에서는 작성된 사업계획서 목록을 볼 수 있으며, 사업계획서를
          작성할 수 있습니다.
        </MenuInfoDescription>
      </MenuInfoContainer>
      <Division />
      <ElementContainer>
        <ElementMenuTitle>사업계획서 (1개)</ElementMenuTitle>
        <CollapseWrapper
          onClick={() => {
            router.push('/workspace/business/write');
          }}
        >
          <CollapseInfoGroup>
            <CollapseTitle>
              2023년 예비창업패키지 에이컴퍼니 사업계획서 초안
            </CollapseTitle>
            <CaretRightIcon />
          </CollapseInfoGroup>
        </CollapseWrapper>
      </ElementContainer>
    </WorkspaceLayout>
  );
};
