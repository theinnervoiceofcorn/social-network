interface IMediaItem {
  imgSrc: string;
}

export const MediaItem = ({ imgSrc }: IMediaItem) => (
  <img className="media__item" src={imgSrc} alt="Post Item" />
);
