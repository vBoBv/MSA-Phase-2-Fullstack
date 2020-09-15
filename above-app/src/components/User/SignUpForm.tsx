import React, { useState, FormEvent } from 'react';
import { IUserForm } from '../../common/Interfaces';
import Api from '../api/Api';
import history from '../history';
import { IUser } from '../../common/Interfaces';
import { Trans } from 'react-i18next';

interface ISignUpFormProps {
	setUser: (user: IUser) => void;
}

const SignUpForm: React.FC<ISignUpFormProps> = ({ setUser }) => {
	const [formValue, setFormValue] = useState<IUserForm>({
		email: '',
		password: ''
	});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		Api.User.register(formValue).then((response) => {
			window.localStorage.setItem('jwt', response.token);
			setUser(response);
		});
		history.push('/spaceobjects');
	};

	const onInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormValue({ ...formValue, [event.currentTarget.name]: event.currentTarget.value });
	};

	return (
		<div style={{ paddingTop: '10rem' }}>
			<form className='ui form' onSubmit={(e) => onSubmit(e)}>
				<div className='field'>
					<label>
						<Trans>Username</Trans>
					</label>
					<input
						type='text'
						name='username'
						placeholder='username'
						onChange={onInputChange}
						value={formValue.username}
					/>
				</div>
				<div className='field'>
					<label>
						<Trans>Name</Trans>
					</label>
					<input type='text' name='name' placeholder='name' onChange={onInputChange} value={formValue.name} />
				</div>
				<div className='field'>
					<label>
						<Trans>Email</Trans>
					</label>
					<input type='text' name='email' placeholder='Email' onChange={onInputChange} value={formValue.email} />
				</div>
				<div className='field'>
					<label>
						<Trans>Password</Trans>
					</label>
					<input
						name='password'
						placeholder='Password'
						value={formValue.password}
						onChange={onInputChange}
						type='password'
					/>
				</div>
				<button className='ui button' type='submit'>
					<Trans>Sign up</Trans>
				</button>
			</form>
		</div>
	);
};

export default SignUpForm;
