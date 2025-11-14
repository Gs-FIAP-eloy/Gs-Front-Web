import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ChangeIcon from './hook/ChangeIcon'
import ChangeTitle from './hook/ChangeTitle'
import Header from "./components/Header"
import Icon from "./components/Icon"

import Welcome from "./routes/Welcome"
import Error from "./routes/Error"
import Feed from "./routes/Feed"
import Chat from "./routes/Chat"
import Publish from "./routes/Publish"
import Notifications from "./routes/Notifications"
import Profile from "./routes/Profile"
import Footer from "./components/Footer"
import Devs from "./routes/Devs"
function App() {

  ChangeIcon();

  return (
    <BrowserRouter>
      <Header />
      <ChangeTitle />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/developers" element={<Devs />} />
      </Routes>
      <Icon />
      <Footer />
    </BrowserRouter>

  )
}

export default App
