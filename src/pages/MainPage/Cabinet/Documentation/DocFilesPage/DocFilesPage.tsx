import { Link } from "react-router-dom";
import DocDownload from "../../../../../components/DocDownload/DocDownload";
import { instructions } from "../../../../../testData/documents";
import { FilesContainer, Path } from "./DocFilesPage.style";

interface Props {
  title: string;
  itemsHref: string;
}

export default function DocFilesPage({ title, itemsHref }: Props) {
  return (
    <div>
      <Path>
        <Link
          to="../../documentation"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Документация
        </Link>{" "}
        / <span>{title}</span>
      </Path>
      <FilesContainer>
        {instructions.map((elem, index) => (
          <DocDownload key={index} title={elem.title} link={`/${index}`} />
        ))}
      </FilesContainer>
    </div>
  );
}
