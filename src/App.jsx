import Container from "@mui/material/Container";
import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import AddPost from "./pages/AddPost";
import FullPost from "./pages/FullPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Registration } from "./pages/Registration";



function App() {
  return (
    <div className="App">
      <Header/>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/posts/:id" element={<FullPost/>} />
          <Route path="/add-post" element={<AddPost/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
