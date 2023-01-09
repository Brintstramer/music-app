import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
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
  console.log(tracks)

  return (
    <div className="playlist__item">
      {isLoading && <TrackSkeleton tracks={8} />}
      {tracks.map((track) => (
        <div className="playlist__track track" key={track.id}>
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {track.name} <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {track.author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {track.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">
              {`${Math.floor(track.duration_in_seconds / 60)}:${
                track.duration_in_seconds % 60 < 10
                  ? `0${track.duration_in_seconds % 60}`
                  : track.duration_in_seconds % 60
              }`}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
