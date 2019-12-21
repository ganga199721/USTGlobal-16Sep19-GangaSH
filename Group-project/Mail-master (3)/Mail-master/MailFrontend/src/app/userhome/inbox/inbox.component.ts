import { Component, OnInit } from '@angular/core';
import { InboxService } from 'src/app/inbox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private inbox: InboxService, private router: Router) {
    this.inboxEmails();
   }
   selectedEmail;
msg;
mail;
  ngOnInit() {
   this.inboxEmails();
  }
  inboxEmails() {
    this.msg = null;
    this.inbox.getInbox().subscribe(Data => {
      this.msg = Data.description;
      console.log('Response of inbox', Data);
      if (Data && Data.discription === 'mail are present') {
        this.mail=Data.mailb;
        
        localStorage.setItem('userDetails', JSON.stringify(Data))
        this.router.navigateByUrl('/inbox')
      }
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    })
  }
  

  confirm(email){
    this.selectedEmail=email;
  }
  delete(email){
    this.msg = null;
    console.log(email.from_id)
    this.inbox.delete(email.from_id).subscribe(Data => {
      this.msg = Data.description;
      console.log('Response of inbox', Data);
      if (Data && Data.discription === 'mail deleted') {
        this.mail=Data.mailb;
        localStorage.setItem('userDetails', JSON.stringify(Data))
        this.router.navigateByUrl('/inbox')
        this.msg = 'mail deleted';
      }
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    })
  }
}
