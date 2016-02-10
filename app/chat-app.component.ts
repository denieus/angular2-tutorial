import {Component} from 'angular2/core';
import {ChatDisplayComponent} from './chat-display.component';
import {ChatInputComponent} from './chat-input.component'

@Component({
    selector: 'chat-app',
    template : `
        <div class="container">
            <h3 class="text-center">Chat App — Made in Angular 2</h3>
            <div [hidden]="!hasUsername">
				<div class="row">
					<chat-display></chat-display>
				</div>
			 
				<div class="row">
					<chat-input [username]="username"></chat-input>
				</div>
			</div>
			<div [hidden]="hasUsername">
				<div class="input-group">
					<input [(ngModel)]="username" class="form-control" (keypress)="verifyKey($event)" type="text" placeholder="Insert your username here…">
					<span class="input-group-btn">
						<button class="btn btn-primary" type="button" (click)="register()">Register</button>
					</span>
				</div>
			</div>
        </div>
    `,
    directives : [ChatDisplayComponent, ChatInputComponent]
})

export class ChatAppComponent { 
	private username : string;
	private hasUsername = false;
	
	register() {
		if(this.username) {
			this.hasUsername = true;
		} else {
			this.hasUsername = false;
		}
	}

	verifyKey(event) {
		if(event.keyCode == 13) {
			this.register();
		}
	}
}