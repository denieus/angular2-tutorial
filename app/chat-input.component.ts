import {Component} from 'angular2/core';
import {MessageService} from './message.service';

@Component({
    selector: 'chat-input',
     template : `
         <div class="input-group">
             <span class="input-group-addon" id="sizing-addon1">{{username}}</span>
            <input [(ngModel)]="content" class="form-control" (keypress)="verifyKey($event)" type="text" placeholder="Insert your message here…">
			<span class="input-group-btn">
				<button class="btn btn-primary" type="button" (click)="sendMessage()">Send message</button>
			</span>
         </div>
     `,
    inputs : ['username'],
	providers : [MessageService]
})

export class ChatInputComponent {
    private username = 'Default username';
	private content : string;
	
	constructor(private _messageService : MessageService) {}
 
	sendMessage() {
		this._messageService.insertMessage({
			username : this.username,
			content : this.content
		});
		this.content = '';
	}

	verifyKey(event) {
		if(event.keyCode == 13) {
			this.sendMessage();
		}
	}
}