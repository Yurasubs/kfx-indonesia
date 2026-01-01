const renderer = new SubtitlesOctopus({
    video: document.querySelector('video'),
    renderMode: 'lossy',
    subUrl: '../subtitles/frierened.ass',
    workerUrl: '../subtitles-octopus-worker.js',
    fallbackFont: '../fonts/default.woff2',
    fonts: [
        '../fonts/Typey.otf',
        '../fonts/FOT-DNPShueiShogoMinStd-Hv_0.otf'
    ],
    // timeOffset: -0.041
})
