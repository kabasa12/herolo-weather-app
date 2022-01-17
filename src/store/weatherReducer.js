import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weatherReducer',
    initialState: {
        city: 'TelAviv',
        weatherData: [],
        favoriteData: [],
    },
    reducers: {
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        addWeather: (state, action) => {
            //console.log('action.payload',action.payload)
            state.weatherData = [...action.payload];
            //console.log(state.weatherData)
        },
        updateWeather: (state) => {
            state.weatherData.pop();
            state.weatherData = [...state.weatherData];
        },
        addFavorite(state, action) {
            state.favoriteData = [...state.favoriteData, ...action.payload];

        },
        updateFavorite: (state) => {
            state.favoriteData.pop();
            state.favoriteData = [...state.favoriteData];
        }
    }
});


export const { updateCity, addWeather, updateWeather, addFavorite, updateFavorite } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;