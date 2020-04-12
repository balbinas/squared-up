import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';
import fetch, { Headers } from 'fetch';
import ENV from 'squared-up/config/environment';


export default class LayoutController extends Controller {

	@tracked
  rectangles = this.model

	@action
  async addRectangle(rect) {

    let url = `${ENV.APP.BACKEND}/rectangles`;
    console.log("this model", this.model)

    let body = JSON.stringify({
        startX: rect.startX,
        endX: rect.endX,
        startY: rect.startY,
        endY: rect.endY,
        color: rect.color,
        layout_id: 1
    });
    console.log({body})

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth-token')
    });

    try {
        let response = await fetch(url, { method: 'post', headers, body });

      } catch (e) {
        console.log(e);
      }
  }

  @action
  async updateRectangle(id, distX, distY) {
    let rectId = -1;
    
    for (rectId = 0; rectId < this.rectangles.length; rectId++) {
      if (id == this.rectangles[rectId].id) {
        break; 
      }
    };
    let ogRect = this.rectangles[rectId];
    
    set(ogRect, 'startX', ogRect.startX + distX);
    set(ogRect, 'startY', ogRect.startY + distY);
    set(ogRect, 'endX', ogRect.endX + distX);
    set(ogRect, 'endY', ogRect.endY + distY);

    let url = `${ENV.APP.BACKEND}/rectangles/${rectId}`;

    let body = JSON.stringify({
        startX: ogRect.startX,
        endX: ogRect.endX,
        startY: ogRect.startY,
        endY: ogRect.endY,
        color: ogRect.color
    });

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth-token')
    });

    try {
        let response = await fetch(url, { method: 'patch', headers, body });
      } catch (e) {
        console.log(e);
      }
  }

  // @action
  // saveRectangles() {

  // }

  @action
  deleteRectangle(id) {
    let rectId = -1;
    
    for (rectId = 0; rectId < this.rectangles.length; rectId++) {
      if (id == this.rectangles[rectId].id) {
        break; 
      }
    };
    
    let url = `${ENV.APP.BACKEND}/rectangles/${id}`;

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth-token')
    });

    try {
        let response = fetch(url, { method: 'delete', headers });
        console.log(response)
  
        // let json = await response.json();
        // let localStorage = window.localStorage;
        // localStorage.setItem('auth-token', json.token);
  
        // return this.transitionToRoute('layouts');
      } catch (e) {
        console.log(e);
      }

    this.rectangles.splice(rectId, 1);
  }
}
