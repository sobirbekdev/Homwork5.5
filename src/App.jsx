import { useEffect, useState } from "react";
import { List } from "./Components/List";
import axios from "axios";
import { Profil } from "./Components/Profil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFount } from "./Components/NotFount";

function App() {

  let [userData, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(json => setData(json.data.data));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<List userData={userData} />} />
          <Route path="/user/:userId" element={<Profil userData={userData} />} />
          <Route path="*" element={<NotFount />} />
          
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
