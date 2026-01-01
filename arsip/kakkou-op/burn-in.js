const renderer = new SubtitlesOctopus({
    video: document.querySelector('video'),
    renderMode: 'lossy',
    subUrl: '../subtitles/kakkouop1.ass',
    workerUrl: '../subtitles-octopus-worker.js',
    fallbackFont: '../fonts/default.woff2',
    fonts: [
        '../fonts/Big Caslon Medium.ttf',
    ],
    // timeOffset: -0.041
})
