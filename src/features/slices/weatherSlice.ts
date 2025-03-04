import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.ts";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => ({}))
    }
})

export default weatherSlice.reducer