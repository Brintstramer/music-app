import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  StyledPlaylistItem,
  StyledTracks,
  StyledTracksAlbum,
  StyledTracksAlbumLink,
  StyledTracksAuthor,
  StyledTracksAuthorLink,
  StyledTracksHeartSvg,
  StyledTracksTimeText,
  StyledTracksTitle,
  StyledTracksTitleImg,
  StyledTracksTitleLink,
  StyledTracksTitleSpan,
  StyledTracksTitleSvg,
} from '../styles/styles'
import { TrackSkeleton } from './skeleton'

export let tracks = []

export function Tracks() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://painassasin.online/catalog/track/all/')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  if (data) {
    tracks = [...data]
  }

  return (
    <StyledPlaylistItem>
      {isLoading && <TrackSkeleton tracks={8} />}
      {tracks.map((track) => (
        <StyledTracks key={track.id}>
          <StyledTracksTitle>
            <StyledTracksTitleImg>
              <StyledTracksTitleSvg alt="note">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </StyledTracksTitleSvg>
            </StyledTracksTitleImg>
            <StyledTracksTitleLink href="http://">
              {track.name} <StyledTracksTitleSpan />
            </StyledTracksTitleLink>
          </StyledTracksTitle>
          <StyledTracksAuthor>
            <StyledTracksAuthorLink href="http://">
              {track.author}
            </StyledTracksAuthorLink>
          </StyledTracksAuthor>
          <StyledTracksAlbum>
            <StyledTracksAlbumLink href="http://">
              {track.album}
            </StyledTracksAlbumLink>
          </StyledTracksAlbum>
          <StyledTracksHeartSvg alt="heart">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </StyledTracksHeartSvg>
          <StyledTracksTimeText>{`${Math.floor(
            track.duration_in_seconds / 60
          )}:${
            track.duration_in_seconds % 60 < 10
              ? `0${track.duration_in_seconds % 60}`
              : track.duration_in_seconds % 60
          }`}</StyledTracksTimeText>
        </StyledTracks>
      ))}
    </StyledPlaylistItem>
  )
}
