import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.ts";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => 'Pending...')
            .addCase(fetchWeather.fulfilled, () => '')
            .addCase(fetchWeather.rejected, (_state, action) => action.error.message)
    },
})

export default messageSlice.reducer;