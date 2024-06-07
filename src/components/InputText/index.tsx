import * as S from "./styles";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

export function InputText({ optional, containerProps, ...rest }: InputTextProps) {
  return(
    <S.InputTextContainer {...containerProps}>
      <input {...rest} />
      {optional && (<span>Opcional</span>)}
    </S.InputTextContainer>
  )
}