import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import ReactSwitch from 'react-switch';

const Toggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  {
    return (
      <div className="flex item center my-2 mx-2">
        <lable className=" mx-2">{theme === "light" ? "Dark Mode" : "Light Mode"}</lable>
        <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
      </div>
    )
  }
}
export default Toggle;