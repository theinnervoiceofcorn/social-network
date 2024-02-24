import { SCInput } from "./AppInput.styled";

interface IAppInput {
  inputType: string;
  inputPlaceholder: string;
}

export const AppInput = ({ inputType, inputPlaceholder }: IAppInput) => {
  return (
    <SCInput>
      <input type={inputType} placeholder={inputPlaceholder} />
    </SCInput>
  );
};