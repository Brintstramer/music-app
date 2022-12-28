import './css/style.css'
import {
  Burger,
  NavMenu,
  Filter,
  Search,
  Track,
  Logo,
  PlaylistTitleCol,
  Selection,
  SidebarPersonal,
  PlayerControls,
  PlayerTrack,
  Volume,
} from './components'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <Logo></Logo>
            <Burger></Burger>
            <NavMenu></NavMenu>
          </nav>
          <div className="main__centerblock centerblock">
            <Search></Search>
            <h2 className="centerblock__h2">Треки</h2>
            <Filter></Filter>
            <div className="centerblock__content">
              <div className="content__playlist playlist">
                <PlaylistTitleCol></PlaylistTitleCol>
                <Track
                  title="Guilt"
                  author="Nero"
                  album="Welcome Reality"
                  time="4:44"
                ></Track>

                <Track
                  title="Elektro"
                  author="Dynoro, Outwork, Mr. Gee"
                  album="Elektro"
                  time="2:22"
                ></Track>

                <Track
                  title="I’m Fire"
                  author="Ali Bakgor"
                  album="I’m Fire"
                  time="2:22"
                ></Track>

                <Track
                  title="Non Stop(Remix)"
                  author="Стоункат, Psychopath"
                  album="Non Stop"
                  time="4:12"
                ></Track>

                <Track
                  title="Run Run(feat. AR/CO)"
                  author="Jaded, Will Clarke, AR/CO"
                  album="Run Run"
                  time="2:54"
                ></Track>

                <Track
                  title="Eyes on Fire(Zeds Dead Remix)"
                  author="Blue Foundation, Zeds Dead"
                  album="Eyes on Fire"
                  time="5:20"
                ></Track>

                <Track
                  title="Mucho Bien(Hi Profile Remix)"
                  author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                  album="Mucho Bien"
                  time="3:41"
                ></Track>

                <Track
                  title="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  time="1:48"
                ></Track>

                <Track
                  title="How Deep Is Your Love"
                  author="Calvin Harris, Disciples"
                  album="How Deep Is Your Love"
                  time="3:32"
                ></Track>

                <Track
                  title="Morena"
                  author="Tom Boxer"
                  album="Soundz Made in Romania"
                  time="3:36"
                ></Track>
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
      </div>
    </div>
  )
}

export default App
