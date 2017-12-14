import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SanitizerPipe } from "./sanitizer-pipe/sanitizer.pipe";

@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [
        SanitizerPipe
    ],
    declarations: [
        SanitizerPipe
    ],
    providers: [
        SanitizerPipe
    ]
})
export class PipesModule {
}