import { Routes, Route } from 'react-router-dom';
import Login from './Pages/LogIn/Login';
import { Home } from './Pages/Home/index';
import Register from './Pages/Register/Register';

import { ThemeProvider } from '@mui/material/styles';
import theme from '././temaConfig';

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path='*' element={<Home />} />
					<Route path='/' element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
