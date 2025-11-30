import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ '& .MuiSlider-thumb': {            // бегунок
                    backgroundColor: 'green',
                },
                '& .MuiSlider-track': {            // выделенная часть
                    backgroundColor: 'green',
                },
                '& .MuiSlider-rail': {             // неактивная часть
                    backgroundColor: 'gray',
                },
                width: '60%'// стили для слайдера // пишет студент
                
            }}
            {...props}
            // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
