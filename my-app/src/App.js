import React from "react";
import "./App.css";

/* IMPORTA BOOSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";

/* IMPORTA PAGINA */
import Discover from "./pages/Discover";

/*IMPORTA COMPONENT */
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";

const App = () => {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className="px-6 h-[calc(100vh-72px) ] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <Discover />
        </div>
        <PlayerBar />
      </div>
    </div>
  );
};
export default App;
