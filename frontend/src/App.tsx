import { Route, Routes, useNavigate } from "react-router-dom"

import { LoginPage } from "./pages/login"
import { RegisterPage } from "./pages/register"
import { VerifyEmail } from "./pages/verifyEmail"
import { PasswordForgotPage } from "./pages/passwordForgot"
import { PasswordResetPage } from "./pages/passwordReset"
import { ProfilePage } from "./pages/profile"
import { SessionsPage } from "./pages/sessions"

import { AppContainer } from "./components/appContainer"
import { setNavigate } from "./lib/navigate"


function App() {
	const navigate = useNavigate()
	setNavigate(navigate)

	return <Routes>
		<Route path="/" element={<AppContainer />}>
			<Route index element={<ProfilePage />}/>
			<Route path="sessions" element={<SessionsPage />}/>
		</Route>
		
		<Route path="/login" element={<LoginPage />}/>
		<Route path="/register" element={<RegisterPage />}/>
		<Route path="/email/verify/:code" element={<VerifyEmail />}/>
		<Route path="/password/forgot" element={<PasswordForgotPage />}/>
		<Route path="/password/reset" element={<PasswordResetPage />}/>
	</Routes>
}


export default App
