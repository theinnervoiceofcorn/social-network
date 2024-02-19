import "../LoginPage/LoginPage.scss";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { OpeningInfo } from "../../components/OpeningInfo/OpeningInfo";

export const SignupPage = () => {
  return (
    <div className="LoginPage">
      <AppHeading headingLevel="h1" headingText="Регистрация" />
      <form action="#">
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />
        <AppInput inputPlaceholder="Пароль" inputType="password" />
        <AppButton userIsRegistered={false} />
      </form>
      <OpeningInfo userIsRegistered={false} />
    </div>
  );
};
