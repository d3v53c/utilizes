declare type Many<T> = T | ReadonlyArray<T>;
export declare const setEach: <T extends object>(obs: T[], value: any, ...paths: Many<string | number | symbol>[]) => T[];
export default setEach;
