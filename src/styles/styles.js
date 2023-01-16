import styled, { css } from 'styled-components'

const btnHoverActive = css`
  :hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  :active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`
const btnIconHoverActive = css`
  :hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }

  :active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
const playerBtns = css`
  padding: 5px;
  display: flex;
  align-items: center;
`
export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`

export const StyledContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

export const StyledMain = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const StyledMainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`

export const StyledMainCenterblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const StyledMainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`
export const StyledLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`
export const StyledLogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`
export const StyledBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`
export const StyledBurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`
export const StyledMenu = styled.div`
  display: block;
  visibility: visible;
`
export const StyledMenuList = styled.ul`
  padding: 18px 0 10px 0;
`
export const StyledMenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`
export const StyledMenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const StyledSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 41px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const StyledSearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`
export const StyledSearchInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  ::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
export const StyledHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 35px;
`
export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 52px;
`
export const StyledFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`
export const StyledFilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  color: ${(props) => (!props.styledBtn ? '#ad61ff' : '')};
  border-color: ${(props) => (!props.styledBtn ? '#ad61ff' : '')};
  cursor: pointer;

  ${btnHoverActive};

  :not(:last-child) {
    margin-right: 10px;
  }
`
export const StyledDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px;
  gap: 10px;
  width: 248px;
  height: 305px;
  background: #313131;
  border-radius: 12px;
`
export const StyledDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
    background-color: gray;
  }

  ::-webkit-scrollbar-track {
    background: #4b4949;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff;
  }
`
export const StyledDropdownItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;

  ${btnHoverActive};
`
export const StyledDropdownYear = styled.div`
  position: absolute;
  padding: 34px;
  display: flex;
  align-items: center;
  gap: 14px;
  width: 403px;
  height: 92px;
  background: #313131;
  border-radius: 12px;

  input {
    appearance: none;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;

    :checked {
      position: relative;

      ::before {
        content: '';
        position: absolute;
        left: 2px;
        top: 2px;
        background: #fff;
        width: 11px;
        height: 11px;
        border-radius: 50%;
      }
    }
  }

  label {
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #ffffff;
    cursor: pointer;
  }
`
export const StyledContent = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: column;
`
export const StyledPlaylist = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledPlaylistItem = styled.div`
  width: 100%;
  max-height: 495px;
  padding-right: 12px;
  display: block;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: gray;
  }

  &::-webkit-scrollbar-track {
    background: #4b4949;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff;
  }
`
export const StyledPlaylistTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-right: 15px;
`
export const StyledPlaylistCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const StyledPlaylistSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const StyledTracksSkeleton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const StyledTracks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const StyledTracksTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`
export const StyledTracksTitleImg = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`
export const StyledTracksTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const StyledTracksTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const StyledTracksTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const StyledTracksAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`
export const StyledTracksAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const StyledTracksAlbum = styled.div`
  width: 245px;
`
export const StyledTracksAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const StyledTracksHeartSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const StyledTracksTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
export const StyledSidebarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`
export const StyledSidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`
export const StyledSidebarPersonalAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`
export const StyledSidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const StyledSidebarBlockList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledSelectionItem = styled.div`
  width: 250px;
  height: 150px;

  :not(:last-child) {
    margin-bottom: 30px;
  }
`
export const StyledSelectionLink = styled.a`
  width: 100%;
  height: 100%;
`
export const StyledSelectionImg = styled.img`
  width: 100%;
  height: auto;
`
export const StyledPlayer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const StyledPlayerContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`
export const StyledPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const StyledPlayerBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const StyledPlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const StyledPlayerPrev = styled.div`
  ${playerBtns};

  margin-right: 23px;
`
export const StyledPlayerPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`
export const StyledPlayerPlay = styled.div`
  ${playerBtns};
  margin-right: 23px;
`
export const StyledPlayerPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
export const StyledPlayerNext = styled.div`
  ${playerBtns};
  margin-right: 28px;
  fill: #a53939;
`
export const StyledPlayerNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const StyledPlayerRepeat = styled.div`
  ${playerBtns};
  ${btnIconHoverActive};
  margin-right: 24px;
`
export const StyledPlayerRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const StyledPlayerShuffle = styled.div`
  ${playerBtns};
  ${btnIconHoverActive};
  display: flex;
  align-items: center;
`
export const StyledPlayerShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const StyledPlayerTrack = styled.div`
  display: flex;
  flex-direction: row;
`
export const StyledPlayerTrackContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image title' 'image author';
  align-items: center;
`
export const StyledPlayerTrackImg = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`
export const StyledPlayerTrackSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
`
export const StyledPlayerTrackTitle = styled.div`
  grid-area: title;
  min-width: 49px;
`
export const StyledPlayerTrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const StyledPlayerTrackAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
`
export const StyledPlayerTrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const StyledPlayerLikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`
export const StyledPlayerLike = styled.div`
  padding: 5px;

  ${btnIconHoverActive}

  :active svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const StyledPlayerLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const StyledPlayerDislike = styled.div`
  padding: 5px;
  margin-left: 28.5px;

  ${btnIconHoverActive}

  :active svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const StyledPlayerDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`
export const StyledVolume = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`
export const StyledVolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
export const StyledVolumeImg = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const StyledVolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const StyledVolumeProgress = styled.div`
  width: 109px;
  ${btnHoverActive}
`
export const StyledVolumeProgressLine = styled.input`
  width: 109px;
  ${btnHoverActive}
`
