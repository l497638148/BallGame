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
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(color, radius, speed, scale, alpha) {
        if (color === void 0) { color = 0x000000; }
        if (radius === void 0) { radius = 10; }
        if (speed === void 0) { speed = 1; }
        if (scale === void 0) { scale = 1; }
        if (alpha === void 0) { alpha = 1; }
        var _this = _super.call(this) || this;
        _this._color = color;
        _this._radius = radius;
        _this._moveSpeed = speed;
        _this._scale = scale;
        _this._alpha = alpha;
        _this.drawCircle();
        return _this;
    }
    Ball.prototype.drawCircle = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(this._color, this._alpha);
        shape.graphics.drawCircle(0, 0, this._radius);
        shape.graphics.endFill();
        shape.scaleX = shape.scaleY = this._scale;
        this.addChild(shape);
    };
    return Ball;
}(egret.DisplayObjectContainer));
__reflect(Ball.prototype, "Ball");
//# sourceMappingURL=Ball.js.map