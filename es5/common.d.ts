export declare type OutputFormat = 'Hex' | 'Base64';
export declare type DefaultOptions = {
    '--help'?: boolean;
    '-h'?: boolean;
};
export declare type Opts<T extends Record<string, string | boolean | number>> = DefaultOptions & T;
