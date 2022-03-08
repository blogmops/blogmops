import postcss from 'postcss';
import { Options as SassOptions } from 'sass';
import { Options as PugOptions } from 'pug';
import { CompilerOptions } from 'typescript';
export interface Coffeescript {
    inlineMap?: boolean;
    filename?: string;
    bare?: boolean;
    header?: boolean;
    transpile?: any;
}
export interface Postcss extends postcss.ProcessOptions {
    plugins: postcss.AcceptedPlugin[];
    configFilePath?: string;
}
export declare type Pug = PugOptions;
export declare type Sass = Omit<SassOptions, 'file'>;
export interface Less {
    paths?: string[];
    plugins?: any[];
    strictImports?: boolean;
    maxLineLen?: number;
    dumpLineNumbers?: 'comment' | string;
    silent?: boolean;
    strictUnits?: boolean;
    globalVars?: Record<string, string>;
    modifyVars?: Record<string, string>;
}
export interface Stylus {
    globals?: Record<string, any>;
    functions?: Record<string, any>;
    imports?: string[];
    paths?: string[];
    sourcemap?: boolean;
}
export interface Typescript {
    compilerOptions?: CompilerOptions & {
        transpileOnly?: boolean;
    };
    tsconfigFile?: string | boolean;
    tsconfigDirectory?: string | boolean;
    transpileOnly?: boolean;
    reportDiagnostics?: boolean;
}
