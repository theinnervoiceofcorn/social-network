interface IAppHeading {
  headingLevel: string;
  headingText: string | undefined;
}

export const AppHeading = ({ headingLevel, headingText }: IAppHeading) => {
  const renderHeading = () => {
    switch (headingLevel) {
      case "h1":
        return <h1>{headingText}</h1>;
      case "username":
        return <h1 className="user__name">{headingText}</h1>
      case "h2":
        return <h2>{headingText}</h2>;
      case "h3":
        return <h3>{headingText}</h3>;
      case "h4":
        return <h4>{headingText}</h4>;
      case "h5":
        return <h5>{headingText}</h5>;
      case "h6":
        return <h6>{headingText}</h6>;
      default:
        return <h1>{headingText}</h1>;
    }
  };

  return renderHeading();
};
