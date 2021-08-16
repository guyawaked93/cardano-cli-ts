import { Address, Genesis, Governance, Key, Node, Query, StakeAddress, StakePool, TextView, Transaction } from './modules';
export declare type OutputFormat = 'Hex' | 'Base64';
export declare type DefaultOptions = {
    help?: boolean;
};
export declare type Options = {
    [K in string]?: string | boolean | number | null | symbol | bigint | (() => string);
};
export declare type Option = Options[string];
export declare type CommandGroup = {
    [K in string]: Option | Command | Group;
};
export declare type Group = {
    [K in string]: Command;
};
export declare type Command = {
    [K in string]: Option;
};
export declare type CommandOptions<G extends CommandGroup> = Partial<MatchingProperties<G, Option>>;
export declare type GroupCommands<G extends CommandGroup> = MatchingProperties<G, {
    [K in string]: any;
}>;
export declare type CommandFunction<G extends CommandGroup, S extends GroupCommands<G> = GroupCommands<G>, O extends CommandOptions<G> = CommandOptions<G>, SC extends {
    [K in keyof S]: ReturnType<CommandFunction<S[K]>>;
} = {
    [K in keyof S]: ReturnType<CommandFunction<S[K]>>;
}, SCR extends {
    [K in keyof SC]: ReturnType<SC[K]>;
} = {
    [K in keyof SC]: ReturnType<SC[K]>;
}> = (command: string, subCommands?: SC) => (context: string) => (options?: DefaultOptions & O) => {
    command: string;
    run: () => Promise<any>;
} & SCR;
export declare const commandFunction: <G extends CommandGroup, S extends GroupCommands<G> = GroupCommands<G>, O extends Partial<MatchingProperties<G, string | number | bigint | boolean | symbol | (() => string) | null | undefined>> = Partial<MatchingProperties<G, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>, SC extends { [K in keyof S]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<S[K], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_20 in keyof { [K_1 in keyof GroupCommands<S[K]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<S[K]>[K_1], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_19 in keyof { [K_2 in keyof GroupCommands<GroupCommands<S[K]>[K_1]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_18 in keyof { [K_3 in keyof GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_17 in keyof { [K_4 in keyof GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_16 in keyof { [K_5 in keyof GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_15 in keyof { [K_6 in keyof GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_14 in keyof { [K_7 in keyof GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>[K_7], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_13 in keyof { [K_8 in keyof GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>[K_7]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>[K_7]>[K_8], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_12 in keyof { [K_9 in keyof GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>[K_7]>[K_8]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>[K_7]>[K_8]>[K_9], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
    command: string;
    run: () => Promise<any>;
} & { [K_11 in keyof { [K_10 in keyof GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>[K_7]>[K_8]>[K_9]>]: (context: string) => (options?: (DefaultOptions & Partial<MatchingProperties<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<GroupCommands<S[K]>[K_1]>[K_2]>[K_3]>[K_4]>[K_5]>[K_6]>[K_7]>[K_8]>[K_9]>[K_10], string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => any; }]: any; }; }]: any; }; }]: any; }; }]: any; }; }]: any; }; }]: any; }; }]: any; }; }]: any; }; }]: any; }; }]: any; }; } = { [K_21 in keyof S]: (context: string) => any; }, SCR extends { [K_22 in keyof SC]: ReturnType<SC[K_22]>; } = { [K_23 in keyof SC]: ReturnType<SC[K_23]>; }>(start: string, subCommands?: SC | undefined) => (context: string) => (options?: (DefaultOptions & O) | undefined) => {
    command: string;
    run: () => Promise<unknown>;
} & SCR;
export declare type MatchingProperties<T, V> = Pick<T, {
    [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T]>;
export declare type ExcludeMatchingProperties<T, V> = Pick<T, {
    [K in keyof T]-?: T[K] extends V ? never : K;
}[keyof T]>;
export declare type Commands = {
    /** Payment address commands */
    address: Address.Commands;
    /** Stake address commands */
    stakeAddress: StakeAddress.Commands;
    /** Key utility commands */
    key: Key.Commands;
    /** Transaction commands */
    transaction: Transaction.Commands;
    /** Node operation commands */
    node: Node.Commands;
    /** Stake pool commands */
    stakePool: StakePool.Commands;
    /** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    query: Query.Commands;
    /** Genesis block commands */
    genesis: Genesis.Commands;
    /** Governance commands */
    governance: Governance.Commands;
    /** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
    textView: TextView.Commands;
};
export declare const cardanoCliCommand: <C extends keyof Commands, S extends MatchingProperties<Commands[C], {
    [x: string]: any;
}> = MatchingProperties<Commands[C], {
    [x: string]: any;
}>, SC extends { [K in keyof S]: (context: string) => any; } = { [K_1 in keyof S]: (context: string) => any; }>(command: C, subCommands?: SC | undefined) => (context: string) => any;
