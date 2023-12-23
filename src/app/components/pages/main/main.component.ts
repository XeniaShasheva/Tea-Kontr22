import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public observable: Observable<boolean>
  public popup = false
  private subscribtion: Subscription |null = null

  public question = [
    true,
    false,
    false,
    false,
    false
  ]

  constructor() {
    this.observable = new Observable((observer) => {
      let timeout = setTimeout(() => {
        observer.next(this.popup = true)
      }, 3000)
      return{
        unsubscribe(){
          clearTimeout(timeout)
        }
      }
    })
  }

  ngOnInit() {
    this.subscribtion = this.observable
      .subscribe({
        next:((param:boolean)=>{
          console.log(param)
        })
      })
  }

  questionsShow(event:any) {
    for(let i = 0;i<this.question.length;i++){
      this.question[i]=false
    }

    if(event.target){
      let id = (event.target as HTMLElement).getAttribute('id')
      this.question[Number(id)]=true
    }
  }
}
