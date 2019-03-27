class GridBase extends egret.DisplayObjectContainer{
	
	protected _gridScale:number;
	protected _gridWidth:number;
	protected _gridHeight:number; 
	protected _gridColor:number;
	protected _gridAlpha:number;

	public constructor(gridWidth:number = 100,gridHeight:number = 20,gridScale:number = 1,gridColor:number = 0xffffff,gridAlpha:number = 1) {
		super();
		this._gridWidth = gridWidth;
		this._gridHeight = gridHeight;
		this._gridScale = gridScale;
		this._gridColor = gridColor;
		this._gridAlpha = gridAlpha;
		this.drawGrid();
	}

	protected drawGrid(){
		var shape = new egret.Shape();
		shape.graphics.beginFill(this._gridColor,this._gridAlpha);
		shape.graphics.drawRect(0,0,this._gridWidth,this._gridHeight);
		shape.graphics.endFill();
		shape.scaleX = shape.scaleY = this._gridScale;
		this.addChild(shape);
	}

	public ontimeupdate()
	{

	}
}