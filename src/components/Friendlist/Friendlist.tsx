import { SCList } from "../Sublist/List.styled";
import { AppHeading } from "../UI/AppHeading/AppHeading";
import { UserElem } from "../UI/UserElem/UserElem";
import { friendlistData } from "./data";

export const Friendlist = () => {
  return (
    <SCList>
      <div className="List__title">
        <AppHeading headingLevel="h2" headingText="Близкие друзья" />
        <span className="count">{friendlistData.length}</span>
      </div>
      {friendlistData &&
        friendlistData.map((e) => (
          <UserElem
            imgSource={e.imgSource}
            altText={e.altText}
            mainText={e.mainText}
            secondaryText={e.secondaryText}
            badge={e.badge}
            isOnline={true}
          />
        ))}
    </SCList>
  );
        {/* <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Александр Майков</p>
          <p className="secondary__text _online">Онлайн</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Александр Майков</p>
          <p className="secondary__text _online">Онлайн</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Александр Майков</p>
          <p className="secondary__text _online">Онлайн</p>
        </div>
        <span className="Badge">3</span>
      </div> */}
};
