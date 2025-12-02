gdjs.FimCode = {};
gdjs.FimCode.localVariables = [];
gdjs.FimCode.idToCallbackMap = new Map();
gdjs.FimCode.GDNewTileMapObjects1= [];
gdjs.FimCode.GDNewTileMapObjects2= [];
gdjs.FimCode.GDmenu_9595Objects1= [];
gdjs.FimCode.GDmenu_9595Objects2= [];
gdjs.FimCode.GDNewTiledSpriteObjects1= [];
gdjs.FimCode.GDNewTiledSpriteObjects2= [];
gdjs.FimCode.GDbotao_9595Objects1= [];
gdjs.FimCode.GDbotao_9595Objects2= [];


gdjs.FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "fase1");
}
}

}


};

gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDNewTileMapObjects1.length = 0;
gdjs.FimCode.GDNewTileMapObjects2.length = 0;
gdjs.FimCode.GDmenu_9595Objects1.length = 0;
gdjs.FimCode.GDmenu_9595Objects2.length = 0;
gdjs.FimCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FimCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FimCode.GDbotao_9595Objects1.length = 0;
gdjs.FimCode.GDbotao_9595Objects2.length = 0;

gdjs.FimCode.eventsList0(runtimeScene);
gdjs.FimCode.GDNewTileMapObjects1.length = 0;
gdjs.FimCode.GDNewTileMapObjects2.length = 0;
gdjs.FimCode.GDmenu_9595Objects1.length = 0;
gdjs.FimCode.GDmenu_9595Objects2.length = 0;
gdjs.FimCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FimCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FimCode.GDbotao_9595Objects1.length = 0;
gdjs.FimCode.GDbotao_9595Objects2.length = 0;


return;

}

gdjs['FimCode'] = gdjs.FimCode;
