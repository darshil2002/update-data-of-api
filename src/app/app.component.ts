import { Component ,ElementRef,ViewChild,OnInit,AfterViewInit} from '@angular/core';
import { MyServiceService } from './allserv/my-service.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'z';

  @ViewChild('myInput') myInput:ElementRef |undefined;
  items:any[]|undefined;
  constructor(private myserv:MyServiceService ){}

  submitFunc(myInput:string){
    this.myserv.saveData(myInput).subscribe(data=>{
      console.log(data);
    })
  }
  ngOnInit(){
    this.myserv.getData().subscribe((dataOne: any[] | undefined)=>{
      this.items=dataOne;
    })
  }
  changeData(value:any,id:number,myData:string){
    this.myserv.updateValue(id,value.target.checked,myData).subscribe();
  }
}
