export const REACT_EXAMPLE = `import React from 'react';
import { useStyles, createComponentStyles, CommonSize, PaletteType } from '@aesthetic/react';

export const styleSheet = createComponentStyles((css) => ({
  button: css.mixin('pattern-reset-button', {
    padding: css.var('spacing-df'),

    '@variants': {
      size_sm: { fontSize: css.var('text-sm-size') },
      size_df: { fontSize: css.var('text-df-size') },
      size_lg: { fontSize: css.var('text-lg-size') },
      palette_primary: { backgroundColor: css.var('palette-primary-bg-base') },
      palette_success: { backgroundColor: css.var('palette-success-bg-base') },
      palette_warning: { backgroundColor: css.var('palette-warning-bg-base') },
    },
  }),
  button_selected: {},
  button_disabled: {},
  // ...
}));

export interface ButtonProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  palette?: PaletteType;
  selected?: boolean;
  size?: CommonSize;
}

export default function Button({
  children,
  size = 'df',
  palette = 'primary',
  selected = false,
  disabled = false,
}: ButtonProps) {
  const cx = useStyles(styleSheet);

  return (
    <button
      type="button"
      className={cx(
        'button',
        { size, palette },
        selected && 'button_selected',
        disabled && 'button_disabled',
      )}
    >
      {children}
    </button>
  );
}`;
