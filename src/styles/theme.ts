const calRem = (size: number) => `${size / 16}rem`;

const fontSize = {
  xs: calRem(12),
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
  xl: calRem(20),

  subTitle: calRem(24),
  title: calRem(36),
  bigTitle: calRem(50),
};

const length = {
  xs: '0.5rem',
  sm: '1.0rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '3.5rem',
};

const color = {
  brandColor: '#5CC6BA',
  backgroundColor: '#F6F9F0',
  subText: '#bababc',
  black: '#17202A',
  white: '#FDFEFE',
  blue: '#3498DB',
  transparentBrandColor: 'rgba(20, 26, 25, 0.1)',
  transparentBackground: 'rgba(0, 0, 0, 0.1)',
};

const theme = { fontSize, length, color };

export default theme;
