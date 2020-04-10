import Controller from '@ember/controller';
import fetch from 'fetch';
import ENV from 'squared-up/config/environment';

export default Controller.extend({
    email: "",
    password: "",

    actions: {
        signup() {
            let url = `${ENV.APP.BACKEND}/users`;
            fetch(url, { method:"post", body: {
                "email": this.email,
                "password": this.password
                }
            })
        }
    }
});