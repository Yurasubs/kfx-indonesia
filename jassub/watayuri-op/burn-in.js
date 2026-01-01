const renderer = new JASSUB({
    video: document.querySelector('video'),
    renderMode: 'lossy',
    subUrl: '../subtitles/OPEDYuri.ass',
    workerUrl: '../subtitles-octopus-worker.js',
    fallbackFont: '../fonts/default.woff2',
    fonts: [
        '../fonts/00209.TTF',
        '../fonts/JANIHB.ttf'
    ],
    // timeOffset: -0.041
})
