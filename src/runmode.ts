import {Language} from "@codemirror/language"
import {highlightTree, defaultHighlightStyle} from "@codemirror/highlight"

export function runmode(textContent: string, language: Language, callback: (text: string, style: string, from: number, to: number) => void, options?: Record<string, any>) {
  const tree = language.parseString(textContent);
  let pos = 0;
  highlightTree(tree, defaultHighlightStyle.match, (from, to, classes) => {
    from > pos && callback(textContent.slice(pos, from), null, pos, from);
    callback(textContent.slice(from, to), classes, from, to);
    pos = to;
  });
  pos != tree.length && callback(textContent.slice(pos, tree.length), null, pos, tree.length);
}

export function appendToDOM(parent: HTMLElement, options?: {tabSize?: number}) {
  parent.innerHTML = "";
  return (text: string, style: string) => {
    if (style) {
      var span = parent.appendChild(document.createElement("span"));
      span.className = style;
      span.appendChild(document.createTextNode(text));
    } else {
      parent.appendChild(document.createTextNode(text));
    }
  }
}