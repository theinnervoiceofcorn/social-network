import { SCSignupPage } from "./SignupPage.styled";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { OpeningInfo } from "../../components/OpeningInfo/OpeningInfo";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../components/AppHeader/Header";
import { useRegisterUserMutation } from "../../store/api/auth";
import { useEffect } from "react";

interface ISubmitProps {
  userName: string;
  userEmail: string;
  userPhone: string;
  userPassword: string;
  userCity: string;
}

const registrationFormSchema = yup.object({
  userName: yup.string().required("введите имя пж"),
  userEmail: yup
    .string()
    .email("введите адрес почты правильно пж")
    .required("введите адрес почты пж"),
  userPhone: yup.string().required("введите номер пж"),
  userPassword: yup
    .string()
    .min(8, "пароль должен содержать мин 8 символов")
    .required("введите пароль пж"),
  userCity: yup.string().required("введите город пж"),
});

export const SignupPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userPhone: "",
      userPassword: "",
      userCity: "",
    },
  });

  const navigate = useNavigate();
  const [registerUser, { data }] = useRegisterUserMutation();

  const onSignupSubmit: SubmitHandler<ISubmitProps> = (data) => {
    registerUser({
      name: data.userName,
      email: data.userEmail,
      phone_number: data.userPhone,
      password: data.userPassword,
      user_city: data.userCity,
    });
  };

  useEffect(() => {
    if (data) {
      navigate("/")
    }
  }, [data, navigate]);

  return (
    <>
      <AppHeader userIsSignedIn={false} />
      <SCSignupPage>
        <AppHeading headingLevel="h1" headingText="Регистрация" />
        <form onSubmit={handleSubmit(onSignupSubmit)}>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <AppInput
                inputPlaceholder="Введите имя"
                inputType="text"
                isError={errors.userName ? true : false}
                errorMessage={errors.userName?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <AppInput
                inputPlaceholder="Введите почту"
                inputType="text"
                isError={errors.userEmail ? true : false}
                errorMessage={errors.userEmail?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userPhone"
            control={control}
            render={({ field }) => (
              <AppInput
                inputPlaceholder="Введите номер телефона"
                inputType="text"
                isError={errors.userPhone ? true : false}
                errorMessage={errors.userPhone?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                inputPlaceholder="Введите пароль"
                inputType="text"
                isError={errors.userPassword ? true : false}
                errorMessage={errors.userPassword?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userCity"
            control={control}
            render={({ field }) => (
              <AppInput
                inputPlaceholder="Введите город"
                inputType="text"
                isError={errors.userCity ? true : false}
                errorMessage={errors.userCity?.message}
                {...field}
              />
            )}
          />
          <AppButton btnType="submit" userIsRegistered={false} />
        </form>
        <OpeningInfo userIsRegistered={false} />
      </SCSignupPage>
    </>
  );
};
