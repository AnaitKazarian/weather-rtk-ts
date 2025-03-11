import {useAppDispatch} from "../app/hooks.ts";
import {FormEvent} from "react";
import {setCity} from "../features/slices/citySlice.ts";

const Form = () => {
    const dispatch = useAppDispatch();

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>)   => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        dispatch(setCity(city));
        e.currentTarget.city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;