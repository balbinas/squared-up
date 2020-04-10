import Controller from '@ember/controller';
import ENV from 'squared-up/config/environment';
import { action } from '@ember/object';
import fetch, { Headers } from 'fetch';

export default class SignupController extends Controller {
    email = '';
    password = '';

    @action
    async signup() {
        let url = `${ENV.APP.BACKEND}/users`;
        let url2 = `${ENV.APP.BACKEND}/sessions`;

        let body = JSON.stringify({
        email: this.email,
        password: this.password
        });

        let headers = new Headers({
        'Content-Type': 'application/json'
        });

        try {
            let response = await fetch(url, { method: 'post', headers, body });
            
            let response2 = await fetch(url2, { method: 'post', headers, body });
      
            // TODO do something with the token
            console.log(response);
            console.log(response2);
      
            return this.transitionToRoute('layouts');
          } catch (e) {
            console.log(e);
          }
  }
}