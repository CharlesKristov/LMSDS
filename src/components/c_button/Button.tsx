import React from "react";
import { IButtonProps } from "./interfaces";
import classnames from "classnames";
import "./Button.scss";

export const Button = ({
  className,
  theme,
  block,
  isLoading,
  disabled,
  disabledTheme,
  ...rest
}: IButtonProps) => (
  <button
    disabled={disabled}
    className={classnames(
      ...[
        "C--button type--1 font-size-14px",
        !theme ? undefined : `-theme-${disabled ? disabledTheme || "disabled" : theme}`,
        !theme && disabled ? `-theme-disabled` : undefined,
        !block ? undefined : "-full-width",
        !isLoading ? undefined : "-is-loading",
        className,
      ]
    )}
    {...rest}
  />
);
