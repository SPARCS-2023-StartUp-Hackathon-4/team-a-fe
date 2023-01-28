import { WorkspaceAsidePanel } from 'components/WorkspaceAsidePanel';
import { styled } from 'styles/stitches';

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled('main', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
});

const Conatiner = styled('div', {
  position: 'relative',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '16px',
});

export const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  return (
    <Wrapper>
      <WorkspaceAsidePanel />
      <Conatiner>{children}</Conatiner>
    </Wrapper>
  );
};
