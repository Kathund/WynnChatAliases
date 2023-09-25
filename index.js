var sentCheck = FileLib.read('./config/ChatTriggers/modules/WynnChatAliases/check.txt');
if (sentCheck === 'false') {
  var sent = FileLib.read('./config/ChatTriggers/modules/WynnChatAliases/check.txt');
  ChatLib.chat(
    '&a&m           &d&m           &e&m           &a&m           &d&m           &e&m           &a&m          &d'
  );
  ChatLib.chat('');
  ChatLib.chat('&7Thank you for importing &c&lWynnChatAliases &7by &b&lKathund!');
  ChatLib.chat(
    '&c&lWynnChatAliases&r&7 is designed to allow use of the hypixel chat commands on the wynncraft server.'
  );
  ChatLib.chat('');
  const githubMessage = new Message(
    new TextComponent('&7Check out the &b&lGitHub &7for more information!')
      .setHover('show_text', 'https://github.com/Kathund/WynnChatAliases')
      .setClick('open_url', 'https://github.com/Kathund/WynnChatAliases')
  );
  const otherProjects = new Message(
    new TextComponent('&7Check out my other project! &b&lWynnTools')
      .setHover('show_text', 'WynnTools The only discord bot that supports images! (Discord Bot Invite)')
      .setClick(
        'open_url',
        'https://discord.com/api/oauth2/authorize?client_id=1127383186683465758&permissions=8&scope=bot'
      )
  );

  ChatLib.chat(githubMessage);
  ChatLib.chat(otherProjects);
  ChatLib.chat('');
  ChatLib.chat(
    '&a&m           &d&m           &e&m           &a&m           &d&m           &e&m           &a&m          &d'
  );
  FileLib.write('./config/ChatTriggers/modules/WynnChatAliases/check.txt', 'true');
}

// Party Command
register('command', (...args) => {
  ChatLib.command(`p ${args.join(' ')}`);
}).setName('pc');

// Guild Command
register('command', (...args) => {
  ChatLib.command(`g ${args.join(' ')}`);
}).setName('gc');

// friends list command
register('command', () => {
  ChatLib.command('f');
}).setName('fl');

// Party List Command
register('command', () => {
  ChatLib.command('party list');
}).setName('pl');
