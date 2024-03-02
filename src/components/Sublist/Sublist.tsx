import { AppHeading } from "../UI/AppHeading/AppHeading";
import { UserElem } from "../UI/UserElem/UserElem";
import { SCList } from "./List.styled";
import { userElemData } from "./data";

export const Sublist = () => {
  return (
    <SCList>
      <div className="List__title">
        <AppHeading headingLevel="h2" headingText="Подписки" />
        <span className="count">{userElemData.length}</span>
      </div>
      {userElemData &&
        userElemData.map((elem) => (
          <UserElem
            imgSource={elem.imgSource}
            altText={elem.altText}
            mainText={elem.mainText}
            secondaryText={elem.secondaryText}
            badge={elem.badge}
          />
        ))}
    </SCList>
  );
        {/* <div className="UserElem">
        <img src="./img/profile/profile-img-1.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">N E W</p>
          <p className="secondary__text">Развитие</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/profile/profile-img-2.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Aesthetics</p>
          <p className="secondary__text">Стиль</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/profile/profile-img-3.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">дом твоей эстетики</p>
          <p className="secondary__text">Творчество</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/profile/profile-img-4.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">wailet</p>
          <p className="secondary__text">Искусство</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/profile/profile-img-5.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">A W E S O M E</p>
          <p className="secondary__text">Стиль</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/profile/profile-img-6.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">minimalism</p>
          <p className="secondary__text">Фотография</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/profile/profile-img-7.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Словарный запасE</p>
          <p className="secondary__text">Литература</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/profile/profile-img-8.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Look</p>
          <p className="secondary__text">Мода</p>
        </div>
        <span className="Badge">3</span>
      </div> */}
};
