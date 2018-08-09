import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync } from "fs";
import * as path from "path";

export function deleteFolderRecursive(folder) {
    if (existsSync(folder)) {
        readdirSync(folder).forEach(function (file) {
            const curPath = path.join(folder, file);
            if (lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                unlinkSync(curPath);
            }
        });
        rmdirSync(folder);
    }
}
