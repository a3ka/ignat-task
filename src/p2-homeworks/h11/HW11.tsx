import React from 'react'
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: any
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {

    const minDistance = 0;

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            if (onChangeRange) {
                onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
            }
        } else {
            if (onChangeRange) {
                onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
            }
        }
    };

    return (<>
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    </>)
}

export default SuperDoubleRange