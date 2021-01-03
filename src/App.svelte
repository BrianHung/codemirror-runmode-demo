<script lang="ts">
	import { highlight } from "./highlight"
</script>
<main>
	<h2>CodeMirror 6 Runmode Demo</h2>
	<textarea id="code"><foobar>
  <blah>
    Enter your xml here and press the button below to display
    it as highlighted by the CodeMirror XML mode.
  </blah>
  <tag foo="bar" bar="foo"/>
</foobar></textarea>
	<button on:click={() => highlight()}>Highlight!</button>
	<div>
		<pre id="output" class="cm-s-default"></pre>
	</div>
</main>