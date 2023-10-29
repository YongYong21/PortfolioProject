/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IntroduceCard from "./components/main/IntroduceCard";
import ProfileCard from "./components/main/profileCard";
import ProjectConponents from "./components/main/ProjectComponents";
import EmailComponents from "./components/main/EmailComponents";

const AppContainer = css`
  height: auto;
`;

function App(): JSX.Element {
  return (
    <div css={AppContainer}>
      <IntroduceCard></IntroduceCard>
      <ProfileCard></ProfileCard>
      <ProjectConponents></ProjectConponents>
      <EmailComponents></EmailComponents>
    </div>
  );
}

export default App;
