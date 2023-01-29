import {
  Component1Icon,
  CounterClockwiseClockIcon,
  FontSizeIcon,
  LayersIcon,
  Link2Icon,
  Pencil2Icon,
  RocketIcon,
  TextIcon,
} from '@radix-ui/react-icons';
import { WorkspaceAsidePanel } from 'components/WorkspaceAsidePanel';
import { styled } from 'styles/stitches';

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled('main', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
});

const Conatiner = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '100%',
  height: '100%',
});

const LayoutMenuArr = [
  {
    title: '사업 관리',
    items: [
      {
        name: '사업계획서 작성',
        icon: <Pencil2Icon />,
        url: '/workspace/business/plan',
      },
      {
        name: '지표(KPI) 관리',
        icon: <RocketIcon />,
        url: '/workspace/business/kpi',
      },
    ],
  },
  {
    title: '에셋 관리',
    items: [
      {
        name: '상수 텍스트 추가/제거',
        icon: <TextIcon />,
        url: '/workspace/assets/constants',
      },
      {
        name: '컴포넌트 관리',
        icon: <Component1Icon />,
        url: '/workspace/assets/components',
      },
      {
        name: '다이어그램 관리',
        icon: <LayersIcon />,
        url: '/workspace/assets/diagrams',
      },
      {
        name: '하이퍼링크 관리',
        icon: <Link2Icon />,
        url: '/workspace/assets/hyperlinks',
      },
    ],
  },
  {
    title: '환경 설정',
    items: [
      {
        name: '커스텀 폰트 관리',
        icon: <FontSizeIcon />,
        url: '/workspace/settings/fonts',
      },
      // {
      //   name: '문서 히스토리',
      //   icon: <CounterClockwiseClockIcon />,
      //   url: '/workspace/settings/history',
      // },
    ],
  },
];

export const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  return (
    <Wrapper>
      <WorkspaceAsidePanel menu={LayoutMenuArr} />
      <Conatiner>{children}</Conatiner>
    </Wrapper>
  );
};
