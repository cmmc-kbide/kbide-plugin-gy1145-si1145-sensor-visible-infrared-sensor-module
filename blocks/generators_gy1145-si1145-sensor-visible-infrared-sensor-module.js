Blockly.JavaScript['si1145'] = function(block) {
  var variable_si11451 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('SI11451'), Blockly.Variables.NAME_TYPE);
  var value_si1145sda = Blockly.JavaScript.valueToCode(block, 'SI1145SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_si1145scl = Blockly.JavaScript.valueToCode(block, 'SI1145SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
      var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include "Adafruit_SI1145.h"#END

#VARIABLE
Adafruit_SI1145 ${variable_si11451}= Adafruit_SI1145();
#END
Wire.begin(${value_si1145sda},${value_si1145scl});\n
while(! ${variable_si11451}.begin()){
	delay(100);
}
\n
`;
  return code;
};
Blockly.JavaScript['readuv'] = function(block) {
  var variable_si11451 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('SI11451'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_si11451}.readUV()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};