import mapValues from 'lodash';

export const BREAKPOINTS = {
  xxs: 0,
  xs: 568,
  s: 768,
  m: 1024,
  l: 1440,
  xl: 1680,
  xxl: 1920
} as const;

export const BREAKPOINTS_QUERIES = {
  // @ts-ignore
  at: mapValues(BREAKPOINTS, (v) => `@media (min-width: ${v}px)`),
  // @ts-ignore
  under: mapValues(BREAKPOINTS, (v) => `@media (max-width: ${v - 0.02}px)`)
};
