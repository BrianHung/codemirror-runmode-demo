import {xmlLanguage} from "@codemirror/lang-xml"
import {runmode, appendToDOM} from "./runmode"

/* if you want to use a legacy mode, do this instead:
import {xml} from "@codemirror/legacy-modes/mode/xml"
import {StreamLanguage} from "@codemirror/stream-parser"
const xmlLanguage = StreamLanguage.define(xml);
*/

import {defaultHighlightStyle} from "@codemirror/highlight"
import {StyleModule} from "style-mod"

export function highlight() {
  const textContent = (document.getElementById("code") as HTMLTextAreaElement).value;
  const output = document.getElementById("output");
  StyleModule.mount(document, defaultHighlightStyle.module)
  runmode(textContent, xmlLanguage, appendToDOM(output))
}