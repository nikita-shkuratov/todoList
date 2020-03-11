import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = e => {
        e.preventDefault()
        if (value.trim()) {
            alert.show(value, 'success')
            setValue('')
        } else {
            alert.show('please enter node')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='enter note name'
                    value={value}
                    onChange={e => setValue(e.target.value)} />
            </div>
        </form>
    )
}