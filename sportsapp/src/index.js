import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './store/state-context';
import userReducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={userReducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
);