import { SCUserElem } from "./UserElem.styled";

interface IUserElem {
  imgSource: string;
  altText: string;
  mainText: string;
  secondaryText: string;
  badge: number;
  isOnline?: boolean;
}

export const UserElem = ({
  imgSource,
  altText,
  badge,
  mainText,
  secondaryText,
  isOnline,
}: IUserElem) => {
  return (
    <SCUserElem>
      <img src={imgSource} alt={altText} />
      <div className="user__description">
        <p className="main__text">{mainText}</p>
        <p className={`secondary__text ${isOnline && "_online"}`}>
          {secondaryText}
        </p>
      </div>
      <span className="Badge">{badge}</span>
    </SCUserElem>
  );
};
