gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDESTRELAObjects1= [];
gdjs.menuCode.GDESTRELAObjects2= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewTextObjects1= [];
gdjs.menuCode.GDNewTextObjects2= [];
gdjs.menuCode.GDiniciar_9595Objects1= [];
gdjs.menuCode.GDiniciar_9595Objects2= [];
gdjs.menuCode.GDsairObjects1= [];
gdjs.menuCode.GDsairObjects2= [];
gdjs.menuCode.GDbotao_9595Objects1= [];
gdjs.menuCode.GDbotao_9595Objects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("iniciar_"), gdjs.menuCode.GDiniciar_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiniciar_9595Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDiniciar_9595Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiniciar_9595Objects1[k] = gdjs.menuCode.GDiniciar_9595Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDiniciar_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "fase1");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.menuCode.GDsairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDsairObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDsairObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDsairObjects1[k] = gdjs.menuCode.GDsairObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDsairObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDESTRELAObjects1.length = 0;
gdjs.menuCode.GDESTRELAObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDiniciar_9595Objects1.length = 0;
gdjs.menuCode.GDiniciar_9595Objects2.length = 0;
gdjs.menuCode.GDsairObjects1.length = 0;
gdjs.menuCode.GDsairObjects2.length = 0;
gdjs.menuCode.GDbotao_9595Objects1.length = 0;
gdjs.menuCode.GDbotao_9595Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDESTRELAObjects1.length = 0;
gdjs.menuCode.GDESTRELAObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDiniciar_9595Objects1.length = 0;
gdjs.menuCode.GDiniciar_9595Objects2.length = 0;
gdjs.menuCode.GDsairObjects1.length = 0;
gdjs.menuCode.GDsairObjects2.length = 0;
gdjs.menuCode.GDbotao_9595Objects1.length = 0;
gdjs.menuCode.GDbotao_9595Objects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
