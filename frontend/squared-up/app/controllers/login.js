import Controller from '@ember/controller';
import ENV from 'squared-up/config/environment';
import { action } from '@ember/object';
import fetch, { Headers } from 'fetch';

export default class LoginController extends Controller {
    email = '';
    password = '';

    @action
        async login() {
            let url = `${ENV.APP.BACKEND}/sessions`;

            let body = JSON.stringify({
                email: this.email,
                password: this.password
                });
        
                let headers = new Headers({
                'Content-Type': 'application/json'
                });

                try {
                    let response = await fetch(url, { method: 'post', headers, body });
              
                    // TODO do something with the token
                    // console.log(response);
              
                    return this.transitionToRoute('layouts');
                  } catch (e) {
                    console.log(e);
                  }
        }
}