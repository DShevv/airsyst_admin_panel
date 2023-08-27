import { StyledSubmit } from "./Submit.styles";

interface Props {
  value?: string;
  className?: string;
  disabled?: boolean;
}

export default function Submit({ value, className, disabled }: Props) {
  return (
    <StyledSubmit
      className={className}
      type="submit"
      value={value}
      disabled={disabled}
    ></StyledSubmit>
  );
}
