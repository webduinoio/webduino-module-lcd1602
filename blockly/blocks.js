Blockly.Blocks['lcd1602_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_LCD1602, "LCD 點陣液晶螢幕，SDA")
      .appendField(new Blockly.FieldDropdown([
        ["4", "4"]
      ]), "sda_")
      .appendField(Blockly.Msg.WEBDUINO_LCD1602_SCL, "  SCL")
      .appendField(new Blockly.FieldDropdown([
        ["5", "5"]
      ]), "scl_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['lcd1602_print'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(new Blockly.FieldVariable("lcd1602"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_LCD1602_PRINT, "OLED 顯示:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};