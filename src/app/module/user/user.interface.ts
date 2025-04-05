
type Role = 'customer'|'mil provider';
type Status = 'active' | 'inactive';

export interface TUser {
    name:string;
    email:string;
    password:string;
    phone_number:string;
    role: Role;
    photo?:string | null;
    shippingAddress?:string;
    status: Status;
    passwordChangedAt?:Date;
    createdAt?:Date;
    updatedAt?:Date;
    isBlocked?:boolean;
}