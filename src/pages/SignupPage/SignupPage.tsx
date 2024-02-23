import { SCSignupPage } from "./LoginPage.styled";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { OpeningInfo } from "../../components/OpeningInfo/OpeningInfo";

export const SignupPage = () => {
  return (
    <SCSignupPage>
      <AppHeading headingLevel="h1" headingText="Регистрация" />
      <form action="#">
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />
        <AppInput inputPlaceholder="Пароль" inputType="password" />
        <AppButton userIsRegistered={false} />
      </form>
      <OpeningInfo userIsRegistered={false} />
    </SCSignupPage>
  );
};
