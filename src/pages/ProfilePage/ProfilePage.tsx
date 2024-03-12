import { SCProfilePage } from "./ProfilePage.styled";
import { AppHeader } from "../../components/AppHeader/Header";
import { AppNavbar } from "../../components/AppNavbar/AppNavbar";
import { Sublist } from "../../components/Sublist/Sublist";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import { PostControls } from "../../components/UI/PostControls/PostControls";
import { MediaContainer } from "../../components/MediaContainer/MediaContainer";
import { ShowAll } from "../../components/UI/ShowAll/ShowAll";
import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { BioData } from "../../components/BioData/BioData";
import { FriendsBlock } from "../../components/FriendsBlock/FriendsBlock";
import { MusicBlock } from "../../components/MusicBlock/MusicBlock";

export const ProfilePage = () => {
  return (
    <SCProfilePage>
      <AppHeader userIsSignedIn={true} />
      <aside className="LeftSide">
        <AppNavbar />
        <Sublist />
      </aside>
      <ProfileHeader />
      <main className="Main">
        <WhatsNew />
        <div className="UserPosts">
          <PostControls />
          <MediaContainer />
          <ShowAll />
        </div>
        <AppPost />
        <AppRepost />
      </main>
      <aside className="RightSide">
        <BioData />
        <FriendsBlock />
        <MusicBlock />
      </aside>
    </SCProfilePage>
  );
};
