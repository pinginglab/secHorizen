export class TokenPayload {
    private _business: number[];
    private _user_name: string;
    private _scope: string[];
    private _exp: number;
    private _iat: number;
    private _authorities: string[];
    private _jti: string;
    private _client_id: string;


    get business(): number[] {
        return this._business;
    }

    set business(value: number[]) {
        this._business = value;
    }

    get user_name(): string {
        return this._user_name;
    }

    set user_name(value: string) {
        this._user_name = value;
    }

    get scope(): string[] {
        return this._scope;
    }

    set scope(value: string[]) {
        this._scope = value;
    }

    get exp(): number {
        return this._exp;
    }

    set exp(value: number) {
        this._exp = value;
    }

    get iat(): number {
        return this._iat;
    }

    set iat(value: number) {
        this._iat = value;
    }

    get authorities(): string[] {
        return this._authorities;
    }

    set authorities(value: string[]) {
        this._authorities = value;
    }

    get jti(): string {
        return this._jti;
    }

    set jti(value: string) {
        this._jti = value;
    }

    get client_id(): string {
        return this._client_id;
    }

    set client_id(value: string) {
        this._client_id = value;
    }
}


export class Pagination {
    private _total: number;
    private _first: number;
    private _last: number;
    private _size: number;
    private _offset: number;


    constructor(size: number = 20, offset: number = 0) {
        this._size = size;
        this._offset = offset;
    }

    setTotal(total: number) {
        this._total = total;
        this._first = 0;
        this._last = Math.floor(this._total / this._size);
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get first(): number {
        return this._first;
    }

    set first(value: number) {
        this._first = value;
    }

    get last(): number {
        return this._last;
    }

    set last(value: number) {
        this._last = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }


    get offset(): number {
        return this._offset;
    }

    set offset(value: number) {
        this._offset = value;
    }
}
