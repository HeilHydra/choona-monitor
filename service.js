var NRP = require("node-redis-pubsub");
var colors = require('colors');

var nrp = new NRP();

nrp.on("*", function (payload, key) {
  key = key.split(":").map(function (part) {
    if (part !== "*") {
      return new Buffer(part, "base64").toString("utf8");
    }
    return "*";
  }).join(":");

  if (!/stream:[^:]+?:data/.test(key.toString())) {
    console.log("Key:".yellow.bold, key, "\tPayload:".yellow.bold, payload);
  }
});

var fish =
  "                       ,.\n" +
  "                    ,-'.:\n" +
  "                 _/'.:'_:'`._    .-._\n" +
  "            _.-''        ```-`.,'.::.`-._\n" +
  "         _.'                    ``-..:.:.`-.\n" +
  "       ,'          ____               `-:.:,'      _..-'|\n" +
  "     ,',.      ),''    ```--...___        `-.__..'':..  |\n" +
  "    / (O )   \  `.  ___....-----..``-...___      \::.   |\n" +
  "   /_' `'  /  )  /,'::::::._:.-'           ````-.-'- .-'|\n" +
  "   ,-`'. ,' ,'  /  ):::._,'             __...--../::.   |\n" +
  "   `.        _,'   `--''            _.''           `-.._|\n" +
  "     `''-..''_                   _.'.:`.\n" +
  "              ``.  ..--....___.-' `:_.::/\n" +
  "                 \ .:`.              `-.\\\n" +
  "                  \:::|\n" +
  "                   \_,'"
;

console.log("Launching Choona monitor...".bold.magenta);
console.log(fish.cyan);
console.log("Listening for Waterway messages...".green.bold);