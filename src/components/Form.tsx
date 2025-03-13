import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {FormEvent, useState} from "react";
import {setCity} from "../features/slices/citySlice.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherApi.ts";
import {weather_cache_time} from "../utils/constants.ts";

const Form = () => {
    const dispatch = useAppDispatch();
    const [lastFetchTime, setLastFetchTime] = useState<number>(Date.now());

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>)   => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        dispatch(setCity(city));
        e.currentTarget.city.value = '';
    }

    const city = useAppSelector(state => state.city);
    const {refetch} = useGetWeatherByCityQuery(city);

    function handleRefetchOne() {
        const current = Date.now();
            if (city && current - lastFetchTime > weather_cache_time) {
                refetch();
                setLastFetchTime(current);
            }
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'} onClick={handleRefetchOne}>Get Weather</button>
        </form>
    );
};

export default Form;