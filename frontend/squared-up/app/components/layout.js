import Component from '@ember/component';

export default class extends Component {
  classNames = ['layout'];
  
  clickX = -1;
  clickY = -1;
  minX = 0;
  minY = 0;
  maxX = 0;
  maxY = 0;
  dragging = false;
  rectId = -1;

  didRender() {
    this._super(...arguments);
    
    this.minX = this.element.offsetLeft;
  	this.minY = this.element.offsetTop;
    this.maxX = this.minX + this.element.width;
    this.maxY = this.minY + this.element.height;
  }


	mouseDown(event) {
    this.clickX = event.pageX - this.minX;
    this.clickY = event.pageY - this.minY;
    
    let selectedRectangle = event.target.classList.contains('rectangle');
    let rightClick = event.which == 3;
    
    if (selectedRectangle) {
      if (rightClick) {
        this.deleteRectangle(event.target.id);
      } else {
        this.dragging = true;
        this.rectId = event.target.id;
      }
    }
  }

	mouseUp(event) {
    let x = event.pageX - this.minX;
    let y = event.pageY - this.minY;
    
    if (this.dragging) {
      let distX = x - this.clickX;
      let distY = y - this.clickY;
      
      this.updateRectangle(this.rectId, distX, distY);
    } else {
      let rect = {
        startX: Math.max(0, Math.min(this.clickX, x)),
        startY: Math.max(0, Math.min(this.clickY, y)),
        endX: Math.max(this.clickX, x),
        endY: Math.max(this.clickY, y),
        color: 'blue'
      }
      
      this.addRectangle(rect);
    }
    
		this.dragging = false;
    this.clickX = -1;
    this.clickY = -1;
  }
}