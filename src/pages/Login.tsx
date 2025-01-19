import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
    const [login, { data, error }] = useLoginMutation()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: 'admin123',
        }
    });
    const onsubmit = (data) => {
        console.log(data);
        const userInfo = {
            id: data.id,
            password: data.password
        };
        login(userInfo);
    }


    return (
        <div className='flex flex-col items-center justify-center my-20'>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <label htmlFor="id" className='mr-2 '>ID:</label>
                    <input type="text" id="id"  {...register("id")} className='border px-2' />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" {...register("password")} className='border px-2' />
                </div>
                <Button htmlType='submit'>Login</Button>
            </form>
        </div>

    );


}



export default Login;