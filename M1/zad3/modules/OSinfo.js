var os = require("os");
var colors = require("colors");

var getOSinfo = function () {
  var type = os.type();
  if(type === "Darwin") {
    type = "OSX";
  } else if(type === "Windows_NT") {
    type = "Windows";
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  console.log("System:".gray + type);
  console.log("Release:".red + release);
  console.log("CPU model:".magenta + cpu);
  console.log("Uptime: ~ ".green + (uptime / 60).toFixed(0), "min");
  console.log("User name: ".yellow + userInfo.username);
  console.log("Home dir:".grey + userInfo.homedir);
}

function getTime () {

  var restTime = os.uptime().toFixed(0);
  var info = "";

  info +=  Math.trunc(restTime / 3600) + " h  ";
  restTime -= 3600 * ( Math.trunc(restTime / 3600));

  info += Math.trunc(restTime/60) +  " min  ";
  restTime -= 60 * ( Math.trunc(restTime / 60));


  info += Math.trunc(restTime) + " s  ";

  console.log("\nYour computer is ON for ");
  console.log(info);
}

module.exports = {
  print: getOSinfo,
  getTime: getTime
};
