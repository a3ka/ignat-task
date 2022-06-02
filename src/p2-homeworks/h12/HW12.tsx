import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, InitialStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, string> (state => state.theme.color)
    const dispatch = useDispatch();
    const changeThemeCB = (option: string) => {
        dispatch(changeThemeAC(option))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
               <h1>homeworks 12</h1>
            </span>

            <div>
                <SuperSelect
                    options={themes}
                    // value={value}
                    onChangeOption={(option) => changeThemeCB(option)}
                />
            </div>


            <hr/>
        </div>
    );
}

export default HW12;
