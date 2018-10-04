gdjs.IngameCode = {};
gdjs.IngameCode.GDgirlObjObjects1= [];
gdjs.IngameCode.GDgirlObjObjects2= [];
gdjs.IngameCode.GDgirlObjObjects3= [];
gdjs.IngameCode.GDbgObjects1= [];
gdjs.IngameCode.GDbgObjects2= [];
gdjs.IngameCode.GDbgObjects3= [];
gdjs.IngameCode.GDhpTextObjects1= [];
gdjs.IngameCode.GDhpTextObjects2= [];
gdjs.IngameCode.GDhpTextObjects3= [];
gdjs.IngameCode.GDscoreTextObjects1= [];
gdjs.IngameCode.GDscoreTextObjects2= [];
gdjs.IngameCode.GDscoreTextObjects3= [];
gdjs.IngameCode.GDleftArrowObjects1= [];
gdjs.IngameCode.GDleftArrowObjects2= [];
gdjs.IngameCode.GDleftArrowObjects3= [];
gdjs.IngameCode.GDaidBagObjects1= [];
gdjs.IngameCode.GDaidBagObjects2= [];
gdjs.IngameCode.GDaidBagObjects3= [];
gdjs.IngameCode.GDadsButtonObjects1= [];
gdjs.IngameCode.GDadsButtonObjects2= [];
gdjs.IngameCode.GDadsButtonObjects3= [];
gdjs.IngameCode.GDadsTextObjects1= [];
gdjs.IngameCode.GDadsTextObjects2= [];
gdjs.IngameCode.GDadsTextObjects3= [];
gdjs.IngameCode.GDbubbleObjects1= [];
gdjs.IngameCode.GDbubbleObjects2= [];
gdjs.IngameCode.GDbubbleObjects3= [];
gdjs.IngameCode.GDadsTextInObjects1= [];
gdjs.IngameCode.GDadsTextInObjects2= [];
gdjs.IngameCode.GDadsTextInObjects3= [];
gdjs.IngameCode.GDNewObjectObjects1= [];
gdjs.IngameCode.GDNewObjectObjects2= [];
gdjs.IngameCode.GDNewObjectObjects3= [];

gdjs.IngameCode.conditionTrue_0 = {val:false};
gdjs.IngameCode.condition0IsTrue_0 = {val:false};
gdjs.IngameCode.condition1IsTrue_0 = {val:false};
gdjs.IngameCode.condition2IsTrue_0 = {val:false};
gdjs.IngameCode.condition3IsTrue_0 = {val:false};
gdjs.IngameCode.condition4IsTrue_0 = {val:false};


gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDgirlObjObjects1Objects = Hashtable.newFrom({"girlObj": gdjs.IngameCode.GDgirlObjObjects1});gdjs.IngameCode.eventsList0x564c5e8 = function(runtimeScene) {

{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("girlHp")) <= 0;
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
gdjs.IngameCode.GDgirlObjObjects2.createFrom(gdjs.IngameCode.GDgirlObjObjects1);

gdjs.IngameCode.GDhpTextObjects2.createFrom(gdjs.IngameCode.GDhpTextObjects1);

{runtimeScene.getVariables().get("girlHp").setNumber(0);
}{for(var i = 0, len = gdjs.IngameCode.GDhpTextObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDhpTextObjects2[i].setString("HP:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("girlHp")));
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects2[i].setAnimationName("dead");
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects2[i].playAnimation();
}
}{runtimeScene.getVariables().get("isDead").setNumber(1);
}}

}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("girlHp")) <= 5;
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
gdjs.IngameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("level")) == 0;
}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("level").setNumber(1);
}}

}


}; //End of gdjs.IngameCode.eventsList0x564c5e8
gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDleftArrowObjects2Objects = Hashtable.newFrom({"leftArrow": gdjs.IngameCode.GDleftArrowObjects2});gdjs.IngameCode.eventsList0x565d688 = function(runtimeScene) {

{

/* Reuse gdjs.IngameCode.GDleftArrowObjects2 */

gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
gdjs.IngameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDleftArrowObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
gdjs.IngameCode.GDgirlObjObjects2.createFrom(runtimeScene.getObjects("girlObj"));
/* Reuse gdjs.IngameCode.GDleftArrowObjects2 */
{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects2[i].setAnimationName("walk");
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects2[i].playAnimation();
}
}{runtimeScene.getVariables().get("level").setNumber(2);
}{for(var i = 0, len = gdjs.IngameCode.GDleftArrowObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDleftArrowObjects2[i].hide();
}
}}

}


}; //End of gdjs.IngameCode.eventsList0x565d688
gdjs.IngameCode.eventsList0x565d560 = function(runtimeScene) {

{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > 600;
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
gdjs.IngameCode.GDleftArrowObjects2.createFrom(runtimeScene.getObjects("leftArrow"));
{for(var i = 0, len = gdjs.IngameCode.GDleftArrowObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDleftArrowObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.IngameCode.eventsList0x565d688(runtimeScene);} //End of subevents
}

}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) <= 600;
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
gdjs.IngameCode.GDleftArrowObjects1.createFrom(runtimeScene.getObjects("leftArrow"));
{for(var i = 0, len = gdjs.IngameCode.GDleftArrowObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDleftArrowObjects1[i].hide();
}
}}

}


}; //End of gdjs.IngameCode.eventsList0x565d560
gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDgirlObjObjects1Objects = Hashtable.newFrom({"girlObj": gdjs.IngameCode.GDgirlObjObjects1});gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDaidBagObjects1Objects = Hashtable.newFrom({"aidBag": gdjs.IngameCode.GDaidBagObjects1});gdjs.IngameCode.eventsList0x5649b70 = function(runtimeScene) {

{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isBagMove")) == 0;
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
gdjs.IngameCode.GDaidBagObjects2.createFrom(runtimeScene.getObjects("aidBag"));
{for(var i = 0, len = gdjs.IngameCode.GDaidBagObjects2.length ;i < len;++i) {
    gdjs.IngameCode.GDaidBagObjects2[i].addForceTowardPosition(0, 228, 200, 0);
}
}}

}


{

gdjs.IngameCode.GDaidBagObjects1.createFrom(runtimeScene.getObjects("aidBag"));
gdjs.IngameCode.GDgirlObjObjects1.createFrom(runtimeScene.getObjects("girlObj"));

gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDgirlObjObjects1Objects, gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDaidBagObjects1Objects, false, runtimeScene);
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IngameCode.GDaidBagObjects1 */
/* Reuse gdjs.IngameCode.GDgirlObjObjects1 */
gdjs.IngameCode.GDhpTextObjects1.createFrom(runtimeScene.getObjects("hpText"));
{runtimeScene.getVariables().get("isBagMove").setNumber(1);
}{for(var i = 0, len = gdjs.IngameCode.GDaidBagObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDaidBagObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("girlHp").add(5);
}{runtimeScene.getVariables().get("level").setNumber(3);
}{for(var i = 0, len = gdjs.IngameCode.GDhpTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDhpTextObjects1[i].setString("HP:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("girlHp")));
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].playAnimation();
}
}}

}


}; //End of gdjs.IngameCode.eventsList0x5649b70
gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDadsButtonObjects1Objects = Hashtable.newFrom({"adsButton": gdjs.IngameCode.GDadsButtonObjects1});gdjs.IngameCode.eventsList0x66f648 = function(runtimeScene) {

{

/* Reuse gdjs.IngameCode.GDadsButtonObjects1 */

gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDadsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
gdjs.IngameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IngameCode.GDadsButtonObjects1 */
/* Reuse gdjs.IngameCode.GDadsTextObjects1 */
gdjs.IngameCode.GDadsTextInObjects1.createFrom(runtimeScene.getObjects("adsTextIn"));
gdjs.IngameCode.GDbubbleObjects1.createFrom(runtimeScene.getObjects("bubble"));
gdjs.IngameCode.GDgirlObjObjects1.createFrom(runtimeScene.getObjects("girlObj"));
gdjs.IngameCode.GDhpTextObjects1.createFrom(runtimeScene.getObjects("hpText"));
{for(var i = 0, len = gdjs.IngameCode.GDadsTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsButtonObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsButtonObjects1[i].hide();
}
}{runtimeScene.getVariables().get("level").setNumber(4);
}{runtimeScene.getVariables().get("isDead").setNumber(0);
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationName("jump");
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().get("jumpCount").setNumber(0);
}{runtimeScene.getVariables().get("girlHp").add(5000);
}{for(var i = 0, len = gdjs.IngameCode.GDhpTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDhpTextObjects1[i].setString("HP:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("girlHp")));
}
}{for(var i = 0, len = gdjs.IngameCode.GDbubbleObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDbubbleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsTextInObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextInObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.IngameCode.eventsList0x66f648
gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDadsButtonObjects1Objects = Hashtable.newFrom({"adsButton": gdjs.IngameCode.GDadsButtonObjects1});gdjs.IngameCode.eventsList0x5665518 = function(runtimeScene) {

{

/* Reuse gdjs.IngameCode.GDadsButtonObjects1 */

gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDadsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
gdjs.IngameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IngameCode.GDadsButtonObjects1 */
/* Reuse gdjs.IngameCode.GDadsTextObjects1 */
gdjs.IngameCode.GDadsTextInObjects1.createFrom(runtimeScene.getObjects("adsTextIn"));
gdjs.IngameCode.GDbubbleObjects1.createFrom(runtimeScene.getObjects("bubble"));
gdjs.IngameCode.GDgirlObjObjects1.createFrom(runtimeScene.getObjects("girlObj"));
gdjs.IngameCode.GDhpTextObjects1.createFrom(runtimeScene.getObjects("hpText"));
{for(var i = 0, len = gdjs.IngameCode.GDadsTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsButtonObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsButtonObjects1[i].hide();
}
}{runtimeScene.getVariables().get("level").setNumber(4);
}{runtimeScene.getVariables().get("isDead").setNumber(0);
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationName("jump");
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().get("jumpCount").setNumber(0);
}{runtimeScene.getVariables().get("girlHp").add(5000);
}{for(var i = 0, len = gdjs.IngameCode.GDhpTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDhpTextObjects1[i].setString("HP:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("girlHp")));
}
}{for(var i = 0, len = gdjs.IngameCode.GDbubbleObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDbubbleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsTextInObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextInObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.IngameCode.eventsList0x5665518
gdjs.IngameCode.eventsList0x5642550 = function(runtimeScene) {

{


gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isDead")) == 1;
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
gdjs.IngameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("condition")) == 0;
}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
gdjs.IngameCode.GDadsButtonObjects1.createFrom(runtimeScene.getObjects("adsButton"));
gdjs.IngameCode.GDadsTextObjects1.createFrom(runtimeScene.getObjects("adsText"));
{for(var i = 0, len = gdjs.IngameCode.GDadsButtonObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextObjects1[i].hide(false);
}
}{runtimeScene.getVariables().get("condition").setNumber(1);
}
{ //Subevents
gdjs.IngameCode.eventsList0x5665518(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.IngameCode.eventsList0x5642550
gdjs.IngameCode.eventsList0xb0448 = function(runtimeScene) {

{



}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
gdjs.IngameCode.GDadsButtonObjects1.createFrom(runtimeScene.getObjects("adsButton"));
gdjs.IngameCode.GDadsTextObjects1.createFrom(runtimeScene.getObjects("adsText"));
gdjs.IngameCode.GDadsTextInObjects1.createFrom(runtimeScene.getObjects("adsTextIn"));
gdjs.IngameCode.GDbubbleObjects1.createFrom(runtimeScene.getObjects("bubble"));
gdjs.IngameCode.GDhpTextObjects1.createFrom(runtimeScene.getObjects("hpText"));
gdjs.IngameCode.GDleftArrowObjects1.createFrom(runtimeScene.getObjects("leftArrow"));
gdjs.IngameCode.GDscoreTextObjects1.createFrom(runtimeScene.getObjects("scoreText"));
{runtimeScene.getVariables().get("girlHp").setNumber(10);
}{runtimeScene.getVariables().get("isDead").setNumber(0);
}{for(var i = 0, len = gdjs.IngameCode.GDhpTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDhpTextObjects1[i].setString("HP:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("girlHp")));
}
}{runtimeScene.getVariables().get("score").setNumber(0);
}{for(var i = 0, len = gdjs.IngameCode.GDscoreTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDscoreTextObjects1[i].setString("Score:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score")));
}
}{runtimeScene.getVariables().get("level").setNumber(0);
}{for(var i = 0, len = gdjs.IngameCode.GDleftArrowObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDleftArrowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsButtonObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IngameCode.GDbubbleObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDbubbleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsTextInObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextInObjects1[i].hide();
}
}}

}


{



}


{

gdjs.IngameCode.GDgirlObjObjects1.createFrom(runtimeScene.getObjects("girlObj"));

gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
gdjs.IngameCode.condition2IsTrue_0.val = false;
gdjs.IngameCode.condition3IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IngameCode.mapOfGDgdjs_46IngameCode_46GDgirlObjObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IngameCode.GDgirlObjObjects1.length;i<l;++i) {
    if ( gdjs.IngameCode.GDgirlObjObjects1[i].getAnimationFrame() == 15 ) {
        gdjs.IngameCode.condition1IsTrue_0.val = true;
        gdjs.IngameCode.GDgirlObjObjects1[k] = gdjs.IngameCode.GDgirlObjObjects1[i];
        ++k;
    }
}
gdjs.IngameCode.GDgirlObjObjects1.length = k;}if ( gdjs.IngameCode.condition1IsTrue_0.val ) {
{
gdjs.IngameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.IngameCode.condition2IsTrue_0.val ) {
{
gdjs.IngameCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isDead")) == 0;
}}
}
}
if (gdjs.IngameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.IngameCode.GDgirlObjObjects1 */
gdjs.IngameCode.GDhpTextObjects1.createFrom(runtimeScene.getObjects("hpText"));
gdjs.IngameCode.GDscoreTextObjects1.createFrom(runtimeScene.getObjects("scoreText"));
{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().get("girlHp").sub(1);
}{for(var i = 0, len = gdjs.IngameCode.GDhpTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDhpTextObjects1[i].setString("HP:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("girlHp")));
}
}{runtimeScene.getVariables().get("score").add(100);
}{for(var i = 0, len = gdjs.IngameCode.GDscoreTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDscoreTextObjects1[i].setString("Score:    " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score")));
}
}
{ //Subevents
gdjs.IngameCode.eventsList0x564c5e8(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("level")) == 1;
}if (gdjs.IngameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.IngameCode.eventsList0x565d560(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("level")) == 2;
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isBagMove").setNumber(0);
}
{ //Subevents
gdjs.IngameCode.eventsList0x5649b70(runtimeScene);} //End of subevents
}

}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("level")) == 1;
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
gdjs.IngameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isDead")) == 1;
}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
gdjs.IngameCode.GDadsButtonObjects1.createFrom(runtimeScene.getObjects("adsButton"));
gdjs.IngameCode.GDadsTextObjects1.createFrom(runtimeScene.getObjects("adsText"));
{for(var i = 0, len = gdjs.IngameCode.GDadsButtonObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IngameCode.GDadsTextObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDadsTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.IngameCode.eventsList0x66f648(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("level")) == 3;
}if (gdjs.IngameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("condition").setNumber(0);
}
{ //Subevents
gdjs.IngameCode.eventsList0x5642550(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.IngameCode.GDgirlObjObjects1.createFrom(runtimeScene.getObjects("girlObj"));

gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("level")) == 4;
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IngameCode.GDgirlObjObjects1.length;i<l;++i) {
    if ( gdjs.IngameCode.GDgirlObjObjects1[i].getAnimationFrame() >= 19 ) {
        gdjs.IngameCode.condition1IsTrue_0.val = true;
        gdjs.IngameCode.GDgirlObjObjects1[k] = gdjs.IngameCode.GDgirlObjObjects1[i];
        ++k;
    }
}
gdjs.IngameCode.GDgirlObjObjects1.length = k;}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IngameCode.GDgirlObjObjects1 */
{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.IngameCode.GDgirlObjObjects1.length ;i < len;++i) {
    gdjs.IngameCode.GDgirlObjObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().get("jumpCount").add(1);
}}

}


{


gdjs.IngameCode.condition0IsTrue_0.val = false;
gdjs.IngameCode.condition1IsTrue_0.val = false;
{
gdjs.IngameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("level")) == 4;
}if ( gdjs.IngameCode.condition0IsTrue_0.val ) {
{
gdjs.IngameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("jumpCount")) >= 20;
}}
if (gdjs.IngameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ingame", false);
}}

}


}; //End of gdjs.IngameCode.eventsList0xb0448


gdjs.IngameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.IngameCode.GDgirlObjObjects1.length = 0;
gdjs.IngameCode.GDgirlObjObjects2.length = 0;
gdjs.IngameCode.GDgirlObjObjects3.length = 0;
gdjs.IngameCode.GDbgObjects1.length = 0;
gdjs.IngameCode.GDbgObjects2.length = 0;
gdjs.IngameCode.GDbgObjects3.length = 0;
gdjs.IngameCode.GDhpTextObjects1.length = 0;
gdjs.IngameCode.GDhpTextObjects2.length = 0;
gdjs.IngameCode.GDhpTextObjects3.length = 0;
gdjs.IngameCode.GDscoreTextObjects1.length = 0;
gdjs.IngameCode.GDscoreTextObjects2.length = 0;
gdjs.IngameCode.GDscoreTextObjects3.length = 0;
gdjs.IngameCode.GDleftArrowObjects1.length = 0;
gdjs.IngameCode.GDleftArrowObjects2.length = 0;
gdjs.IngameCode.GDleftArrowObjects3.length = 0;
gdjs.IngameCode.GDaidBagObjects1.length = 0;
gdjs.IngameCode.GDaidBagObjects2.length = 0;
gdjs.IngameCode.GDaidBagObjects3.length = 0;
gdjs.IngameCode.GDadsButtonObjects1.length = 0;
gdjs.IngameCode.GDadsButtonObjects2.length = 0;
gdjs.IngameCode.GDadsButtonObjects3.length = 0;
gdjs.IngameCode.GDadsTextObjects1.length = 0;
gdjs.IngameCode.GDadsTextObjects2.length = 0;
gdjs.IngameCode.GDadsTextObjects3.length = 0;
gdjs.IngameCode.GDbubbleObjects1.length = 0;
gdjs.IngameCode.GDbubbleObjects2.length = 0;
gdjs.IngameCode.GDbubbleObjects3.length = 0;
gdjs.IngameCode.GDadsTextInObjects1.length = 0;
gdjs.IngameCode.GDadsTextInObjects2.length = 0;
gdjs.IngameCode.GDadsTextInObjects3.length = 0;
gdjs.IngameCode.GDNewObjectObjects1.length = 0;
gdjs.IngameCode.GDNewObjectObjects2.length = 0;
gdjs.IngameCode.GDNewObjectObjects3.length = 0;

gdjs.IngameCode.eventsList0xb0448(runtimeScene);
return;
}
gdjs['IngameCode'] = gdjs.IngameCode;
