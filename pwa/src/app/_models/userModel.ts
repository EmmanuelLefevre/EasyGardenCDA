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
    roles: JSON,
    garden: [{
        id: string,
        name: string,
        lawnmower: [{
            id: number,
            name: string,
            batterySensor: string,
            status: boolean
        }],
        lightning: [{
            id: number,
            name: string,
            status: boolean
        }],
        pool: [{
            id: number,
            name: string,
            status: boolean
        }],
        portal: [{
            id: number,
            name: string,
            presenceSensor: string,
            status: boolean
        }],
        watering: [{
            id: number,
            name: string,
            flowSensor: string,
            pressureSensor: string,
            status: boolean
        }]
    }]
}

export interface SingleUserModel {
    data: UserModel
}

export interface DataUserModel {
    data: UserModel[]
}
