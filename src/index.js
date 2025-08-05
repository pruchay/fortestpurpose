import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { getConfig } from "./config";

const onRedirectCallback = (appState) => {
  console.log('onRedirectCallback appState', appState)
  console.log('onRedirectCallback appState?.returnTo', appState?.returnTo)
  if (appState && appState.returnTo) {
    window.location.href = appState.returnTo
  } else {
    history.push('/')
  }
  // history.push(
  //   appState && appState.returnTo ? appState.returnTo : window.location.pathname
  // );
  // history.push('/')
  // window.history.replaceState({}, document.title, appState?.returnTo || '/');
};

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  cacheLocation: 'localstorage',
  authorizationParams: {
    // redirect_uri: `${window.location.origin}`,
    redirect_uri: `${window.location.origin}/callback`,
    ...(config.audience ? { audience: config.audience } : null),
  },
};


const handleAuthRedirect = () => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (url.pathname === '/callback' && code && state) {
        // save to sessionStorage
        sessionStorage.setItem('auth_code', code);
        sessionStorage.setItem('auth_state', state);

        const sendMessageToComponent = () => {
            const surveyComponent = document.querySelector('pg-embedded-survey');

            if (surveyComponent) {
                console.log('📤 Відправляємо postMessage у Web Component', {
                    type: 'WEB_COMPONENT_AUTH',
                    payload: { code, state },
                });

                window.postMessage(
                    {
                        type: 'WEB_COMPONENT_AUTH',
                        payload: { code, state },
                    },
                    '*'
                );

                // Після надсилання чистимо URL
                window.history.replaceState({}, document.title, '/');
            } else {
                console.log('⌛ Очікуємо завантаження Web Component...');
                setTimeout(sendMessageToComponent, 500); // Повторна перевірка через 500мс
            }
        };

        sendMessageToComponent();
    }
};

handleAuthRedirect();

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    {...providerConfig}
  >
    <App />
  </Auth0Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
