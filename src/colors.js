/**
 *  Colors used by light and dark mode that are shared and unique.
 */
const sharedColors = {
  white: '#FFFFFF',
  dark: '#303041',
  primary: '#3200C8',
  blue: '#404CCF',
  secondary: '#9D9DAC',
};

/**
 *  Default consumer APP Mode Unique Colors
 */
export const consumerNormalColors = {
  ...sharedColors,
  headerBg: '#2F2F3B',
};
/**
 *  Consumer APP Dark Mode Unique Colors
 */
export const consumerDarkColors = {
  ...sharedColors,
  headerBg: '#3C4954',
};
