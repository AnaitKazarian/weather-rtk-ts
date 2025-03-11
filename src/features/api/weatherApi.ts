import {api_key, base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {WeatherInfo, WeatherInfoResponse} from "../../utils/types";

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    // refetchOnMountOrArgChange:
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: city => `?q=${city}&appid=${api_key}&units=metric`,
            // keepUnusedDataFor:
            transformResponse: (data: WeatherInfoResponse) => ({
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                country: data.sys.country,
                sunset: data.sys.sunset * 1000
            })
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi;