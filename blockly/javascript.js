Blockly.JavaScript['lcd1602_new'] = function (block) {
  var dropdown_sda_ = block.getFieldValue('sda_');
  var dropdown_scl_ = block.getFieldValue('scl_');
  var code = 'getLCD1602(board)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['lcd1602_print'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.print(' + value_value_ + ');\n';
  return code;
};