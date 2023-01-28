import { useState } from 'react';
import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
import { styled } from 'styles/stitches';

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

const Icon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  svg: {
    width: '24px',
    height: '24px',
  },
});

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '24px 8px',
});

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

export const Collapse = ({ title, children }: CollapseProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CollapseWrapper>
        <CollapseInfoGroup>
          <CollapseTitle>{title}</CollapseTitle>
          <Icon onClick={() => setOpen((open) => !open)}>
            {open ? <CaretUpIcon /> : <CaretDownIcon />}
          </Icon>
        </CollapseInfoGroup>
        {open && <ContentContainer>{children}</ContentContainer>}
      </CollapseWrapper>
    </div>
  );
};

Collapse.defaultProps = {
  title: '2023년 예비창업패키지 에이컴퍼니 사업계획서 초안',
};
