Blockly.Blocks['si1145'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SI11451", null,["Plugin.SI1145"], ["Plugin.SI1145"]), "SI11451")
        .appendField("begin");
    this.appendValueInput("SI1145SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("SI1145SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['readuv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SI11451", null,["Plugin.SI1145"], ["Plugin.SI1145"]), "SI11451")
        .appendField("readUV");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};