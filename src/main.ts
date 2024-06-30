import { App, Editor, MarkdownView, Plugin } from 'obsidian';

import { KicadView, VIEW_TYPE_KICAD } from "./kicadView";
import KicadPluginSettingsTab from "./settingsTab";

interface PluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: PluginSettings = {
	mySetting: 'default'
}

export default class ObsidianKicad extends Plugin {
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(VIEW_TYPE_KICAD, (leaf) => new KicadView(leaf));
		this.registerExtensions(["kicad_sch"], VIEW_TYPE_KICAD);

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new KicadPluginSettingsTab(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}