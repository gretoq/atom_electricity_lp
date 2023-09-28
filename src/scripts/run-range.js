'use strict';

function runRange(queryInput, queryScreen) {
  $(document).ready(function () {
    const range = $(queryInput);
    const salary = $(queryScreen);
    let instance;
    const min = 1100;
    const max = 500000;
    const k = 6.54;

    const slider = range.ionRangeSlider({
      skin: 'round',
      min: min,
      max: max,
      max_postfix: '+',
      prettify_enabled: false,
      onChange: function (data) {
        const multipliedValue = Math.floor(data.from * k);

        salary.text(multipliedValue);
      },
      onStart: function (data) {},
    });

    const initialSliderValue = slider[0]?.result?.from || min;
    const multipliedValue = Math.floor(initialSliderValue * k);

    salary.text(multipliedValue);
  });
}
