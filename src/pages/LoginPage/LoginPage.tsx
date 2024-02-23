import { SCLoginPage } from "./LoginPage.styled";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { OpeningInfo } from "../../components/OpeningInfo/OpeningInfo";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <AppHeading headingLevel="h1" headingText="Авторизация" />
      <form action="#">
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />
        <AppInput inputPlaceholder="Пароль" inputType="password" />
        <AppButton userIsRegistered={true} />
      </form>
      <OpeningInfo userIsRegistered={true} />
    </SCLoginPage>
  );
};
