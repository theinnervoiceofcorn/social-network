import { useNavigate } from "react-router-dom";

interface IAppButton {
  userIsRegistered: boolean;
}

export const AppButton = ({ userIsRegistered }: IAppButton) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/main")}>
      {userIsRegistered ? "Войти" : "Зарегистрироваться"}
    </button>
  );
};
