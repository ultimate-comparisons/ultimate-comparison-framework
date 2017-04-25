/**
 * Created by armin on 25.04.17.
 */
export class ColorDictionary {
    private colorDict: {[label: string]: string} = {};

    public pushColor(label: string, color: string) {
        this.colorDict[label] = color;
    }

    public getColor(label: string): string {
        if (this.colorDict[label]) {
            return this.colorDict[label];
        } else {
            return "";
        }
    }
}