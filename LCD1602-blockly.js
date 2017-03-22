+(function (window, webduino) {

  'use strict';

  window.getLCD1602 = function (board, rx, tx) {
    return new webduino.module.LCD1602(board, rx, tx);
  };

}(window, window.webduino));
