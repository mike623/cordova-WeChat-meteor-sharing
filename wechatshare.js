if(Meteor.isClient){
  Template.hello.events({
    "click .share": function(event, template){
      Wechat.share({
          text: "This is just a plain string",
          scene: Wechat.Scene.TIMELINE   // share to Timeline
      }, function () {
          alert("Success");
      }, function (reason) {
          alert("Failed: " + reason);
      });
    },
    "click .pic": function(event, template){


      Wechat.share({
        message: {
          mediaTagName: "TEST-TAG-001",
          thumb:<IMAGE-URL>,
          title: "Hi, there",
          description:"messageExt",
          media: {
             type: Wechat.Type.IMAGE,
             image:<IMAGE-URL>
          }
        },
        scene: Wechat.Scene.TIMELINE   // share to Timeline
    }, function () {
        alert("Success");
    }, function (reason) {
        console.log(reason);
        alert("Failed: " + reason);
    });


    }
  });
}


 //for ios sharing payload
 // // text:"asdsad",
 //        message: {
 //          // mediaTagName: "TEST-TAG-001",
 //          // thumb:<IMAGE-URL>,
 //          title: "Hi, there",
 //          // description:"messageExt",
 //          media: {
 //             type: Wechat.Type.IMAGE,
 //             image:<IMAGE-URL>
 //          }
 //        },
