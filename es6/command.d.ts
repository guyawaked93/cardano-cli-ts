import { Cardano } from './index';
declare type SubOf<T extends keyof Cardano> = keyof Cardano[T];
/** Todo, run the commands */
export declare const makeCommandWithArgsOptsAndFlags: <T extends keyof Cardano>(cmd: T, sub: keyof Cardano[T]) => (args: Array<string | number | undefined>, opts?: Record<string, string | number> | undefined, flags?: Record<string, boolean> | undefined) => Promise<unknown>;
export {};
