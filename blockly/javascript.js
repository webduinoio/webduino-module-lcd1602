Blockly.JavaScript['lcd1602_new'] = function (block) {
  var dropdown_sda_ = block.getFieldValue('sda_');
  var dropdown_scl_ = block.getFieldValue('scl_');
  var dropdown_addr_ = block.getFieldValue('addr_');
  var code = 'getLCD1602(board,'+ dropdown_sda_ + ',' + dropdown_scl_ + ',' + dropdown_addr_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['lcd1602_print'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.print(' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['lcd1602_clear'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.clear();\n';
  return code;
};

Blockly.JavaScript['lcd1602_row_column'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var number_column_ = parseInt(block.getFieldValue('column_'));
  var number_row_ = parseInt(block.getFieldValue('row_'));
  
  var code = variable_name_ + '.cursor(' + (--number_column_) + ', ' + (--number_row_) + ');\n';
  return code;
};
