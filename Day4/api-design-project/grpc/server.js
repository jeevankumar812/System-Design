const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const connectDB = require("../config/db");
const User = require("../models/User");

connectDB();

const packageDef = protoLoader.loadSync(__dirname + "/user.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObject;

async function getUsers(call, callback) {
  const users = await User.find();
  callback(null, { users });
}

const server = new grpc.Server();

server.addService(userPackage.UserService.service, {
  GetUsers: getUsers,
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("gRPC running on port 50051");
    server.start();
  }
);