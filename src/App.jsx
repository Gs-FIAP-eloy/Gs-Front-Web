import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Feed from "./routes/Feed"
import Profile from "./routes/Profile"
import Header from "./components/Header"
import Icon from "./components/Icon"
import Error from "./routes/Error"
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Icon />
    </BrowserRouter>

  )
}

export default App
