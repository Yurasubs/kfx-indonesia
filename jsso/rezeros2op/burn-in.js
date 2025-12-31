const renderer = new SubtitlesOctopus({
  video: document.querySelector('video'),
  renderMode: 'lossy',
  subUrl: '../subtitles/rezeropart2.ass',
  workerUrl: '../subtitles-octopus-worker.js',
  fallbackFont: '../fonts/default.woff2',
  fonts: [
    '../fonts/Exodite.otf',
    '../fonts/AppleGaramond-Bold.TTF',
    '../fonts/freeserif.ttf',
    '../fonts/ChalkDust_Regular.ttf',
    '../fonts/Amplitude-Black.ttf'
  ],
  // timeOffset: -0.041
})
