export default {
    // https://testplane.io/docs/v8/guides/local-browsers/
    gridUrl: "local",
    baseUrl: "http://localhost",
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    sets: {
        desktop: {
            files: ["testplane-tests/**/*.testplane.{ts,js}"],
            browsers: ["chrome", "firefox"],
        },
    },
    browsers: {
        chrome: {
            headless: true,
            desiredCapabilities: {
                browserName: "chrome",
            },
        },
        firefox: {
            headless: true,
            desiredCapabilities: {
                browserName: "firefox",
            },
        },
    },
    plugins: {
        "html-reporter/testplane": {
            // https://github.com/gemini-testing/html-reporter
            enabled: true,
            path: "testplane-report",
            defaultView: "all",
            diffMode: "3-up-scaled",
        },
    },
};