import { WorkspaceLayout } from 'components/Layouts';
import { WorkspaceAsidePanel } from 'components/WorkspaceAsidePanel';
import { styled } from 'styles/stitches';

const Wrapper = styled('main', {
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const Main = () => {
  return (
    <WorkspaceLayout>
      <Wrapper></Wrapper>
    </WorkspaceLayout>
  );
};
