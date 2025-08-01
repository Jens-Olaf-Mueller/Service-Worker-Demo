/**
 * Defining a global APP-object, holding vary information about the application.
 */
export const APP = {
    title: 'SW Demo',
    major: 0,      // significant code changes or breaking downward compability
    minor: 0,      // new features or functionality
    revision: 15,  // patches or bugfixes
    get version() { return `${this.major}.${this.minor}.${this.revision}`; },
    get name() { return `${this.title} V${this.version}`; },
    get cacheName() { return `${this.title}_cache_${this.version}`; },
    defaultSettings: {
        theme: 0,
        // can be used i.e. to set an attribute to the HTML-tag: [data-theme="dark"]
        // in order to switch dark and light mode via CSS variables.
        themes: ['dark', 'light'],
        get currentTheme() { return this.themes[this.theme]; }
        // more settings here...
    },
    get allowPushNotifications() {
        return Notification.permission === 'granted';
    },
    init: function() {
        const html = document.getElementsByTagName('html')[0];
        html.setAttribute('data-theme', this.defaultSettings.currentTheme);
    }
}