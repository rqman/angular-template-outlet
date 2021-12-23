import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestServiceService {
  constructor() {}

  request() {
    return of({
      info1: 'info 1',
      info2: 'info 2',
      warn1: [{ data: 'warn 1 1' }, { data: 'warn 1 2' }],
      warn2: [
        { title: 'warn 2 1', code: 100500 },
        { title: 'warn 2 2', code: 100500 },
      ],
    });
  }
}
