import './css/style.css'
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

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <main className="main">
            <nav className="main__nav nav">
              <Logo></Logo>
              <Burger></Burger>
            </nav>
            <div className="main__centerblock centerblock">
              <Search></Search>
              <h2 className="centerblock__h2">Треки</h2>
              <Filter></Filter>
              <div className="centerblock__content">
                <div className="content__playlist playlist">
                  <PlaylistTitleCol></PlaylistTitleCol>
                  <Tracks></Tracks>
                </div>
              </div>
            </div>
            <div className="main__sidebar sidebar">
              <SidebarPersonal></SidebarPersonal>
              <div className="sidebar__block">
                <div className="sidebar__list">
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
                </div>
              </div>
            </div>
          </main>
          <div className="bar">
            <div className="bar__content">
              <div className="bar__player-progress"></div>
              <div className="bar__player-block">
                <div className="bar__player player">
                  <PlayerControls></PlayerControls>

                  <PlayerTrack></PlayerTrack>
                </div>
                <Volume></Volume>
              </div>
            </div>
          </div>
          <footer className="footer"></footer>
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default App
