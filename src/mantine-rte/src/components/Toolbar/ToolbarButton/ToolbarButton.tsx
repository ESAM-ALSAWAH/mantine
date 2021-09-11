import React from 'react';
import cx from 'clsx';
import { ActionIcon, ActionIconProps, useMantineTheme } from '@mantine/core';
import useStyles from './ToolbarButton.styles';

interface ToolbarButtonProps extends ActionIconProps<'button', HTMLButtonElement> {
  /** Control icon */
  children: React.ReactNode;

  /** Quill specific control */
  controls: string;

  /** Value for quill control */
  value?: string;
}

export function ToolbarButton({
  className,
  children,
  controls,
  value,
  themeOverride,
  ...others
}: ToolbarButtonProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, null, 'rte');
  return (
    <ActionIcon
      themeOverride={themeOverride}
      className={cx(classes.control, `ql-${controls}`, className)}
      value={value}
      {...others}
    >
      {children}
    </ActionIcon>
  );
}

ToolbarButton.displayName = '@mantine/rte/ToolbarButton';