import { FileSystemAdapter, FileView, TFile } from "obsidian";

import 'kicanvas/kicanvas.js';

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
		const container = this.containerEl.children[1];
        container.empty();
	}

    async onLoadFile(file: TFile) {
        let contents = await this.app.vault.cachedRead(file);
        console.log(contents);
        const container = this.containerEl.children[1];
        container.createEl("kicanvas-embed", { attr: {"src": ""}});
    }

	async onClose() {
	}
}