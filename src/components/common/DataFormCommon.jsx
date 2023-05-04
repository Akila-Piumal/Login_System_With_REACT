import { TextField } from '@mui/material'
import React from 'react'

const DataFormCommon = (props) => {
  return (
    <div>
        <TextField
            className={props.className}
            label={props.label}
            variant={props.variant}
            type={props.type}
            value={props.value}
            onChange={e=>{props.onChange(e.target.value)}}
            required={props.required}
        >
        </TextField>        
    </div>
  )
}

export default DataFormCommon;