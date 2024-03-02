import { AppHeading } from "../UI/AppHeading/AppHeading";
import { MusicElem } from "../UI/MusicElem/MusicElem";
import { SCMusicBlock } from "./MusicBlock.styled";
import { musicBlockData } from "./data";

export const MusicBlock = () => {
  return (
    <SCMusicBlock>
      <div className="MusicBlock__title">
        <AppHeading headingLevel="h2" headingText="Вы недавно слушали" />
        <span>{musicBlockData.length}</span>
      </div>
      {musicBlockData &&
        musicBlockData.map((e) => (
          <MusicElem
            imgSource={e.imgSource}
            altText={e.altText}
            mainText={e.mainText}
            secondaryText={e.secondaryText}
            isActive={e.isActive}
          />
        ))}
    </SCMusicBlock>
  );
};
