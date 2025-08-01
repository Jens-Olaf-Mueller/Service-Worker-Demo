import { APP } from './constants.js';

APP.init();

/**
 * Common variant to install a service worker.
 */
// window.addEventListener('load', async () => {    
//     if (navigator.serviceWorker) { // alternative syntax: if ('serviceWorker' in navigator)...
//         try {
//             const reg = await navigator.serviceWorker
//                 .register('../sw_demo-serviceworker.js', {
//                     scope: '/',
//                     type: 'module'
//                 });
//             console.log(`Service worker for ${APP.name} successful registered for scope:`, reg.scope)
//         } catch(error) {
//             console.warn('Service worker registration failed: ', error)
//         }
//     }
// });

/**
 * New variant with async - await to install a service worker.
 * NOTE: if the project does not contain modules,
 * the type parameter must be deleted or set to "classic"!
 */
window.addEventListener('load', registerServiceWorker('../sw_demo-serviceworker.js'));

async function registerServiceWorker(scriptURL, options = {scope: '/', type: 'module'}) {
    if (navigator.serviceWorker) { // alternative syntax: if ('serviceWorker' in navigator)...
        try {
            const reg = await navigator.serviceWorker.register(scriptURL, options);
            console.info(`Service worker [${APP.name}] successful registered for scope:`, reg.scope)
        } catch (error) {
            console.warn(error);
        }
    } else {
        throw new Error('Service worker not supported!');
    }
}