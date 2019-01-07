var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['lcd1602_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("lcd1602"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_LCD1602_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
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
        ["13", "13"],
        ["14", "14"],
        ["15", "15"],
        ["16", "16"],
        ["17", "17"],
        ["18", "18"],
        ["19", "19"]
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
        ["13", "13"],
        ["14", "14"],
        ["15", "15"],
        ["16", "16"],
        ["17", "17"],
        ["18", "18"],
        ["19", "19"]
      ]), "scl_")
      .appendField(Blockly.Msg.WEBDUINO_LCD1602_ADDR, "  位址")
      .appendField(new Blockly.FieldDropdown([
        ["0x3F", "0x3F"],
        ["0x27", "0x27"]
      ]), "addr_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
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
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['lcd1602_row_column'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("lcd1602"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_LCD1602_START, "文字起始位置")
      .appendField(Blockly.Msg.WEBDUINO_LCD1602_COLUMN, "欄")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "row_")
      .appendField(Blockly.Msg.WEBDUINO_LCD1602_ROW, "列")
      .appendField(new Blockly.FieldDropdown([
        ["1","1"],
        ["2","2"],
        ["3","3"],
        ["4","4"],
        ["5","5"],
        ["6","6"],
        ["7","7"],
        ["8","8"],
        ["9","9"],
        ["10","10"],
        ["11","11"],
        ["12","12"],
        ["13","13"],
        ["14","14"],
        ["15","15"],
        ["16","16"]
      ]), "column_");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};
