import './index.css';
import { ThemeProvider } from 'styled-components';
import { PopcornTheme } from './theme';
import { GoogleAPIProvider } from './hooks/useAPI';
import { Home } from './containers/Home/Home';

function App() {
	return (
		<GoogleAPIProvider>
			<ThemeProvider theme={PopcornTheme}>
				<Home />
			</ThemeProvider>
		</GoogleAPIProvider>
	);
}

export default App;
