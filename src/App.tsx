import './index.css';
import { ThemeProvider } from 'styled-components';
import { PopcornTheme } from './theme';
import Routers from './routes';

function App() {
	return (
		<ThemeProvider theme={PopcornTheme}>
			<Routers />
		</ThemeProvider>
	);
}

export default App;
