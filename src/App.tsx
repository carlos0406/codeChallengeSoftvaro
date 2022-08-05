
import { AuthContextProvider } from './contexts/Auth';
import LandingPage from './pages/LandingPage';


function App() {
	return (
		<AuthContextProvider>
			<LandingPage />
		</AuthContextProvider>
	);
}

export default App;
