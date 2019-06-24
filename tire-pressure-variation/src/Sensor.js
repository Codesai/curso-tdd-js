function offset() {
  return 16; 
};

function samplePressure() {
  // placeholder implementation that simulate a real sensor in a real tire
  var pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
  return pressureTelemetryValue;
};

export default class Sensor {
  popNextPressurePsiValue() {
    var pressureTelemetryValue = samplePressure();
    return offset() + pressureTelemetryValue;
  }
} 
