class Ball extends egret.DisplayObjectContainer{

	private _color:number;
	private _radius:number;
	private _moveSpeed:number;
	private _scale:number;
	private _alpha:number;

	public constructor(color:number = 0x000000,radius:number = 10,speed:number = 1,scale:number = 1,alpha:number = 1) {
		super();
		this._color = color;
		this._radius = radius;
		this._moveSpeed = speed;
		this._scale = scale;
		this._alpha = alpha;
		this.drawCircle();
	}

	private drawCircle(){

		var shape = new egret.Shape();
		shape.graphics.beginFill(this._color,this._alpha);
		shape.graphics.drawCircle(0,0,this._radius);
		shape.graphics.endFill();
		shape.scaleX = shape.scaleY = this._scale;
		this.addChild(shape);
	}
}