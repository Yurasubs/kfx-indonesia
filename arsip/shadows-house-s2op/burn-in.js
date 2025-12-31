const renderer = new SubtitlesOctopus({
    video: document.querySelector('video'),
    renderMode: 'lossy',
    subUrl: '../subtitles/Shadow House S2 - OP.ass',
    workerUrl: '../subtitles-octopus-worker.js',
    fallbackFont: '../fonts/default.woff2',
    fonts: [
        '../fonts/NotoSerifJP-Medium.otf',
        '../fonts/GARABD.TTF'
    ],
    // timeOffset: -0.041
})
