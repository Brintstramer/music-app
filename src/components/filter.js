import React, { useState } from 'react'
import {
  StyledFilter,
  StyledFilterTitle,
  StyledFilterButton,
  StyledDropdown,
  StyledDropdownList,
  StyledDropdownItem,
  StyledDropdownYear,
} from '../styles/styles'
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

  function showFilterDropdownAuthor() {
    if (!visibleGenre) {
      setVisibleGenre(!visibleGenre)
    }
    if (!visibleYear) {
      setVisibleYear(!visibleYear)
    }

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
    <StyledFilter>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>
      <StyledFilterButton
        styledBtn={visibleAuthor}
        onClick={showFilterDropdownAuthor}
      >
        исполнителю
      </StyledFilterButton>
      {!visibleAuthor && <FilterDropdownAuthor />}
      <StyledFilterButton
        styledBtn={visibleYear}
        onClick={showFilterDropdownYear}
      >
        году выпуска
      </StyledFilterButton>
      {!visibleYear && <FilterDropdownYear />}
      <StyledFilterButton
        styledBtn={visibleGenre}
        onClick={showFilterDropdownGenre}
      >
        жанру
      </StyledFilterButton>
      {!visibleGenre && <FilterDropdownGenre />}
    </StyledFilter>
  )
}

export function FilterDropdownAuthor() {
  return (
    <StyledDropdown style={{ top: '275px', left: '445px' }}>
      <StyledDropdownList>
        {authors.map((author, index) => (
          <StyledDropdownItem key={index}>{author}</StyledDropdownItem>
        ))}
      </StyledDropdownList>
    </StyledDropdown>
  )
}

export function FilterDropdownYear() {
  return (
    <StyledDropdownYear style={{ top: '275px', left: '595px' }}>
      <input id="1" type="radio" name="year" />
      <label htmlFor="1">Более новые</label>
      <input id="2" type="radio" name="year" />
      <label htmlFor="2">Более старые</label>
    </StyledDropdownYear>
  )
}

export function FilterDropdownGenre() {
  return (
    <StyledDropdown style={{ top: '275px', left: '743px' }}>
      <StyledDropdownList>
        {genres.map((genre, index) => (
          <StyledDropdownItem key={index}>{genre}</StyledDropdownItem>
        ))}
      </StyledDropdownList>
    </StyledDropdown>
  )
}
