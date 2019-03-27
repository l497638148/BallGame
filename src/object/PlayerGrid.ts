class PlayerGrid extends GridBase{

	public constructor(gridWidth:number = 100,gridHeight:number = 20,gridScale:number = 1,gridColor:number = 0xffffff,gridAlpha:number = 1) {
		super();
		//设置锚点为中心点
		this.anchorOffsetX = this.width * 0.5;
		this.anchorOffsetY = this.height * 0.5;

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
	}

	private onTouch(e:egret.TouchEvent)
	{
		console.log("playerGrid be touched");
	}

	public moveFun(){
		
	}
}