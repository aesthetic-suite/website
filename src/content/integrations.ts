export const REACT_HOOKS_EXAMPLE = `import React from 'react';
import { useStyles, createComponentStyles, CommonSize, PaletteType } from '@aesthetic/react';

export const styleSheet = createComponentStyles((css) => ({
  button: css.mixin('reset-button', {
    padding: css.var('spacing-df'),

    '@variants': {
      'palette:primary': { backgroundColor: css.var('palette-primary-bg-base') },
      'palette:positive': { backgroundColor: css.var('palette-positive-bg-base') },
      'palette:warning': { backgroundColor: css.var('palette-warning-bg-base') },

      'size:sm': { fontSize: css.var('text-sm-size') },
      'size:df': { fontSize: css.var('text-df-size') },
      'size:lg': { fontSize: css.var('text-lg-size') },
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
        { size, palette },
        'button',
        selected && 'button_selected',
        disabled && 'button_disabled',
      )}
    >
      {children}
    </button>
  );
}`;

export const REACT_STYLED_EXAMPLE = `import React from 'react';
import { createdStyled, CommonSize, PaletteType } from '@aesthetic/react';

export interface ButtonVariants {
  palette?: PaletteType;
  size?: CommonSize;
}

const Button = createdStyled<'button', ButtonVariants>('button', (css) =>
  css.mixin('reset-button', {
    padding: css.var('spacing-df'),

    '@variants': {
      'palette:primary': { backgroundColor: css.var('palette-primary-bg-base') },
      'palette:positive': { backgroundColor: css.var('palette-positive-bg-base') },
      'palette:warning': { backgroundColor: css.var('palette-warning-bg-base') },

      'size:sm': { fontSize: css.var('text-sm-size') },
      'size:df': { fontSize: css.var('text-df-size') },
      'size:lg': { fontSize: css.var('text-lg-size') },
    },
  })
);

Button.defaultProps = {
  palette: 'primary',
  size: 'df',
};

export default Button;`;
