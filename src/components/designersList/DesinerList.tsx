import axios from "axios"
import style from "./DesignerList.module.css"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { getDesignersList } from "../../reducers/reducer"
import { DesignerItem } from "./designerItem/designerItem"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTheme } from "../../context/ThemeContext"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChangeEvent } from "react"
export const DesignerList = () =>{
    const { isDark } = useTheme()
    const dispatch = useAppDispatch()
    const {designers} = useAppSelector(state => state.reducer)
    const {count} = useAppSelector(state => state.reducer.designers!)
    const [page, setPage] =useState<string | number>('')
    const [email, setEmail] =useState("")
    const [username, setUsername] =useState("")

let sortByEmail = (e:SelectChangeEvent) =>{
    setEmail(e.target?.value as string )
    setUsername("")   
}
let sortByUserName = (e:SelectChangeEvent) =>{
    setUsername(e.target?.value as string )
    setEmail("")   
}

useEffect(()=>{
    axios.get(`https://sandbox.creos.me/api/v1/designer/?page=${page}&ordering=${email || username}`)
    .then(res=>res.data)
    .then(res=> dispatch(getDesignersList(res)))
},[page, email, username])

let changePage = (e:ChangeEvent<unknown>, page:number) =>{
    setPage(page)
}
    return(
        <div className={`${style.wrapper} ${isDark ? style.dark : style.light}`}>
            {designers && designers.results.map(i=><DesignerItem key={i.username} {...i}/>)}
            <Stack spacing={2}>      
            <Pagination onChange={(e:ChangeEvent<unknown>, page)=>changePage(e,page)}  count={count?Math.ceil(count/16):1} variant="outlined" shape="rounded" />
            </Stack>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-email">E-mal</InputLabel>
        <Select
          labelId="demo-simple-select-email"
          id="demo-simple-select"
          value={email}
          label="email"
          onChange={sortByEmail}
        >
        <MenuItem value={""}>Без сортировки</MenuItem>
          <MenuItem value={"email"}>По возратанию</MenuItem>
          <MenuItem value={"-email"}>По убыванию</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-username">Username</InputLabel>
        <Select
          labelId="demo-simple-select-username"
          id="demo-simple-select"
          value={username}
          label="username"
          onChange={sortByUserName}
        >
        <MenuItem value={""}>Без сортировки</MenuItem>
          <MenuItem value={"username"}>По возратанию</MenuItem>
          <MenuItem value={"-username"}>По убыванию</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
        </div>
    )
} 