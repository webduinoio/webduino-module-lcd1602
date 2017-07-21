Blockly.Blocks['lcd1602_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("lcd1602"), "lcd1602")
        .appendField(Blockly.Msg.WEBDUINO_LCD1602_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduino.io/');
  }
};


Blockly.Blocks['lcd1602_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_LCD1602, "LCD 點陣液晶螢幕，SDA")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "sda_")
      .appendField(Blockly.Msg.WEBDUINO_LCD1602_SCL, "  SCL")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
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