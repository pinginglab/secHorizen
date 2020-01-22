export class User {
    private _id: number;
    private _login: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _imageUrl: string;
    private _activated: boolean;
    private _langKey: string;
    private _createdBy: string;
    private _createdDate: Date;
    private _lastModifiedBy: string;
    private _lastModifiedDate: Date;
    private _authorities: string[];
    private _businesses: number[];
    private _phone: string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get activated(): boolean {
        return this._activated;
    }

    set activated(value: boolean) {
        this._activated = value;
    }

    get langKey(): string {
        return this._langKey;
    }

    set langKey(value: string) {
        this._langKey = value;
    }

    get createdBy(): string {
        return this._createdBy;
    }

    set createdBy(value: string) {
        this._createdBy = value;
    }

    get createdDate(): Date {
        return this._createdDate;
    }

    set createdDate(value: Date) {
        this._createdDate = value;
    }

    get lastModifiedBy(): string {
        return this._lastModifiedBy;
    }

    set lastModifiedBy(value: string) {
        this._lastModifiedBy = value;
    }

    get lastModifiedDate(): Date {
        return this._lastModifiedDate;
    }

    set lastModifiedDate(value: Date) {
        this._lastModifiedDate = value;
    }

    get authorities(): string[] {
        return this._authorities;
    }

    set authorities(value: string[]) {
        this._authorities = value;
    }

    get businesses(): number[] {
        return this._businesses;
    }

    set businesses(value: number[]) {
        this._businesses = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }
}


