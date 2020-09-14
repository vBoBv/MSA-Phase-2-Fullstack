export interface IItem {
	id: string;
	name: string;
	description: string;
	possession: string;
}

export interface IUser {
	username: string;
	name: string;
	token: string;
	image?: string;
}

export interface IUserForm {
	email: string;
	password: string;
	name?: string;
	username?: string;
}
