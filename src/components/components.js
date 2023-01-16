import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  StyledBurger,
  StyledBurgerLine,
  StyledLogo,
  StyledLogoImage,
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
  StyledMenuList,
  StyledPlayerControls,
  StyledPlayerDislike,
  StyledPlayerDislikeSvg,
  StyledPlayerLike,
  StyledPlayerLikeDislike,
  StyledPlayerLikeSvg,
  StyledPlayerNext,
  StyledPlayerNextSvg,
  StyledPlayerPlay,
  StyledPlayerPlaySvg,
  StyledPlayerPrev,
  StyledPlayerPrevSvg,
  StyledPlayerRepeat,
  StyledPlayerRepeatSvg,
  StyledPlayerShuffle,
  StyledPlayerShuffleSvg,
  StyledPlayerTrack,
  StyledPlayerTrackAuthor,
  StyledPlayerTrackAuthorLink,
  StyledPlayerTrackContain,
  StyledPlayerTrackImg,
  StyledPlayerTrackSvg,
  StyledPlayerTrackTitle,
  StyledPlayerTrackTitleLink,
  StyledPlaylistCol,
  StyledPlaylistSvg,
  StyledPlaylistTitle,
  StyledSearch,
  StyledSearchInput,
  StyledSearchSvg,
  StyledSelectionImg,
  StyledSelectionItem,
  StyledSelectionLink,
  StyledSidebarPersonal,
  StyledSidebarPersonalAvatar,
  StyledSidebarPersonalName,
  StyledVolume,
  StyledVolumeContent,
  StyledVolumeImg,
  StyledVolumeProgress,
  StyledVolumeProgressLine,
  StyledVolumeSvg,
} from '../styles/styles'

export function Logo() {
  return (
    <StyledLogo>
      <StyledLogoImage src="img/logo.png" alt="logo" />
    </StyledLogo>
  )
}

export function Burger() {
  const [visible, setVisible] = useState(true)

  function showNavMenu() {
    setVisible(!visible)
  }

  return (
    <div>
      <StyledBurger onClick={showNavMenu}>
        <StyledBurgerLine />
        <StyledBurgerLine />
        <StyledBurgerLine />
      </StyledBurger>
      {!visible && <NavMenu />}
    </div>
  )
}

export function NavMenu() {
  return (
    <StyledMenu>
      <StyledMenuList>
        <StyledMenuItem>
          <StyledMenuLink href="http://">Главное</StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="http://">Мой плейлист</StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="http://">Войти</StyledMenuLink>
        </StyledMenuItem>
      </StyledMenuList>
    </StyledMenu>
  )
}

export function Search() {
  return (
    <StyledSearch>
      <StyledSearchSvg alt="search">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </StyledSearchSvg>
      <StyledSearchInput type="search" placeholder="Поиск" name="search" />
    </StyledSearch>
  )
}

export function PlaylistTitleCol() {
  return (
    <StyledPlaylistTitle>
      <StyledPlaylistCol style={{ width: '447px' }}>трек</StyledPlaylistCol>
      <StyledPlaylistCol style={{ width: '321px' }}>
        исполнитель
      </StyledPlaylistCol>
      <StyledPlaylistCol style={{ width: '245px' }}>альбом</StyledPlaylistCol>
      <StyledPlaylistCol style={{ width: '60px', textAlign: 'end' }}>
        <StyledPlaylistSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </StyledPlaylistSvg>
      </StyledPlaylistCol>
    </StyledPlaylistTitle>
  )
}

export function SidebarPersonal() {
  return (
    <StyledSidebarPersonal>
      <StyledSidebarPersonalName>Sergey.Ivanov</StyledSidebarPersonalName>
      <StyledSidebarPersonalAvatar />
    </StyledSidebarPersonal>
  )
}

export function Selection(props) {
  return (
    <StyledSelectionItem>
      <StyledSelectionLink href="#">
        <StyledSelectionImg src={props.src} alt={props.alt} />
      </StyledSelectionLink>
    </StyledSelectionItem>
  )
}

export function PlayerControls() {
  return (
    <StyledPlayerControls>
      <StyledPlayerPrev>
        <StyledPlayerPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </StyledPlayerPrevSvg>
      </StyledPlayerPrev>
      <StyledPlayerPlay>
        <StyledPlayerPlaySvg alt="play">
          <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
        </StyledPlayerPlaySvg>
      </StyledPlayerPlay>
      <StyledPlayerNext>
        <StyledPlayerNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </StyledPlayerNextSvg>
      </StyledPlayerNext>
      <StyledPlayerRepeat>
        <StyledPlayerRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </StyledPlayerRepeatSvg>
      </StyledPlayerRepeat>
      <StyledPlayerShuffle>
        <StyledPlayerShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </StyledPlayerShuffleSvg>
      </StyledPlayerShuffle>
    </StyledPlayerControls>
  )
}

export function PlayerTrack() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://painassasin.online/catalog/track/8')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  if (data) {
    return (
      <StyledPlayerTrack>
        <StyledPlayerTrackContain>
          <StyledPlayerTrackImg>
            <StyledPlayerTrackSvg alt="note">
              {<use xlinkHref="img/icon/sprite.svg#icon-note"></use> || (
                <Skeleton />
              )}
            </StyledPlayerTrackSvg>
          </StyledPlayerTrackImg>
          <StyledPlayerTrackTitle>
            <StyledPlayerTrackTitleLink href="http://">
              {data.name || <Skeleton />}
            </StyledPlayerTrackTitleLink>
          </StyledPlayerTrackTitle>
          <StyledPlayerTrackAuthor>
            <StyledPlayerTrackAuthorLink href="http://">
              {data.author || <Skeleton />}
            </StyledPlayerTrackAuthorLink>
          </StyledPlayerTrackAuthor>
        </StyledPlayerTrackContain>

        <StyledPlayerLikeDislike>
          <StyledPlayerLike>
            <StyledPlayerLikeSvg alt="like">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </StyledPlayerLikeSvg>
          </StyledPlayerLike>
          <StyledPlayerDislike>
            <StyledPlayerDislikeSvg alt="dislike">
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            </StyledPlayerDislikeSvg>
          </StyledPlayerDislike>
        </StyledPlayerLikeDislike>
      </StyledPlayerTrack>
    )
  }
}

export function Volume() {
  return (
    <StyledVolume>
      <StyledVolumeContent>
        <StyledVolumeImg>
          <StyledVolumeSvg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </StyledVolumeSvg>
        </StyledVolumeImg>
        <StyledVolumeProgress>
          <StyledVolumeProgressLine type="range" name="range" />
        </StyledVolumeProgress>
      </StyledVolumeContent>
    </StyledVolume>
  )
}
