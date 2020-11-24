// functional component props がある場合

import React, { useState, useCallback } from 'react'
import PrimaryButton from './components/PrimaryButton'
import TextInput from './components/TextInput'


const SignUp: React.FC = () => {
    
    const [name, setName] = useState<string>(''),
          [email, setEmail] = useState<string>(''),
          [password, setPassword] = useState<string>(''),
          [confirmPassword, setConfirmPassword] = useState<string>('');

    const inputUsername = useCallback((e) => {
        setName(e.target.value)
    }, [setName]);
    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail]);
    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword]);
    const inputConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
    }, [setConfirmPassword]);
    
    const handelSubmit = () => {
        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            alert('未入力です')
        } else {
            console.log(name);
            console.log(email);
            console.log(password);
            console.log(confirmPassword);
            setName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }
    }

    return (
        <div>
            <TextInput 
                fullWidth={true} label={'Name'} multiline={false} value={name} 
                required={true} rows={1} type={'text'} 
                onChange={inputUsername}
            />
            <TextInput 
                fullWidth={true} label={'Email'} multiline={false} value={email} 
                required={true} rows={1} type={'text'} 
                onChange={inputEmail}
            />
            <TextInput 
                fullWidth={true} label={'Password'} multiline={false} value={password} 
                required={true} rows={1} type={'text'} 
                onChange={inputPassword}
            />
            <TextInput 
                fullWidth={true} label={'Cofirm Password'} multiline={false} value={confirmPassword} 
                required={true} rows={1} type={'text'} 
                onChange={inputConfirmPassword}
            />
            <PrimaryButton label={'送信'} onClick={handelSubmit} />
        </div>
    )
}

export default SignUp;