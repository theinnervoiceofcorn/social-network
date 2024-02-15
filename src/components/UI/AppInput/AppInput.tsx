interface IAppInput {
  inputType: string;
  inputPlaceholder: string;
}

export const AppInput = ({ inputType, inputPlaceholder }: IAppInput) => (
  <input type={inputType} placeholder={inputPlaceholder} />
);