import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const CallbackHandler = () => {
    console.log('🟢 CallbackHandler змонтовано');
    const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
    const history = useHistory();

    useEffect(() => {
        const handleAuth = async () => {
            // try {
                console.log('🚀 Init handleAuth...');

                console.log('window location', window.location.href)

                history.push('/');

            //     if (isAuthenticated) {
            //         console.log('✅ Користувач автентифікований');
            //
            //         const token = await getAccessTokenSilently();
            //         console.log('🎉 Отримано токен від Auth0:', token);
            //
            //         // ✅ Лог перед надсиланням
            //         console.log('📤 Відправляємо postMessage у Web Component', {
            //             type: 'WEB_COMPONENT_AUTH',
            //             payload: {
            //                 id_token: token,
            //                 user,
            //             },
            //         });
            //
            //         // ✅ Відправляємо токени у Web Component через postMessage
            //         window.postMessage(
            //             {
            //                 type: 'WEB_COMPONENT_AUTH',
            //                 payload: {
            //                     id_token: token,
            //                     user,
            //                 },
            //             },
            //             '*'
            //         );
            //
            //         console.log('✅ postMessage надіслано');
            //
            //         // ✅ Перенаправляємо користувача
            //         history.push('/');
            //     } else {
            //         console.log('⚠️ Користувач ще не автентифікований');
            //     }
            // } catch (err) {
            //     console.error('❌ Помилка отримання токена:', err);
            //     history.push('/');
            // }
        };

        handleAuth();
    }, [getAccessTokenSilently, isAuthenticated, user, history]);

    return <div>Authorisation... Please wait</div>;
};

export default CallbackHandler;