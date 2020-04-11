import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked
	autoId = 3;

	@tracked
  rectangles = [
    {id: 1, startX: 0, startY: 0, endX: 100, endY: 100, color: 'red'},
    {id: 2, startX: 300, startY: 300, endX: 500, endY: 500, color: 'green'}
  ];

	@action
  addRectangle(rect) {
    rect.id = this.autoId;
    this.autoId++;
    
    this.rectangles.push(rect);
    
    this.rectangles = this.rectangles;
  }

  @action
  updateRectangle(id, distX, distY) {
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
  }

  @action
  deleteRectangle(id) {
    let rectId = -1;
    
    for (rectId = 0; rectId < this.rectangles.length; rectId++) {
      if (id == this.rectangles[rectId].id) {
        break; 
      }
    };
    
    this.rectangles.splice(rectId, 1);
		// this.rectangles = this.rectangles;
  }
}
