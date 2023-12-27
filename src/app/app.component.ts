import {Component, inject, OnInit} from '@angular/core';
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  private toastService = inject(HotToastService);
   ngOnInit() {
   }

  title = 'Kontr22-tea';


}
