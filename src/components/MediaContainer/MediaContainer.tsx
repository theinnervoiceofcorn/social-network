import { MediaItem } from "../UI/MediaItem/MediaItem";
import { SCMediaContainer } from "./MediaContainer.styled";
import { MediaItemData } from "./data";

export const MediaContainer = () => {
  return (
    <SCMediaContainer>
      {MediaItemData &&
        MediaItemData.map((e) => <MediaItem imgSrc={e.imgSrc} />)}
    </SCMediaContainer>
  );
};
