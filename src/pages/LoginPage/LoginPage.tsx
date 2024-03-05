import { SCLoginPage } from "./LoginPage.styled";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { OpeningInfo } from "../../components/OpeningInfo/OpeningInfo";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/slices/userSlice";
import { useEffect } from "react";
import { AppHeader } from "../../components/AppHeader/Header";

export const LoginPage = () => {
  interface ISubmitProps {
    useremail: string;
    userpassword: string;
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const loginFormSchema = yup.object({
    useremail: yup.string().email("Введите эл. почту в правильном формате").required("Обязательное поле!"),
    userpassword: yup
      .string()
      .min(6, "Пароль должен содержать как минимум 6 символов!")
      .required("Обязательное поле!"),
  });

  const onLoginSubmit: SubmitHandler<ISubmitProps> = () => {
    dispatch(changeUser(mockUser));
  };

  useEffect(() => {
    if (user?.user_id) {
      navigate("/profile");
    }
  }, [user]);

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

  const mockUser = {
    mail: "nurikmirr817@gmail.com",
    password: "20051206mir",
    phone_number: "909352662",
    user_id: 69,
    name: "Nurmuhammad",
    reg_date: new Date().toISOString,
    city: "Tashkent",
  };

  return (
    <>
      <AppHeader userIsSignedIn={false} />
      <SCLoginPage>
        <AppHeading headingLevel="h1" headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <AppInput
                inputPlaceholder="Электронная почта"
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
    </>
  );
};
