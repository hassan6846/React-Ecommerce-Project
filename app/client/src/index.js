import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//css
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';

//imports 
import App from './App';

import { store, persistor } from './store/Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51NIDjMKxIUjmCPdCkuccRvfJCOR0Wl7VcFMfc4CMfy2I1K0eXKe0UEUm6doBSnkdOfK3JPjGdccVrx6kiuNu77vc00xifmoTSq');

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Elements stripe={stripePromise}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </Elements>
);
reportWebVitals();
