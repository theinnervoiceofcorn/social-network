import { SCLoginPage } from "./LoginPage.styled";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { OpeningInfo } from "../../components/OpeningInfo/OpeningInfo";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  interface ISubmitProps {
    useremail: string;
    userpassword: string;
  }

  const navigate = useNavigate()

  const loginFormSchema = yup.object({
    useremail: yup.string().email().required("Обязательное поле!"),
    userpassword: yup
      .string()
      .min(4, "Пароль должен содержать как минимум 4 символа!")
      .required("Обязательное поле!"),
  });

  const onLoginSubmit: SubmitHandler<ISubmitProps> = (data) => {
    if (data) {
      navigate("/main")
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  return (
    <SCLoginPage>
      <AppHeading headingLevel="h1" headingText="Авторизация" />
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Номер телефона"
              inputType="tel"
              isError={errors.useremail ? true : false}
              errorMessage={errors.useremail?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              isError={errors.userpassword ? true : false}
              errorMessage={errors.userpassword?.message}
              {...field}
            />
          )}
        />
        <AppButton btnType="submit" userIsRegistered={true} />
      </form>
      <OpeningInfo userIsRegistered={true} />
    </SCLoginPage>
  );
};
