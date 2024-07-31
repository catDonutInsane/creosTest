
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
export const LocaleSwitcher = () =>{
const  [label, setLabel] = useState("RU")
const [placement, setPlacement] = useState<"start" | "end" | "top" | "bottom" | undefined>("start")
const switchLocale = () =>{
    setLabel(label==="RU"?"ENG":"RU")
    setPlacement(placement==="start"?"end":"start")
}
    return(
        <FormControlLabel
        value="top"
        control={
                <Switch onChange={switchLocale} defaultChecked color="default" />
            }
        label={label}
        labelPlacement={placement}
      />
        
    )
}