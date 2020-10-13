import { Role } from './role.model';

export class User {
    id: string;
    prenom: string;
    nom: string;
    email: string;
    password: string;
    phoneNumber: string;
    verified: boolean;
    refreshToken: string;
    status: number;
    avatar: string;
    role: Role;
    sessionAt: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    jwtToken: string;
}
