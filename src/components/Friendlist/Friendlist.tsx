import { AppHeading } from "../UI/AppHeading/AppHeading";

export const Friendlist = () => {
  return (
    <div className="List">
      <div className="List__title">
        <AppHeading headingLevel="h2" headingText="Близкие друзья" />
        <span className="count">123</span>
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
      </div>
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Александр Майков</p>
          <p className="secondary__text _online">Онлайн</p>
        </div>
        <span className="Badge">3</span>
      </div>
    </div>
  );
};
