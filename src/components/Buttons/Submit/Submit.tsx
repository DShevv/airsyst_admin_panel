import { StyledSubmit } from "./Submit.styles";

interface Props {
  value?: string;
  className?: string;
}

export default function Submit({ value, className }: Props) {
  return (
    <StyledSubmit
      className={className}
      type="submit"
      value={value}
    ></StyledSubmit>
  );
}
