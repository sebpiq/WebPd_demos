const CONFIG = {
    zIndex: {
        Menu: 2,
        Popup: 3,
    },
    fontFamilies: {
        default: "'Source Code Pro', Helvetica, Arial, sans-serif",
    },
    spacing: {
        default: '1rem',
    },
    colors: {
        dark: {
            primary: '#666',
            secondary: '#333',
            text: '#0f0',
            text2: '#0f0',
            bgPopup: 'rgba(0, 0, 0, 0.7)',
        },
        light: {
            primary: 'pink',
            secondary: '#F4E7EA',
            text: 'black',
            text2: '#aaa',
            bgPopup: 'rgba(255, 255, 255, 0.9)',
        },
    },
    responsiveDimensions: {
        mobileW: 720,
    },
}

export default CONFIG

export type Colors = typeof CONFIG.colors.dark
