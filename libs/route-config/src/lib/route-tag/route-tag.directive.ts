import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { RouteConfigService } from '../route-config.service';

@Directive({ selector: '[tdRouteTag]' })
export class RouteTagDirective<CThen, CElse, RouteTags extends string = string>
  implements OnInit, OnDestroy {
  private tags$ = new BehaviorSubject<RouteTags[]>([]);
  private elseTemplate$ = new BehaviorSubject<TemplateRef<CElse> | null>(null);
  private destroy$ = new Subject();

  private display$ = combineLatest([
    this.tags$,
    this.routeTagService.getLeafConfig('routeTags', []),
  ]).pipe(
    map(([tags, routeTags]) => !!tags.find((tag: RouteTags) => routeTags.includes(tag))),
    distinctUntilChanged()
  );

  private createView$ = combineLatest([this.display$, this.elseTemplate$]).pipe(
    tap(() => this.entry.clear()),
    tap(([show, elseTemplate]) =>
      show
        ? void this.entry.createEmbeddedView(this.template)
        : void (elseTemplate && this.entry.createEmbeddedView(elseTemplate))
    )
  );

  @Input()
  set tdRouteTag(tags: RouteTags | RouteTags[]) {
    const tagArray = Array.isArray(tags) ? tags : [tags];
    this.tags$.next(tagArray);
  }

  @Input()
  set tdRouteTagElse(elseTemplate: TemplateRef<CElse>) {
    this.elseTemplate$.next(elseTemplate);
  }

  constructor(
    private routeTagService: RouteConfigService,
    private template: TemplateRef<CThen>,
    private entry: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.createView$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
