import type { Plugin } from 'unified';
import type { Element, Nodes, Root } from 'hast';
import { selectAll } from 'hast-util-select';
import { classnames, type Conditional } from 'hast-util-classnames';

export interface Options {
  [selector: string]: Conditional;
}

type Entry = [string, Conditional];

const rehypeClassNames: Plugin<[(Options | null | undefined)?], Root> = (additions: Options | null | undefined) => {
  return (tree: Nodes) => {
    if (additions)
      Object.entries(additions).map(([selector, cName]: Entry) => {
        return (nodes: Nodes) =>
          selectAll(selector, nodes).forEach((elem: Element) => {
            classnames(elem, cName);
          });
      }).forEach((a) => a(tree))
  }
}

export default rehypeClassNames;
