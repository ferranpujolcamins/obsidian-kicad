import ObsidianKicad from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export default class KicadPluginSettingsTab extends PluginSettingTab {
	plugin: ObsidianKicad;

	constructor(app: App, plugin: ObsidianKicad) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
