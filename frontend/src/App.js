import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ShowDetails from "./Components/ShowDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-details/:id" element={<ShowDetails />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
