import type { StyledComponent } from '@emotion/styled';
import type { IconBaseProps } from 'react-icons';
import type { Theme } from '@emotion/react';

export type EmptyObject = Record<string, never>;
export type EmotionStyledIconType = StyledComponent<
  IconBaseProps & { theme?: Theme | undefined },
  EmptyObject,
  EmptyObject
>;
