import { ErrorMessage, StyledInput } from "./AppInput.styled";

interface IAppInput {
  inputType: string;
  inputPlaceholder: string;
  errorMessage?: string;
  isError?: boolean;
}

export const AppInput = ({
  inputType,
  inputPlaceholder,
  errorMessage,
  isError,
  ...props
}: IAppInput) => {
  return (
    <>
      <StyledInput
        $isError={isError || false}
        type={inputType}
        placeholder={inputPlaceholder}
        {...props}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};
