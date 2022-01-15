
export const formatDate = (date: Date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate()

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month].join('/');
}

export const padNum = (num: number) => {
    const stringNum = num + '';
    if (stringNum.length === 1) {
        return '0' + stringNum;
    } else {
        return stringNum;
    }
}

export const getWeatherImage = (weatherIcon:any) => {
    let sunArr = [1, 2, 30, 33];
    let sunAndCloudsArr = [3, 4, 5, 6, 20, 21, 34];
    let cloudsArr = [7, 8, 19, 32, 35, 36, 38, 43];
    let fogArr = [11, 37];
    let rainArr = [12, 16, 18, 25, 29, 39, 40];
    let sunAndRainArr = [13, 14, 17];
    let stormArr = [15, 26, 41, 42];
    let snowArr = [22, 24, 31, 44];
    let sunAndSnowArr = [23]
    let selectedImage;
    switch (true) {
        case sunArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/hot.jpg'));
            break;
        case sunAndCloudsArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/sunAndClouds.jpg'));
            break;
        case cloudsArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/clouds.jpg'));
            break;
        case fogArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/fog.jpg'));
            break;
        case rainArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/rain.jpg'));
            break;
        case sunAndRainArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/sunAndRain.jpg'));
            break;
        case stormArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/stormDay.jpg'));
            break;
        case snowArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/snow.jpg'));
            break;
        case sunAndSnowArr.includes(weatherIcon):
            selectedImage = (require('../../assets/images/sunAndSnow.jpg'));
            break;
    }

    return selectedImage;
}
