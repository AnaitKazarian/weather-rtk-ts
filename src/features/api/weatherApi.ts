import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherInfoResponse} from "../../utils/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
        reducerPath: 'weatherApi',
        baseQuery: fetchBaseQuery({baseUrl: base_url}),
        endpoints: builder => ({
            getWeatherByCity: builder.query<WeatherInfoResponse,string>({
                query: city => `?q=${city}&appid=${api_key}&units=metric`
            })
        })
    })

export const {useGetWeatherByCityQuery} = weatherApi;