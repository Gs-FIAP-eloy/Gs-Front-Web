import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Feed from "./routes/Feed"
import Profile from "./routes/Profile"
import Header from "./components/Header"
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
