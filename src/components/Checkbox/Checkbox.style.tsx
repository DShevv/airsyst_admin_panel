import styled from "styled-components";

export const StyledCheckbox = styled.div`
  display: flex;

  label[for="agent"] {
    margin-bottom: 38px;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  input[type="checkbox"]:checked + label::after {
    position: absolute;
    width: 20px;
    height: 23px;
    bottom: 2px;
    left: 2px;
    content: "";
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("/src/assets/sight.svg");
    background-size: contain;
    z-index: 2;
  }

  label {
    margin-bottom: 9px;
    display: inline-flex;
    position: relative;
    align-items: center;
    height: 21px;
    user-select: none;
    cursor: pointer;
  }

  label::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid ${(props) => props.theme.colors.secondaryDark};
    border-radius: 3px;
    margin-right: 5px;
    z-index: 1;
  }
`;
