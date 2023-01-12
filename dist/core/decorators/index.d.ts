export declare const startupDecorator: () => void;
export declare class People {
    private _height;
    private _weight;
    get height(): number;
    set height(h: number);
    get weight(): number;
    set weight(h: number);
    constructor(h: number, w: number);
    work(): void;
    sayHeight(): void;
    sayWeight(): void;
}
export declare class Person {
}
