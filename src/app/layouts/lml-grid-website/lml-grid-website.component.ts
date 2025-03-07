import { Component, OnInit, signal, computed, inject, effect } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'lml-grid-website',
  templateUrl: './lml-grid-website.component.html',
  imports: [],
})

export class LmlGridWebsiteComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  private columnConfig = signal<Record<string, number>>({
    '(max-width: 639px)': 4,
    '(min-width: 640px) and (max-width: 767px)': 6,
    '(min-width: 768px) and (max-width: 1023px)': 8,
    '(min-width: 1024px) and (max-width: 1279px)': 10,
    '(min-width: 1280px)': 12
  });

  currentColumns = signal<number>(12);

  columns = computed(() => {
    const cols = this.currentColumns();
    const width = `${100 / cols}%`;
    
    return Array(cols).fill(null).map(() => ({
      width: width
    }));
  });

  constructor() {
    effect(() => {
      console.log(`Current columns: ${this.currentColumns()}`);
    });
  }

  ngOnInit() {
    this.observeBreakpoints();
  }

  private observeBreakpoints() {
    this.breakpointObserver.observe(Object.keys(this.columnConfig()))
      .subscribe((state) => {
        for (const [query, matches] of Object.entries(state.breakpoints)) {
          if (matches) {
            this.currentColumns.set(this.columnConfig()[query]);
            console.log(`Breakpoint matched: ${query}, Columns: ${this.columnConfig()[query]}`);
            break;
          }
        }
      });
  }
}