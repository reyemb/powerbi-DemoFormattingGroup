/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import { formattingSettings} from "powerbi-visuals-utils-formattingmodel-community";

// Color group settings
export class ColorGroupSettings extends formattingSettings.Group{
    defaultColor = new formattingSettings.ColorPicker({
        name: "defaultColor",
        displayName: "Default color",
        value: { value: "" }
    }); 
    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Fill",
        value: { value: "" }
    });

    fillRule = new formattingSettings.ColorPicker({
        name: "fillRule",
        displayName: "Color saturation",
        value: { value: "" }
    });
    name: string = "color";
    displayName: string = "Color Settings";
    slices?: formattingSettings.Slice[] = [this.defaultColor, this.fill, this.fillRule];
}

// Font group settings
class FontGroupSettings extends formattingSettings.Group{
    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Text Size",
        value: 12
    });
    fontFamily = new formattingSettings.FontPicker({
        name: "fontFamily",
        displayName: "Font",
        value: "Arial"
    });
    name: string = "font";
    displayName: string = "Font Settings";
    slices?: formattingSettings.Slice[] = [this.fontSize, this.fontFamily];
}

class FormattingCardSettings extends formattingSettings.CompositeCard {
    name: string = "formatting";
    displayName: string = "Formatting Settings";
    fontgroupsSettings = new FontGroupSettings(Object());
    colorGroupSettings = new ColorGroupSettings(Object());
    groups: formattingSettings.Group[] = [this.fontgroupsSettings, this.colorGroupSettings];
}

/**
* visual settings model class
*
*/
export class VisualFormattingSettingsModel extends formattingSettings.Model {
    formattingSettingsCard = new FormattingCardSettings();
    cards = [this.formattingSettingsCard];
}
