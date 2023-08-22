import { DocContainer, DownloadIcon } from "./DocDownload.style";
import icon from "../../assets/dowload-file.png";

interface Props {
  title: string;
  link: string;
}

export default function DocDownload({ title, link }: Props) {
  return (
    <DocContainer download href={link}>
      <p>{title}</p>
      <p>
        Скачать <DownloadIcon src={icon} />
      </p>
    </DocContainer>
  );
}
