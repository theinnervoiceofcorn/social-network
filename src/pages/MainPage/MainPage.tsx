import { SCMainPage } from "./MainPage.styled";
import { AppHeader } from "../../components/AppHeader/Header";
import { AppNavbar } from "../../components/AppNavbar/AppNavbar";
import { Sublist } from "../../components/Sublist/Sublist";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import { AppHistory } from "../../components/AppHistory/AppHistory";
import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { Friendlist } from "../../components/Friendlist/Friendlist";
import { MusicBlock } from "../../components/MusicBlock/MusicBlock";

export const MainPage = () => {
  return (
    <SCMainPage>
      <AppHeader userIsSignedIn={true} />
      <aside className="LeftSide">
        <AppNavbar />
        <Sublist />
      </aside>
      <main className="Main">
        <WhatsNew />
        <AppHistory />
        <AppPost />
        <AppRepost />
      </main>
      <aside className="RightSide">
        <Friendlist />
        <MusicBlock />
      </aside>
    </SCMainPage>
  );
};
