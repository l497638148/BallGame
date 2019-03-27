var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridBase = (function (_super) {
    __extends(GridBase, _super);
    function GridBase(gridWidth, gridHeight, gridScale, gridColor, gridAlpha) {
        if (gridWidth === void 0) { gridWidth = 100; }
        if (gridHeight === void 0) { gridHeight = 20; }
        if (gridScale === void 0) { gridScale = 1; }
        if (gridColor === void 0) { gridColor = 0xffffff; }
        if (gridAlpha === void 0) { gridAlpha = 1; }
        var _this = _super.call(this) || this;
        _this._gridWidth = gridWidth;
        _this._gridHeight = gridHeight;
        _this._gridScale = gridScale;
        _this._gridColor = gridColor;
        _this._gridAlpha = gridAlpha;
        _this.drawGrid();
        return _this;
    }
    GridBase.prototype.drawGrid = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(this._gridColor, this._gridAlpha);
        shape.graphics.drawRect(0, 0, this._gridWidth, this._gridHeight);
        shape.graphics.endFill();
        shape.scaleX = shape.scaleY = this._gridScale;
        this.addChild(shape);
    };
    GridBase.prototype.ontimeupdate = function () {
    };
    return GridBase;
}(egret.DisplayObjectContainer));
__reflect(GridBase.prototype, "GridBase");
//# sourceMappingURL=GridBase.js.map