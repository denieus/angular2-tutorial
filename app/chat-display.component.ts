import {Component, OnInit} from 'angular2/core';
import {Message} from './message';
import {MessageService} from './message.service';

@Component({
    selector: 'chat-display',
    styles : [`
        .chat-display {
            height : 400px;
            overflow : auto;
        }
    `],
    template : `
         <div class="chat-display thumbnail">
			<div *ngFor="#message of messages">
				<b>{{message.username}}</b>: {{message.content}}
			</div>
         </div>
     `,
	 providers : [MessageService]
})

export class ChatDisplayComponent implements OnInit {

    private messages : Message[];
 
    constructor(private _messageService : MessageService) {}
	
	ngOnInit() {
		var observable = this._messageService.getMessages();
		observable.subscribe(res => {
			this.messages = res.json();
		});
	}
}