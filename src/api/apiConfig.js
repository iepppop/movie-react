const apiConfig = {
    baseUrl:" https://api.themoviedb.org/3/",
    apiKey:'72a3838c30b33bf08c6034423870e80f',
    originalImage: (imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;