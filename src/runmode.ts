import {Language} from "@codemirror/language"
import {highlightTree, defaultHighlightStyle} from "@codemirror/highlight"

export function runmode(textContent: string, language: Language, callback: (text: string, style: string, from: number, to: number) => void, options?: Record<string, any>) {
  const tree = language.parseString(textContent);
  highlightTree(tree, defaultHighlightStyle.match, (from, to, classes) => callback(textContent.slice(from, to), classes, from, to));
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