import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';

@Component({
    selector: 'footnote',
    templateUrl: './footnote.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FootnoteComponent implements OnChanges, OnDestroy {
    @Input() footnote: string;
    @Input() footnotes: Map<string, { ref: string, count: number }> = new Map();
    @Output() footnotesChange: EventEmitter<Map<string, { ref: string, count: number }>> = new EventEmitter();

    public ref = '';
    public refPrefix = '\\footref&#123';
    public refSuffix = '&#125';

    ngOnChanges() {
        // TODO check for FootnoteChange
        if (this.footnote) {
            if (this.footnotes.has(this.footnote)) {
                this.footnotes.set(this.footnote, {
                    ref: this.footnotes.get(this.footnote).ref,
                    count: this.footnotes.get(this.footnote).count + 1
                });
                this.ref = this.footnotes.get(this.footnote).ref;
            } else {
                const ref = ('uc' + this.footnotes.size + Math.random() * 100000).toString().substr(0, 7);
                this.footnotes.set(this.footnote, {
                    ref: ref,
                    count: 1
                });
                this.ref = ref;
            }
            this.footnotesChange.emit(this.footnotes);
        }
    }

    ngOnDestroy() {
        if (this.footnote) {
            if (this.footnotes.has(this.footnote)) {
                let footnote: { ref: string, count: number } = this.footnotes.get(this.footnote);
                if (footnote.count == 1) {
                    this.footnotes.delete(this.footnote);
                } else {
                    this.footnotes.set(this.footnote, {
                        ref: footnote.ref,
                        count: footnote.count - 1
                    });
                }
            }
        }
        this.footnotesChange.emit(this.footnotes);
    }
}