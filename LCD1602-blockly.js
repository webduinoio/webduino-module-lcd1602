+(function (window, webduino) {

  'use strict';

  window.getLCD1602 = function (board, sda, scl, addr) {
    return new webduino.module.LCD1602(board, sda, scl, addr);
  };

}(window, window.webduino));
