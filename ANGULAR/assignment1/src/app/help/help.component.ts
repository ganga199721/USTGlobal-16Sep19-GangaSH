import { Component } from '@angular/core';

@Component({
    selector : 'app-help',
    templateUrl : './help.component.html',
    styleUrls : ['./help.component.css']
})


export class HelpComponent {
    color='red'
    backColor='blue'
    isActive=true;
constructor() {
    setInterval(()=>{
        this.isActive=!this.isActive;
    },1000)
}
}
