import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingReducerType} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, any>(state => state.loading.isLoading)
    const dispatch = useDispatch();



    const setLoading = () => {
        // debugger
        // console.log(isLoading)

        dispatch(loadingAC())
        // console.log(isLoading)
        console.log('loading...')
        setTimeout(()=>{
            dispatch(loadingAC())
        }, 2000);

    };

    return (
        <div>
            <hr/>
           <h1> homeworks 10 </h1>

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <div>
                <SuperButton onClick={setLoading}>set loading...</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
