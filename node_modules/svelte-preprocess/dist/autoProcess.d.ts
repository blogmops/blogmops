import { PreprocessorGroup, TransformerOptions, Options } from './typings';
interface Transformers {
    typescript?: TransformerOptions<Options.Typescript>;
    scss?: TransformerOptions<Options.Sass>;
    sass?: TransformerOptions<Options.Sass>;
    less?: TransformerOptions<Options.Less>;
    stylus?: TransformerOptions<Options.Stylus>;
    postcss?: TransformerOptions<Options.Postcss>;
    coffeescript?: TransformerOptions<Options.Coffeescript>;
    pug?: TransformerOptions<Options.Pug>;
    globalStyle?: TransformerOptions<Options.Typescript>;
    [languageName: string]: TransformerOptions<any>;
}
declare type AutoPreprocessOptions = {
    /** @deprecated for svelte v3 use instead a array of processors */
    onBefore?: ({ content, filename, }: {
        content: string;
        filename: string;
    }) => Promise<string> | string;
    markupTagName?: string;
    /** @deprecated add transformer config directly to svelte-preprocess options object */
    transformers?: Transformers;
    aliases?: [string, string][];
    preserve?: string[];
    typescript?: TransformerOptions<Options.Typescript>;
    scss?: TransformerOptions<Options.Sass>;
    sass?: TransformerOptions<Options.Sass>;
    less?: TransformerOptions<Options.Less>;
    stylus?: TransformerOptions<Options.Stylus>;
    postcss?: TransformerOptions<Options.Postcss>;
    coffeescript?: TransformerOptions<Options.Coffeescript>;
    pug?: TransformerOptions<Options.Pug>;
    globalStyle?: TransformerOptions<Options.Typescript>;
    [languageName: string]: string | Promise<string> | [string, string][] | string[] | TransformerOptions<any>;
};
export declare function autoPreprocess({ onBefore, aliases, markupTagName, preserve, ...rest }?: AutoPreprocessOptions): PreprocessorGroup;
export {};
