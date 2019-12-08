module.exports = {

    "globDirectory": "dist/",
    "globPatterns": [
        "**/*.{html,css,ico,jpg,png,js,txt}"
    ],
    "swDest": "public/service-worker.js",
    maximumFileSizeToCacheInBytes: 4 * 1024 * 1024
};