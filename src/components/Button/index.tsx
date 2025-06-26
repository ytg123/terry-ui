import "./style.scss";

import classNames from "classnames"; // 用于处理类名
import * as React from "react";

export type ButtonSize = "small" | "default" | "large";

export type ButtonType = "primary" | "danger" | "default" | "link";

interface IButtonProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  children?: React.ReactNode;
}

type NativeButtonProps = IButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">;
type AnchorButtonProps = IButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type">;

// Partial 可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FunctionComponent<IButtonProps> = props => {
  const {
    className,
    disabled,
    loading,
    size,
    type,
    href,
    children,
    ...restProps
  } = props;
  // 处理类名
  const classes = classNames("btn", className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: disabled || loading,
    "btn-loading": loading,
  });
  if (type === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {loading ? (
          <span className="pr-1">
            {/* <i className="fas fa-spinner pin"></i> */}
            loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
};

Button.defaultProps = {
  type: "default",
};

export default Button;
