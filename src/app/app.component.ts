import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { tap, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http-service';
  colors$ = this.httpService.getStaticJsonFile$().pipe(
    tap((colors) => console.log(colors))
  );

  constructor(
    private readonly httpService: HttpService
  ) {}


}
