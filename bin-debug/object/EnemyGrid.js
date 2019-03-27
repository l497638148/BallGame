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
var EnemyGrid = (function (_super) {
    __extends(EnemyGrid, _super);
    function EnemyGrid(gridWidth, gridHeight, gridScale, gridColor, gridAlpha, life) {
        if (gridWidth === void 0) { gridWidth = 100; }
        if (gridHeight === void 0) { gridHeight = 20; }
        if (gridScale === void 0) { gridScale = 1; }
        if (gridColor === void 0) { gridColor = 0xffffff; }
        if (gridAlpha === void 0) { gridAlpha = 1; }
        if (life === void 0) { life = 1; }
        return _super.call(this) || this;
    }
    EnemyGrid.prototype.distroy = function () {
    };
    return EnemyGrid;
}(GridBase));
__reflect(EnemyGrid.prototype, "EnemyGrid");
//# sourceMappingURL=EnemyGrid.js.map