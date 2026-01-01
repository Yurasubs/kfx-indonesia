const renderer = new JASSUB({
    video: document.querySelector('video'),
    renderMode: 'lossy',
    subUrl: '../subtitles/makeineed.ass',
    workerUrl: '../subtitles-octopus-worker.js',
    fallbackFont: '../fonts/default.woff2',
    fonts: [
        '../fonts/Futura ND Medium.ttf',
    ],
    // timeOffset: -0.041
})
