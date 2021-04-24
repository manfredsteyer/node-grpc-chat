// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');

function serialize_ChatMessage(arg) {
  if (!(arg instanceof chat_pb.ChatMessage)) {
    throw new Error('Expected argument of type ChatMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChatMessage(buffer_arg) {
  return chat_pb.ChatMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var SimpleChatService = exports.SimpleChatService = {
  chat: {
    path: '/SimpleChat/Chat',
    requestStream: true,
    responseStream: true,
    requestType: chat_pb.ChatMessage,
    responseType: chat_pb.ChatMessage,
    requestSerialize: serialize_ChatMessage,
    requestDeserialize: deserialize_ChatMessage,
    responseSerialize: serialize_ChatMessage,
    responseDeserialize: deserialize_ChatMessage,
  },
};

exports.SimpleChatClient = grpc.makeGenericClientConstructor(SimpleChatService);
