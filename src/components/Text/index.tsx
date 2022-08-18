import { CSSProperties } from 'react';

export const firstLetterUpper: CSSProperties | {[selector: string]: CSSProperties} = {
  '::first-letter': { textTransform: 'uppercase'}
};