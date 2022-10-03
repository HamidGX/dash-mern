import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import NuevoPassword from './pages/NuevoPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import Inicio from './pages/Inicio'

import { AuthProvider } from './context/AuthProvider'

{
	/* Imports de pruebas */
}
import Cliente from './components/Cliente'
import EmailsMasivos from './pages/EmailsMasivos'
import EnviarCorreos from './pages/EnviarCorreos'

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<AuthLayout />}>
						<Route index element={<Login />} />
						<Route path='registrar' element={<Registrar />} />
						<Route path='olvide-password' element={<OlvidePassword />} />
						<Route path='olvide-password/:token' element={<NuevoPassword />} />
						<Route path='confirmar/:id' element={<ConfirmarCuenta />} />

						<Route path='emails' element={<EnviarCorreos />} />
						<Route path='emailm' element={<EmailsMasivos />} />
						<Route path='cliente' element={<Cliente />} />
					</Route>

					<Route path='/inicio' element={<RutaProtegida />}>
						<Route index element={<Inicio />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
