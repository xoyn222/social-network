import React, {FC} from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login = () => {

    const onSubmit = (formData: LoginFormType) => {
        console.log(formData)
    }

    return (
        <div className={s.container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type LoginFormType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<LoginFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}
              className={s.form}
        >
            <Field placeholder={'login'}
                   component={'input'}
                   name={'login'}
                   className={s.login}
            />
            <Field placeholder={'password'}
                   component={'input'}
                   name={'password'}
                   className={s.login}
            />
            <div className={s.rememberBox}>
                <label htmlFor="checkboxId">Remember me</label>
                <Field type={"checkbox"}
                       id={'checkboxId'}
                       component={'input'}
                       name={'rememberMe'}
                       className={s.remember}
                />
            </div>
            <button className={s.loginKey}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)