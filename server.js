const grpc = require('@grpc/grpc-js');

// Generated stubs:
const services = require('./chat_grpc_pb');
  
const users = [];

function chat(call) {
    users.push(call);
    call.on('data', function(data) {
        console.log(data.getUser() + '> ' +  data.getText());
        users.forEach(user => user.write(data));
    });
}

function main() {
  var server = new grpc.Server();
  server.addService(services.SimpleChatService, {chat: chat});
  server.bindAsync('0.0.0.0:50000', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
