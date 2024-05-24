
import "./Styles.css";
import Header from "./Header";
import Home from "./Home";
import JobListings from "./JobListings";
import SearchJobs from "./SearchJobs";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Terms from "./Terms";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Addjob from "./Addjob";

function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/JobListings" element={<JobListings/>}></Route>
      <Route path="/SearchJobs" element={<SearchJobs/>}></Route>
      <Route path="/Privacy" element={<Privacy/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Terms" element={<Terms/>}></Route>
      <Route path="/Addjob" element={<Addjob/>}></Route>
    </Routes>

      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;
