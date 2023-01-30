import React from "react";
import { SNavButton } from "./styled";

interface INavButtonProps {
  onClick: () => void;
  disabled: boolean;
  primarycolor?: string;
  dataTestid: string;
  ariaLabel: string;
  size?: string;
  styles?: React.CSSProperties;
  customArrow?: React.ReactNode;
  children?: React.ReactNode;
}

const NavButton = ({
  onClick,
  disabled,
  primarycolor,
  dataTestid,
  ariaLabel,
  size,
  styles,
  customArrow,
  children,
}: INavButtonProps) => {
  return (
    <SNavButton
      onClick={onClick}
      disabled={disabled}
      className="arrow-button"
      style={{ ...styles }}
      primarycolor={primarycolor}
      type="button"
      data-testid={dataTestid}
      aria-label={ariaLabel ?? "go to previous month"}
      size={size}
    >
      {customArrow ?? children}
    </SNavButton>
  );
};

export default NavButton;
