
import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useTheme } from '../../../context/ThemeContext';

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);
const {isDark, toggleTheme} = useTheme()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggleTheme()
  };

  return (
    <div>
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    {`${isDark?"Тёмная":"Светлая"}`}
    </div>
  );
}