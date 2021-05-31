import { Opts } from './common';
/** Todo, run the commands */
export declare const commandFunction: <T extends Record<string, string | number | boolean>>(command: string) => (cliPath: string) => (opts: Opts<T>) => Promise<unknown>;
