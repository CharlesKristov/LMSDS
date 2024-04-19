/**
 * @author: adi.nugraha@ecomindo.com
 */

import { ButtonProps } from "reactstrap";

// refers to the design guide
type TButtonTheme =
  | "primary"
  | "secondary"
  | "dangerous"
  | "binus-blue"
  | "ghost"
  | "ghost-borderless"
  | "ghost-inverted"
  | "ghost-inverted-borderless"
  | "disabled"
  | undefined;

export interface IButtonProps extends ButtonProps {
  // tambahkan sesuatu disini
  theme?: TButtonTheme;
  block?: boolean;
  isLoading?: boolean;
  disabledTheme?: TButtonTheme;
}
