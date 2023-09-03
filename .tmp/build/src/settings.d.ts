import { formattingSettings } from "powerbi-visuals-utils-formattingmodel-community";
export declare class ColorGroupSettings extends formattingSettings.Group {
    defaultColor: formattingSettings.ColorPicker;
    fill: formattingSettings.ColorPicker;
    fillRule: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices?: formattingSettings.Slice[];
}
declare class FontGroupSettings extends formattingSettings.Group {
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.FontPicker;
    name: string;
    displayName: string;
    slices?: formattingSettings.Slice[];
}
declare class FormattingCardSettings extends formattingSettings.CompositeCard {
    name: string;
    displayName: string;
    fontgroupsSettings: FontGroupSettings;
    colorGroupSettings: ColorGroupSettings;
    groups: formattingSettings.Group[];
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends formattingSettings.Model {
    formattingSettingsCard: FormattingCardSettings;
    cards: FormattingCardSettings[];
}
export {};
