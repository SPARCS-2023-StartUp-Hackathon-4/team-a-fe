import {
  ChevronRightIcon,
  Component1Icon,
  CounterClockwiseClockIcon,
  FontSizeIcon,
  LayersIcon,
  Link2Icon,
  Pencil2Icon,
  RocketIcon,
  TextIcon,
} from '@radix-ui/react-icons';
import { useRouter } from 'next/router';
import { Key } from 'react';
import { styled } from 'styles/stitches';

const PanelWrapper = styled('aside', {
  position: 'relative',
  width: '100%',
  maxWidth: '232px',
  height: '100%',
  borderRight: '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgb(250, 250, 250)',
});

const PanelHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  height: '48px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

const PanelHeaderTitle = styled('h2', {
  fontSize: 14,
  fontWeight: 500,
});

const PanelHeaderImage = styled('img', {
  width: '16px',
  height: '16px',
  marginRight: '8px',
});

const WorkspaceMenu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 8px',
});

const WorkspaceMenuGroup = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '24px',
});

const WorkSpaceMenuTitle = styled('h3', {
  fontSize: 12,
  fontWeight: 'bold',
  marginBottom: '8px',
  padding: '0 8px',
  color: 'rgba(0, 0, 0, 0.5)',
});

const WorkspaceMenuItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 8px',
  borderRadius: 4,
  fontSize: 14,
  fontWeight: 500,
  gap: 4,
  cursor: 'pointer',
  hover: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  marginBottom: '8px',
  variants: {
    active: {
      true: {
        color: '$blue900',
        hover: {
          backgroundColor: '$blue50',
        },
      },
    },
  },
});

const WorkspaceMenuLeftGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const ReturnButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '8px 16px',
  borderRadius: 4,
  fontSize: 13,
  fontWeight: 500,
  gap: 4,
  cursor: 'pointer',
  backgroundColor: 'rgb(250, 250, 250)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  hover: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  marginTop: 'auto',
  appearance: 'none',
});

const ReturnContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  padding: '8px 16px',
  bottom: '16px',
});

interface WorkspaceAsidePanelProps {
  menu: any;
  onReturnClick?: () => void;
}

export const WorkspaceAsidePanel = ({ menu }: WorkspaceAsidePanelProps) => {
  const router = useRouter();
  return (
    <PanelWrapper>
      <PanelHeader>
        <PanelHeaderImage src="/workspace-logo.png" alt="플릿컴퍼니 로고" />
        <PanelHeaderTitle>플릿컴퍼니의 공간</PanelHeaderTitle>
      </PanelHeader>
      <WorkspaceMenu>
        {menu.map((item: any, key: Key) => {
          return (
            <WorkspaceMenuGroup key={key}>
              <WorkSpaceMenuTitle>{item.title}</WorkSpaceMenuTitle>
              {item.items.map((item: any, key: Key) => {
                return (
                  <WorkspaceMenuItem
                    key={key}
                    onClick={() => {
                      router.push(item.url);
                    }}
                    active={router.pathname === item.url}
                  >
                    <WorkspaceMenuLeftGroup>
                      {item.icon}
                      {item.name}
                    </WorkspaceMenuLeftGroup>
                    <ChevronRightIcon />
                  </WorkspaceMenuItem>
                );
              })}
            </WorkspaceMenuGroup>
          );
        })}
      </WorkspaceMenu>
      <ReturnContainer>
        <ReturnButton>대시보드로 돌아가기</ReturnButton>
      </ReturnContainer>
    </PanelWrapper>
  );
};
