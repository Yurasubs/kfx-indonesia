const renderer = new JASSUB({
    video: document.querySelector('video'),
    renderMode: 'lossy',
    subUrl: '../subtitles/makeineed.ass',
    workerUrl: '../assets/jassub-worker.js',
    availableFonts: {
        'liberation sans': '../../fonts/default.woff2'
    },
    fonts: [
        '../fonts/Futura ND Medium.ttf',
    ],
    // timeOffset: -0.041
})
