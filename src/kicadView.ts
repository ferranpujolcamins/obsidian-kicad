import { FileView } from "obsidian";

export const VIEW_TYPE_KICAD = "kicad-view";

export class KicadView extends FileView {

	clear() {}

	getViewType() {
		return VIEW_TYPE_KICAD;
	}

	getIcon() {
		return "ketcher";
	}

	getDisplayText() {
		return this.file?.basename ?? "kicad";
	}

	async onOpen() {
	}

	async onClose() {
	}
}