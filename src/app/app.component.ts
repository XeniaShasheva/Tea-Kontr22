import {Component, inject, OnInit} from '@angular/core';
import {HotToastService} from "@ngneat/hot-toast";
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  private toastService = inject(HotToastService);
   ngOnInit() {
    //
    // $('#inputPhone').bind("change keyup input click",function() {
    //   if(this.value.match(/[^0-9]/g)){
    //     this.value=this.value.replace(/[^0-9]/g,'');
    //   }
    // });
    //
    //
    // $('#inputIndex').bind("change keyup input click",function() {
    //   if(this.value.match(/[^0-9]/g)){
    //     this.value=this.value.replace(/[^0-9]/g,'');
    //   }
    //   if (this.value.length >= 6) {
    //     this.value = this.value.substr(0, 6);
    //   }
    // });
    //
    //
    // $('#btnForm').click(function (){
    //   if(!$('#inputName').value) {
    //     alert('Name');
    //   }  else if (!$('#inputLastName').value) {
    //     alert('last name');
    //
    //   }
    //
    //   else {
    //     alert('No thanks');
    //   }
    // })
  }

  title = 'Kontr22-tea';


}
