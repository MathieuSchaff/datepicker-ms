import styled from "styled-components";

interface ISButtonsContainer {
  primarycolor?: string;
  secondarycolor?: string;
  tertiarycolor?: string;
  role: string;
  $type?: boolean;
  className: string;
  ["aria-multiselectable"]?: boolean;
}
export const SButtonsContainer = styled.div<ISButtonsContainer>`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(${(props) => (props.$type ? 5 : 3)}, 1fr);
  max-height: 300px;
  overflow-y: auto;
  border: 2px solid ${(props) => props.primarycolor || "teal"};
  &::-webkit-scrollbar {
    width: 7px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.primarycolor || "grey"};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.secondarycolor || "grey"};
    border-radius: 3px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.tertiarycolor || "black"};
  }
`;
interface IButtonSelectProps {
  key: any;
  id: string;
  tabIndex: number;
  className: string;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  role?: string;
  ["aria-haspopup"]?: string;
  ["aria-controls"]?: string;
  ["aria-labelledby"]?: string;
  ["aria-expanded"]?: boolean;
  ["aria-activedescendant"]?: string;
  primarycolor?: string;
  secondarycolor?: string;
  tertiarycolor?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
}

export const StyledButtonSelect = styled.button<IButtonSelectProps>`
  font-size: 1.2rem;
  background-color: transparent;
  border: 2px solid ${(props) => props.primarycolor || "teal"};
  cursor: pointer;
  padding: 0.3rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props["aria-selected"] === true ? props.primarycolor ?? "teal" : "white"};
  color: ${(props) =>
    props["aria-selected"] === true
      ? props.tertiarycolor ?? "white"
      : "teal  "};
  &:hover {
    border: 2px solid ${(props) => props.primarycolor || "teal"};
    color: ${(props) => props.tertiarycolor || "white"};
    background-color: ${(props) => props.primarycolor || "teal"};
  }
  &:focus {
    border: 2px solid ${(props) => props.primarycolor || "teal"};
    color: ${(props) => props.tertiarycolor || "white"};
    background-color: ${(props) => props.primarycolor || "teal"};
    outline: auto;
  }
`;
interface IUlProps {
  role: string;
  id: string;
  "aria-multiselectable": boolean;
  className: string;
  tabIndex: number;
  primarycolor?: string;
  secondarycolor?: string;
}
export const StyledCustomSelect = styled.ul<IUlProps>`
  position: absolute;
  z-index: 1000;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  top: 30px;
  /* width */
`;
