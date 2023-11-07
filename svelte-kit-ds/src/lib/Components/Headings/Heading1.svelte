<script>
	/**
	 * @type {('div'|'span'|'label')} selectedElement
	 */
	export let selectedElement;
</script>

<svelte:element this={selectedElement} class="font-bold text-lg text-blue-800"
	><slot /></svelte:element
>
