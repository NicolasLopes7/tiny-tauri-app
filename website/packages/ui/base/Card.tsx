import { styled } from '../../../stitches.config';
import { Button } from './Button';
import { Text } from './Text';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '$4',
  background: '$bg50',
  borderRadius: '12px',
  boxShadow: '6px 20px 24px rgba(0, 0, 0, 0.25)',
  color: '$text'
});

export const Header = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$2'
});

export const Title = styled(Text, {
  fontSize: '$lg',
  fontWeight: 'bold'
});

export const HeaderActions = styled('div', {
  display: 'flex',
  gap: '$1'
});

export const HeaderAction = styled('button', {
  fontWeight: 'bold',
  fontSize: '$sm',
  color: '$text',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',

  '&:hover': {
    textDecoration: 'underline'
  }
});

export const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  borderTop: '1px solid #eee',
  paddingTop: '$3'
});

export const FooterActions = styled('div', {
  display: 'flex',
  gap: '$4',

  alignItems: 'center'
});

export const FooterAction = styled(Button, {
  defaultVariants: {
    size: 'sm'
  }
});
