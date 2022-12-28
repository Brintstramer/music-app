export function Logo() {
  return (
    <div className="nav__logo logo">
      <img className="logo__image" src="img/logo.png" alt="logo" />
    </div>
  )
}

export function Burger() {
  return (
    <div className="nav__burger burger">
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  )
}

export function NavMenu() {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Главное
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Мой плейлист
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Войти
          </a>
        </li>
      </ul>
    </div>
  )
}

export function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  )
}

export function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}

export function PlaylistTitleCol() {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  )
}

export function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.title} <span className="track__title-span"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export function SidebarPersonal() {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__avatar"></div>
    </div>
  )
}

export function Selection(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={props.src} alt={props.alt} />
      </a>
    </div>
  )
}

export function PlayerControls() {
  return (
    <div className="player__controls">
      <div className="player__btn-prev">
        <svg className="player__btn-prev-svg" alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </div>
      <div className="player__btn-play _btn">
        <svg className="player__btn-play-svg" alt="play">
          <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
        </svg>
      </div>
      <div className="player__btn-next">
        <svg className="player__btn-next-svg" alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  )
}

export function PlayerTrack() {
  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          <svg className="track-play__svg" alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className="track-play__author">
          <a className="track-play__author-link" href="http://">
            Ты та...
          </a>
        </div>
        <div className="track-play__album">
          <a className="track-play__album-link" href="http://">
            Баста
          </a>
        </div>
      </div>

      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </div>
  )
}

export function Volume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}