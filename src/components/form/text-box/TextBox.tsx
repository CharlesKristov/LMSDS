import React, { Fragment } from "react";
import classNames from "classnames";
import { InputProps, Spinner } from "reactstrap";
import "./TextBox.scss";

interface ITextBoxProps {
  invalidMessage?: string;
  invalidMessageClassName?: string;
  isLoading?: boolean;
  title?: string;
  titleClassName?: string;
  absoluteUnit?: React.ReactNode;
}

export const TextBox = ({
  className,
  invalid,
  invalidMessage,
  invalidMessageClassName,
  title,
  titleClassName,
  isLoading,
  value,
  absoluteUnit,
  ...rest
}: InputProps & ITextBoxProps) => (
  <Fragment>
    {title && (
      <div
        className={`textbox-title${titleClassName ? " " + titleClassName : ""}`}
      >
        {title}
      </div>
    )}
    <div className="position-relative" style={{ width: "inherit" }}>
      {isLoading && <Spinner className="textbook-spinner" />}
      <input
        type="text"
        value={value}
        {...rest}
        className={classNames("C--textbox type--1", { invalid }, className)}
      />
      {invalid && invalidMessage && (
        <div
          className={`textbox-invalid-message${
            invalidMessageClassName ? " " + invalidMessageClassName : ""
          }`}
        >
          {invalidMessage}
        </div>
      )}
      {absoluteUnit}
    </div>
  </Fragment>
);

export const TextBoxV2 = ({
  className,
  invalid,
  invalidMessage,
  invalidMessageClassName,
  title,
  titleClassName,
  isLoading,
  value,
  ...rest
}: InputProps & ITextBoxProps) => (
  <Fragment>
    {title && (
      <div
        className={`textbox-title${titleClassName ? " " + titleClassName : ""}`}
      >
        {title}
      </div>
    )}
    {isLoading && <Spinner className="textbook-spinner" />}
    <div className="position-relative" style={{ width: "inherit" }}>
      {isLoading && <Spinner className="textbook-spinner" />}
      <input
        type="text"
        value={value}
        {...rest}
        className={classNames("C--textbox type--2", { invalid }, className)}
      />
      {invalid && invalidMessage && (
        <div
          className={`textbox-invalid-message${
            invalidMessageClassName ? " " + invalidMessageClassName : ""
          }`}
        >
          {invalidMessage}
        </div>
      )}
    </div>
  </Fragment>
);
