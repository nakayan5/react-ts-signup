import React, { ChangeEvent } from 'react'
import TextField from '@material-ui/core/TextField'

interface TextInputProps {
    fullWidth: boolean;
    label: string;
    multiline: boolean;
    required: boolean;
    rows: number;
    value: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} 

const TextInput: React.FC<TextInputProps> = ({
    fullWidth, label, multiline, required, rows, value, type,
    onChange
}) => {
    return (
        <TextField 
            fullWidth={fullWidth}
            label={label}
            margin='dense'
            multiline={multiline}
            required={required}
            rows={rows}
            value={value}
            type={type}
            onChange={onChange}
        />
    )
}

export default TextInput