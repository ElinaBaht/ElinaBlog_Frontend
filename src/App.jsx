import Container from "@mui/material/Container";
import Header from "./components/Header";
import Home from "./pages/Home";



function App() {
  return (
    <div className="App">
      <Header/>
      <Container maxWidth="lg">
        <Home/>

      </Container>
     
    </div>
  );
}

export default App;
