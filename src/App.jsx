import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ChangeIcon from './hook/ChangeIcon'
import Header from "./components/Header"
import Icon from "./components/Icon"

import Error from "./routes/Error"
import Feed from "./routes/Feed"
import Chat from "./routes/Chat"
import Publish from "./routes/Publish"
import Notifications from "./routes/Notifications"
import Profile from "./routes/Profile"
function App() {

  ChangeIcon();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Icon />
    </BrowserRouter>

  )
}

export default App
