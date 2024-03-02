import { Link } from "react-router-dom";
import { AppLoginIcon } from "../UI/AppLoginIcon/AppLoginIcon";
import { SCOpeningInfo } from "./OpeningInfo.styled";

interface IOpeningInfo {
  userIsRegistered: boolean;
}

export const OpeningInfo = ({ userIsRegistered }: IOpeningInfo) => {
  return (
    <SCOpeningInfo>
      {userIsRegistered && <Link to="#">Забыли пароль?</Link>}
      <div className="registration">
        <span>
          {userIsRegistered ? "У вас нет аккаунта?" : "У вас уже есть аккаунт?"}
          <Link to={userIsRegistered ? "sign-up" : "/"}>
            {userIsRegistered ? " Зарегистрироваться" : " Войти"}
          </Link>
        </span>
        <p>
          {userIsRegistered
            ? "Войти с помощью"
            : "Зарегистрироваться с помощью"}
        </p>
        <div className="icons-wrapper">
          <AppLoginIcon
            altText="Google"
            specClass="google-link"
            imgSrc="./img/icons/google.svg"
          />
          <AppLoginIcon
            altText="Google Plus"
            specClass="google-plus-link"
            imgSrc="./img/icons/google-plus.svg"
          />
          <AppLoginIcon
            altText="Yandex"
            specClass="yandex-link"
            imgSrc="./img/icons/yandex.svg"
          />
          <AppLoginIcon
            altText="Mail.ru"
            specClass="mail-ru-link"
            imgSrc="./img/icons/mail-ru.svg"
          />
        </div>
      </div>
    </SCOpeningInfo>
  );
};
