export interface User {
    id: string;
    dateRegistered: Date;
    forename?: string;
    surname?: string;
    gamertag: string;
    countryCode: string;
}