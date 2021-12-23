import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ViewChild('warn1', { static: true }) warn1: TemplateRef<any>;
  @ViewChild('warn2', { static: true }) warn2: TemplateRef<any>;

  templateRefMap: { [key: string]: TemplateRef<any> };
  warnsGroups$ = new BehaviorSubject(null);

  constructor(private api: RestServiceService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.templateRefMap = {
      Warn1: this.warn1,
      Warn2: this.warn2,
    };
  }

  makeRequestAndHandle() {
    this.api
      .request()
      .pipe(map((response) => this.handleRequest(response)))
      .subscribe({
        next: (warns) => this.warnsGroups$.next(warns),
      });
  }

  handleRequest(response: any) {
    const warningGroups = [
      {
        template: this.warn1,
        warnings: response.warn1 ?? [],
      },
      {
        template: this.warn2,
        warnings: response.warn2 ?? [],
      },
    ];
    return warningGroups;
  }
}
