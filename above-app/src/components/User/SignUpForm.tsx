import React, { useState, FormEvent } from 'react';
import { IUserForm } from '../../common/Interfaces';
import Api from '../api/Api';
import history from '../history';
import { IUser } from '../../common/Interfaces';
import { Trans } from 'react-i18next';
import { Grid, Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface ISignUpFormProps {
	setUser: (user: IUser) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		label: {
			paddingRight: '1rem'
		},
		field: {
			marginBottom: '1rem'
		},
		button: {
			color: 'inherit'
		}
	})
);

const SignUpForm: React.FC<ISignUpFormProps> = ({ setUser }) => {
	const classes = useStyles();

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
		<div>
			<form onSubmit={(e) => onSubmit(e)}>
				<Grid container justify='space-between' className={classes.field}>
					<Grid item className={classes.label}>
						<label htmlFor='username'>
							<Trans>Username:</Trans>
						</label>
					</Grid>
					<Grid>
						<input
							type='text'
							name='username'
							placeholder='Username'
							value={formValue.username || ''}
							onChange={onInputChange}
						/>
					</Grid>
				</Grid>
				<Grid container justify='space-between' className={classes.field}>
					<Grid item className={classes.label}>
						<label htmlFor='name'>
							<Trans>Name:</Trans>
						</label>
					</Grid>
					<Grid item>
						<input type='text' name='name' placeholder='name' onChange={onInputChange} value={formValue.name || ''} />
					</Grid>
				</Grid>
				<Grid container justify='space-between' className={classes.field}>
					<Grid item className={classes.label}>
						<label htmlFor='email'>
							<Trans>Email:</Trans>
						</label>
					</Grid>
					<Grid item>
						<input
							type='text'
							name='email'
							placeholder='Email'
							onChange={onInputChange}
							value={formValue.email || ''}
						/>
					</Grid>
				</Grid>
				<Grid container justify='space-between' className={classes.field}>
					<Grid item className={classes.label}>
						<label htmlFor='password'>
							<Trans>Password</Trans>
						</label>
					</Grid>
					<Grid>
						<input
							name='password'
							placeholder='Password'
							value={formValue.password || ''}
							onChange={onInputChange}
							type='password'
						/>
					</Grid>
				</Grid>
				<Grid container justify='center'>
					<Button type='submit' className={classes.button} variant='outlined' color='primary'>
						<Trans>Sign up</Trans>
					</Button>
				</Grid>
			</form>
		</div>
	);
};

export default SignUpForm;
