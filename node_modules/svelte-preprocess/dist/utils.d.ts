import { TransformerArgs, TransformerOptions } from './typings';
export declare const concat: (...arrs: any[]) => any[];
export declare const throwUnsupportedError: (lang: string, filename: string) => never;
export declare const isFn: (maybeFn: unknown) => boolean;
export declare const resolveSrc: (importerFile: string, srcPath: string) => string;
export declare const getSrcContent: (file: string) => Promise<string>;
export declare const parseFile: ({ attributes, filename, content }: {
    content: string;
    attributes: Record<string, string | boolean>;
    filename?: string;
}, language: string) => Promise<{
    filename: string;
    attributes: Record<string, string | boolean>;
    content: string;
    lang: any;
    alias: any;
    dependencies: string[];
}>;
export declare const addLanguageAlias: (entries: [string, string][]) => void;
/** Paths used by preprocessors to resolve @imports */
export declare const getIncludePaths: (fromFilename: string, base?: string[]) => string[];
export declare const getLanguage: (attributes: Record<string, string | boolean>, defaultLang: string) => {
    lang: string;
    alias: string;
};
export declare const runTransformer: (name: string, options: TransformerOptions<any>, { content, map, filename }: TransformerArgs<any>) => Promise<any>;
export declare const importAny: (...modules: string[]) => Promise<any>;
