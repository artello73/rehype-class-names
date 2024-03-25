import type { Plugin } from 'unified';
import type { Root } from 'hast';
import type { Conditional } from 'hast-util-classnames';
export interface Options {
    [selector: string]: Conditional;
}
declare const rehypeClassNames: Plugin<[(Options | null | undefined)?], Root>;
export default rehypeClassNames;
