import { styled } from 'styles/stitches';

const CollapseItemWrapper = styled('li', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minHeight: '64px',
  padding: '0 16px',
  border: '1px solid #DDE2E4',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

const CollapseItemInfoGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const LinkTag = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '84px',
  height: '32px',
  padding: '0 8px',
  borderRadius: '500px',
  fontSize: '14px',
  backgroundColor: '$grey500',
  color: '#fff',
  marginRight: '16px',
  fontWeight: '500',
});

const LinkText = styled('p', {
  fontSize: '16px',
  fontWeight: '500',
  color: '#252C32',
  lineHeight: '24px',
});

const ColorDot = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '$green500',
  marginRight: '8px',
});

const ColorText = styled('p', {
  fontSize: '14px',
  fontWeight: '500',
  color: '$green500',
  lineHeight: '24px',
});

export const CollapseItem = () => {
  return (
    <CollapseItemWrapper>
      <CollapseItemInfoGroup>
        <LinkTag>행사 링크</LinkTag>
        <LinkText>https://hackathon.sparcs.org/</LinkText>
      </CollapseItemInfoGroup>
      <CollapseItemInfoGroup>
        <ColorDot />
        <ColorText>정상 작동</ColorText>
      </CollapseItemInfoGroup>
    </CollapseItemWrapper>
  );
};
