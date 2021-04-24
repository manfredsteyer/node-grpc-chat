const grpc = require('@grpc/grpc-js');

const messages = require('./chat_pb');
const services = require('./chat_grpc_pb');
const question = require('./question');

const ECHO = true;

async function main() {

  const target = 'localhost:50000';

  var client = new services.SimpleChatClient(target,
                                          grpc.credentials.createInsecure());

  const user = await question('Your Name: ');

  const channel = client.chat();

  channel.on('data', function(data) {
    if (!ECHO && data.getUser() === user) return;
    console.log(data.getUser() + '> ' +  data.getText());
  });

  for(;;) {
    const text = await question();
    var message = new messages.ChatMessage();
    message.setUser(user)
    message.setText(text);
    channel.write(message);
  }

}

main();
