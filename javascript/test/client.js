import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
const {RegularObjectResponse, CommandRequest, CommandResponse, Command} = require('./js_proto/sensr_proto/output_pb.js');
const {LidarPerceptionServiceClient} = require('./js_proto/sensr_proto/output_grpc_web_pb.js');
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
// async function demo() {
//     // Sleep in loop
//     for (let i = 0; i < 105; i++) {
//         await sleep(1000);
//         var request = new TestCommand();
//         request.setMessage('Hello World!' + i);
//         client.sendCommand(request, {}, function(err, response) {
//             console.log(response.getMessage());
//         });
//     }
// }
// var client = new OutputServiceClient(
//   'http://localhost:8080'
// )
// var call1 = client.updateOutput(request, ()=>{});
var client = new LidarPerceptionServiceClient(
  'http://localhost:8080'
)
var request = new Empty();
var call = client.regularObjectUpdate(request, ()=>{});
// var send = client.sendCommand(request, ()=>{});
window.onunload = window.onbeforeunload = function (evt) {
  var message = 'Are you sure?';
  if (typeof evt == 'undefined') {
      evt = window.event;
  }
  if (evt) {
      if (evt.type == "unload" && evt.returnValue) {
          let request1 = new CommandRequest();
          request1.setCommand(Command.CMD_CUSTOM);
          //request1.getParamMap()["stop"] = "empty";
          request1.getParamMap().set("stop", "empty");
          client.sendCommand(request1, ()=>{});
      }
      evt.returnValue = message;
  }
  return message;
};
export async function registerObjectUpdate(){
  // var client = new OutputServiceClient(
  //   'http://localhost:8080'
  // )
  call.on('data', function(response) {
        var obj_list = response.getObjectsList();
        // obj_list.forEach(element => {
        //     // let x = element.getId()
        //     // callback(x)
        //     console.log(element.getId())
        // });
  });
  call.on("status", (status) => {
    console.log(status);
  });
  call.on("error", (error) =>{
    console.log(error)
  });
  call.on("end", (end)=>{
    console.log("streaming ended!")
  });
}
// function routeChat(call) {
//   call.on('data', function(note) {
//     var key = pointKey(note.location);
//     /* For each note sent, respond with all previous notes that correspond to
//      * the same point */
//     if (route_notes.hasOwnProperty(key)) {
//       _.each(route_notes[key], function(note) {
//         call.write(note);
//         console.log(key)
//       });
//     } else {
//       route_notes[key] = [];
//     }
//     // Then add the new note to the list
//     route_notes[key].push(JSON.parse(JSON.stringify(note)));
//   });
//   call.on('end', function() {
//     call.end();
//   });
// }
// registerObjectUpdate()
// function datacallback(call){
//   call.on('data', function(response) {
//     var obj_list = response.getObjectsList();
//     // console.log(obj_list)
//     return obj_list
//     // obj_list.forEach(element => {
//     //     element.
//     //     console.log(element.getId())
//     // });
//   });
// }
// registerObjectUpdate()
export function getData(callbackFunc) {
  call.on('data', function(response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}
// getData(function(tableData) {
//   console.log(tableData);
//   console.log("Here")
// });
// console.log("Here")
// datacallback(call)
// export async function callback(x){
//   console.log(x.getId())
// }