import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import queryClient from "./queryClient";

import NavBar from "./components/Navbar/Navbar";
import Map from "./components/Map/Map.jsx";

// import { createGlobalStyle } from "styled-components";
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <div >
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Map />
       </QueryClientProvider>
    </div>
  );
}

export default App;
