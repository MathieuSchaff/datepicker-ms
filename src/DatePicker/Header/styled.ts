import styled, { css } from 'styled-components';

import { BsChevronDoubleRight } from 'react-icons/bs';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
export const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  gap: 0.3rem;
`;
interface INavButtonProps {
  onClick: () => void;
  disabled: boolean;
  primarycolor?: string;
  type: string;
  size?: string;
  ['data-testid']: string;
  ['aria-label']: string;
  className: string;
}
// THE BUTTON TO NAGIVATE BACK AND NEXT OF MONTHS / YEARS
export const SNavButton = styled.button<INavButtonProps>`
  cursor: pointer;
  width: ${props => props.size || '1.5rem'};
  height: ${props => props.size || '1.5rem'};
  color: ${props => props.primarycolor || 'teal'};
  border: 1px solid ${props => props.primarycolor || 'teal'};
  border-radius: 50%;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background-color: ${props => props.primarycolor || 'teal'};
  }
  &:disabled {
    opacity: 0.5;
  }
`;

// SVG STYLED
const svgStyles = () => {
  return css`
    /* width: 100%;
    height: 100%; */
  `;
};
export const SvgButtonLeftYear = styled(BsChevronDoubleLeft)`
  ${() => svgStyles()}
`;
export const SvgButtonLeftMonth = styled(BsChevronLeft)`
  ${() => svgStyles()}
`;
export const SvgButtonRightYear = styled(BsChevronDoubleRight)`
  ${() => svgStyles()}
`;
export const SvgButtonRightMonth = styled(BsChevronRight)`
  ${() => svgStyles()}
`;

// BUTTON YEAR AND MONTH
export interface TypedButtonMonthOrYear {
  className: string;
  primarycolor?: string;
  type: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  'aria-haspopup'?: string;
  'aria-controls'?: string | undefined;
  'aria-expanded'?: boolean | undefined;
}
export const ButtonStyed = styled.button<TypedButtonMonthOrYear>`
  flex: 1 0 0;
  font-size: 1.8rem;
  color: ${props => props.primarycolor || 'teal'};
  border-style: solid;
  border-width: 2px;
  border-color: white;
  background-color: white;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.primarycolor || 'teal'};
  }
`;
