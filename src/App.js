import {
  Burger,
  Search,
  Logo,
  PlaylistTitleCol,
  Selection,
  SidebarPersonal,
  PlayerControls,
  PlayerTrack,
  Volume,
} from './components/components'
import { Filter } from './components/filter'
import { Tracks } from './components/tracks'
import { SkeletonTheme } from 'react-loading-skeleton'
import {
  StyledContainer,
  StyledContent,
  StyledHeading,
  StyledMain,
  StyledMainCenterblock,
  StyledMainNav,
  StyledMainSidebar,
  StyledPlayer,
  StyledPlayerBlock,
  StyledPlayerBtns,
  StyledPlayerContent,
  StyledPlayerProgress,
  StyledPlaylist,
  StyledSidebarBlock,
  StyledSidebarBlockList,
  StyledWrapper,
} from './styles/styles'

function App() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <StyledMain>
            <StyledMainNav>
              <Logo />
              <Burger />
            </StyledMainNav>
            <StyledMainCenterblock>
              <Search></Search>
              <StyledHeading>Треки</StyledHeading>
              <Filter></Filter>
              <StyledContent>
                <StyledPlaylist>
                  <PlaylistTitleCol></PlaylistTitleCol>
                  <Tracks></Tracks>
                </StyledPlaylist>
              </StyledContent>
            </StyledMainCenterblock>
            <StyledMainSidebar>
              <SidebarPersonal></SidebarPersonal>
              <StyledSidebarBlock>
                <StyledSidebarBlockList>
                  <Selection
                    src="img/playlist01.png"
                    alt="day's playlist"
                  ></Selection>
                  <Selection
                    src="img/playlist02.png"
                    alt="100 dance hits"
                  ></Selection>
                  <Selection
                    src="img/playlist03.png"
                    alt="indie-charge"
                  ></Selection>
                </StyledSidebarBlockList>
              </StyledSidebarBlock>
            </StyledMainSidebar>
          </StyledMain>
          <StyledPlayer>
            <StyledPlayerContent>
              <StyledPlayerProgress />
              <StyledPlayerBlock>
                <StyledPlayerBtns>
                  <PlayerControls></PlayerControls>
                  <PlayerTrack></PlayerTrack>
                </StyledPlayerBtns>
                <Volume></Volume>
              </StyledPlayerBlock>
            </StyledPlayerContent>
          </StyledPlayer>
        </SkeletonTheme>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default App
