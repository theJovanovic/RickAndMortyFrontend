export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

export class User {
    constructor(
        private firstname: string,
        private lastname: string,
        private email: string,
        private password: string) { }
}