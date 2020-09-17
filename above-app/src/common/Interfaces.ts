export interface IItem {
	id: string;
	name: string;
	description: string;
	possession: string;
	bids?: IBid[];
	discussions?: IDiscussion[];
}

export interface IDiscussion {
	id: string;
	username: string;
	name: string;
	comment: string;
	createAt: Date;
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

export interface IBid {
	name: string;
	username: string;
	image: string;
	price: number;
}
