import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppLoginIcon } from "../../components/UI/AppLoginIcon/AppLoginIcon";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="LoginPage">
      <AppHeading headingLevel="h1" headingText="Авторизация" />
      <form action="#">
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />
        <AppInput inputPlaceholder="Пароль" inputType="password" />
        <button onClick={() => navigate("/main")}>Войти</button>
      </form>
      <a href="#">Забыли пароль?</a>
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
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
    </div>
  );
};
