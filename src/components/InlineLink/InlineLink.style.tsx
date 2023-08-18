import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  text-decoration: none;
`;
