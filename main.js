

prediction1="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+ "'/>"
    });
}

console.log("ml5version",mls.version);

var classifier= ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/Cp7w3QT_h/",modelloaded);

function modelloaded(){
    console.log("model loaded succesfuly")
}

function speak(){
    var synth=window.speechSynthesis;
    sentence1="the prediction is " + prediction_1;
    var utterthis= new SpeechSynthesisUtterance(sentence1);
    synth.speak(utterthis);
}

function checkimage(){
    img=document.getElementById("image");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
  else{
      console.log(results);
      document.getElementById("gesture").innerHTML=results[0].label;
      prediction_1=results[0].label;
      speak();
      if(results[0].label=="hold on"){
          document.getElementById("gesture1").innerHTML="&#9994";
      }
      if(results[0].label=="hi"){
        document.getElementById("gesture1").innerHTML="&#9995";
    }
    if(results[0].label=="awesome"){
        document.getElementById("gesture1").innerHTML="&#129304";
    }
    if(results[0].label=="clap"){
        document.getElementById("gesture1").innerHTML="&#128079";
    }
   
    }
  }
