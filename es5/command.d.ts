/** Todo, run the commands */
export declare const makeCommandWithArgsOptsAndFlags: (cmd: string) => (args: Array<string | number | undefined>, opts?: Record<string, string | number> | undefined, flags?: Record<string, boolean> | undefined) => Promise<unknown>;
