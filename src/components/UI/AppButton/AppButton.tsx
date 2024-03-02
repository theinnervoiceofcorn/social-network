interface IAppButton {
  userIsRegistered: boolean;
  btnType: "submit" | "reset" | "button" | undefined;
}

export const AppButton = ({ userIsRegistered, btnType }: IAppButton) => {
  return (
    <button type={btnType}>
      {userIsRegistered ? "Войти" : "Зарегистрироваться"}
    </button>
  );
};
