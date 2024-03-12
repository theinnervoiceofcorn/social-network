// AUTH API

export interface IGetUserByIdResponse {
  status: number;
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: string;
    city: string;
  };
}

export interface IRegisterUserResponse {
  status: number;
  user_id: number;
}

export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

export interface ILoginUserResponse extends IRegisterUserResponse {}

export interface ILoginUserPayload {
  email: string;
  password: string;
}

// POST API

export interface IGetPostByIdResponse {
  status: 1;
  message: {
    main_text: string;
    user_id: number;
    id: number;
    reg_date: string;
    user_fk: {
      email: string;
      user_city: string;
      reg_date: string;
      name: string;
      id: 1;
      phone_number: string;
      password: string;
    };
    photos: [];
    comments: [];
  };
}

export interface IPostPostResponse {
  status: number;
  post_id: number;
}

export interface IPostPostPayload {
  user_id: number;
  main_text: string;
}

export interface IUpdatePostResponse {
  status: number;
  message: string;
}

export interface IUpdatePostPayload {
  post_id: number;
  new_text: string;
}

export interface IDeletePostResponse {
  status: number;
  message: string;
}

// PHOTOS API


