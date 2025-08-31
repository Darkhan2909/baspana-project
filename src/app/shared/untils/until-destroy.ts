import { Subject, takeUntil } from 'rxjs';
import { OnDestroy } from '@angular/core';

export function withDestroy<T extends { new (...args: any[]): {} }>(Base: T) {
  return class extends Base implements OnDestroy {
    private readonly destroy$ = new Subject<void>();

    protected untilDestroy<T>() {
      return takeUntil<T>(this.destroy$);
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  };
}
