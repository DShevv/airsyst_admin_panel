import DocsItem from "../../../../components/DocsItem/DocsItem";
import { StyledDocumentation } from "./Documentation.style";

export default function Documentation() {
  return (
    <StyledDocumentation>
      <DocsItem to="instructions">Инструкции по эксплуатации</DocsItem>
      <DocsItem to="certificates">Сертификаты</DocsItem>
      <DocsItem to="techinfo">Техническая информация</DocsItem>
      <DocsItem to="typedcomertial">Образцы коммерческих предложений</DocsItem>
    </StyledDocumentation>
  );
}
