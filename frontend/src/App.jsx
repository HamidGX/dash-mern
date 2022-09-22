import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'

import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import NuevoPassword from './pages/NuevoPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'

import EmailsMasivos from './pages/EmailsMasivos'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AuthLayout />}>
					<Route index element={<Login />} />
					<Route path='registrar' element={<Registrar />} />
					<Route path='olvide-password' element={<OlvidePassword />} />
					<Route path='olvide-password/:token' element={<NuevoPassword />} />
					<Route path='confirmar/:id' element={<ConfirmarCuenta />} />

					<Route path='emails' element={<EmailsMasivos />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
