import React, { useState } from 'react'
import { tracks } from './tracks'

let authors = []
let genres = []

export function Filter() {
  const trackAuthors = tracks.map((track) => track.author)
  const trackGenres = tracks.map((track) => track.genre)

  authors = trackAuthors.filter(
    (item, index) => trackAuthors.indexOf(item) === index && item !== '-'
  )
  genres = trackGenres.filter(
    (item, index) => trackGenres.indexOf(item) === index && item !== '-'
  )

  const [visibleAuthor, setVisibleAuthor] = useState(true)
  const [visibleGenre, setVisibleGenre] = useState(true)
  const [visibleYear, setVisibleYear] = useState(true)

  const [filterBtnStyle, setFilterBtnStyle] = useState(false)

  function showFilterDropdownAuthor() {
    if (!visibleGenre) {
      setVisibleGenre(!visibleGenre)
    }
    if (!visibleYear) {
      setVisibleYear(!visibleYear)
    }

    setFilterBtnStyle(!filterBtnStyle)

    return setVisibleAuthor(!visibleAuthor)
  }

  function showFilterDropdownYear() {
    if (!visibleAuthor) {
      setVisibleAuthor(!visibleAuthor)
    }
    if (!visibleGenre) {
      setVisibleGenre(!visibleGenre)
    }

    return setVisibleYear(!visibleYear)
  }

  function showFilterDropdownGenre() {
    if (!visibleAuthor) {
      setVisibleAuthor(!visibleAuthor)
    }
    if (!visibleYear) {
      setVisibleYear(!visibleYear)
    }

    return setVisibleGenre(!visibleGenre)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className={`filter__button button-author _btn-text ${
          !visibleAuthor ? 'filter__button_active' : ''
        }`}
        onClick={showFilterDropdownAuthor}
      >
        исполнителю
      </div>
      {!visibleAuthor && <FilterDropdownAuthor />}
      <div
        className={`filter__button button-year _btn-text ${
          !visibleYear ? 'filter__button_active' : ''
        }`}
        onClick={showFilterDropdownYear}
      >
        году выпуска
      </div>
      {!visibleYear && <FilterDropdownYear />}
      <div
        className={`filter__button button-genre _btn-text ${
          !visibleGenre ? 'filter__button_active' : ''
        }`}
        onClick={showFilterDropdownGenre}
      >
        жанру
      </div>
      {!visibleGenre && <FilterDropdownGenre />}
    </div>
  )
}

export function FilterDropdownAuthor() {
  return (
    <div className="filter__dropdown" style={{ top: '290px', left: '445px' }}>
      <div className="filter__dropdown-list">
        {authors.map((author, index) => (
          <div className="filter__dropdown-list-item _btn-text" key={index}>
            {author}
          </div>
        ))}
      </div>
    </div>
  )
}

export function FilterDropdownYear() {
  return (
    <div className="filter__year" style={{ top: '290px', left: '595px' }}>
      <input id="1" type="radio" name="year" />
      <label htmlFor="1">Более новые</label>
      <input id="2" type="radio" name="year" />
      <label htmlFor="2">Более старые</label>
    </div>
  )
}

export function FilterDropdownGenre() {
  return (
    <div className="filter__dropdown" style={{ top: '290px', left: '743px' }}>
      <div className="filter__dropdown-list">
        {genres.map((genre, index) => (
          <div className="filter__dropdown-list-item _btn-text  " key={index}>
            {genre}
          </div>
        ))}
      </div>
    </div>
  )
}
