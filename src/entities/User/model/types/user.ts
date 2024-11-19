import { Address } from 'entities/Address';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER'
}

export interface User {
    id: string;
    username: string;
    fio: string;
    phoneNumber: string;
    email: string;
    addresses?: Address[];
}

export interface UserSchema {
    authData?: User

    _inited: boolean
}
