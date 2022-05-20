export interface UserModel {
    id: number,
    email: string,
    password: string,
    lastName: string,
    firstName: string,
    pseudo: string,
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    isVerified: boolean,
    roles: JSON
}

export interface SingleUserModel {
    data: UserModel
}

export interface DataUserModel {
    data: UserModel[]
}

export interface TokenUserModel {
    id: number,
    nom: string,
    prenom: string,
    email: string,
    iap?: number,
    exp?: number
}