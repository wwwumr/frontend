import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store';
import App from './component/App';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={null}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
