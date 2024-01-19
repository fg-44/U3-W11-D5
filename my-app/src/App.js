/* IMPORTA PAGINE */
import Discover from "./assets/pages/Discover";

/*IMPORTA COMPONENTI */

import Sidebar from "./assets/component/Sidebar";
import SongBar from "./assets/component/SongBar";

/* IMPORTA BOOSTRAP */

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  return (
    <div>
      <Sidebar />

      <div>
        <Discover />
        <SongBar/>
      </div>
    </div>
  );
};

export default App;
