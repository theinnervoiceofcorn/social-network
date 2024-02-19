interface IAppNavbarItem {
  itemType: number;
  className: string;
  id: string;
  d: string;
  secondaryD: string;
  text: string;
  badge: number;
}

export const AppNavbarItem = ({
  itemType,
  className,
  id,
  d,
  secondaryD,
  text,
  badge,
}: IAppNavbarItem) => {
  const renderNavbarItem = () => {
    switch (itemType) {
      case 1:
        return (
          <li className="navbar__item">
            <svg
              className={`icon ${className}`}
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path id={id} d={d} />
            </svg>
            <p className="item__name">{text}</p>
            <span className="Badge">{badge}</span>
          </li>
        );
      case 2:
        return (
          <li className="navbar__item">
            <svg
              className={`icon ${className}`}
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id={id}>
                <path d={d} />
                <path d={secondaryD} />
              </g>
            </svg>
            <p className="item__name">{text}</p>
            <span className="Badge">{badge}</span>
          </li>
        );
      case 3:
        return (
          <li className="navbar__item">
            <svg
              className={`icon ${className}`}
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id={id}
                fillRule="evenodd"
                clipRule="evenodd"
                d={d}
              />
            </svg>
            <p className="item__name">{text}</p>
            <span className="Badge">{badge}</span>
          </li>
        );
    }
  };
  return renderNavbarItem();
};