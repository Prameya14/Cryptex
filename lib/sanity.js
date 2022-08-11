import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: 'f6i5ycwi',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skH5grT5xVIH6IDzJ8NGPdtuDfnZlPHnuhEaXX3d9pHe1ARNf28lBg0QsESg6FHl1jedwMyxjutVQGVKt394o7voJ2Dg3FtTByCLCeVEOd3b4UaBpA9hFrIX5PPbz5ARvhYmjVDXvXzNMr35ajBEUpainT1l45O8Syn66coOO47aUyD6r4pd',
    useCdn: 'false',
})