export * from "./IRoute";

export declare interface IRole {
    name: string;
    roleId: string;
    userCode: string;
}

export declare interface IRoleCategory {
    name: string;
    roles: IRole[];
}

export declare interface IProfileUser {
    userId: string;
    fullName: string;
    email: string;
    userPictureUrl: string;
}

