interface IAppLoginIcon {
  specClass: string;
  imgSrc: string;
  altText: string;
}

export const AppLoginIcon = ({ specClass, imgSrc, altText }: IAppLoginIcon) => {
  return (
    <>
      <a className={`reg__link ${specClass}`} href="#">
        <img src={imgSrc} alt={altText} />
      </a>
    </>
  );
};
