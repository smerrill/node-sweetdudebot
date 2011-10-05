var jerk = require('jerk'),
    channel = ('SWEETDUDEBOT_CHANNEL' in process.env)? process.env.SWEETDUDEBOT_CHANNEL : '#yourchannel',
    options = {
      server: ('SWEETDUDEBOT_SERVER' in process.env)? process.env.SWEETDUDEBOT_SERVER : 'chat.freenode.net',
      nick: ('SWEETDUDEBOT_NICK' in process.env)? process.env.SWEETDUDEBOT_NICK : 'sweetdudebot',
      port: ('SWEETDUDEBOT_PORT' in process.env)? process.env.SWEETDUDEBOT_PORT : '6667',
      flood_protection: true,
      channels: [channel]
    };

var sweet_dude_bot = jerk(function(j) {
  j.watch_for( /^(Sweet|Dude)!$/, function(message) {
    var result = message.match_data[1];
    if (!result)
      return;

    switch (result) {
      case "Sweet":
        message.say("Dude!");
        break;
      case "Dude":
        message.say("Sweet!");
        break;
    }
  })
}).connect(options)

