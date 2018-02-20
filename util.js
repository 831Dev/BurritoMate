const precisionRound = (number, precision) => {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

const metersToMilesConversion = (meters) => precisionRound(parseInt(meters) * 0.00062137, 2);

export {
    metersToMilesConversion
};
