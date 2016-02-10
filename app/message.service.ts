import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Http, Headers} from 'angular2/http';
import {Message} from './message';

@Injectable()
export class MessageService {

    constructor(private _http: Http) {}
	
	insertMessage(message : Message) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this._http.post('message', JSON.stringify(message), {
            headers : headers
        }).subscribe();
    }
	
	getMessages() {
        return Observable.interval(100).flatMap(() => this._http.get('messages'));
    }

}