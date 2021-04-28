import '../styles/global.scss';
import styles from '../styles/app.module.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext, PlayerContextProvider } from '../contexts/PlayerContext';
import { useContext } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />

          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;