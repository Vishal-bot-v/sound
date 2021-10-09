function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5RGu0Ucbj/model.json", modelReady);

}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    console.log('gotResult');
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
        
        else 
        {
            console.log(results);
            ramdom_number_r = Math.floor(Math.random() * 255) + 1;
            ramdom_number_g = Math.floor(Math.random() * 255) + 1;
            ramdom_number_b = Math.floor(Math.random() * 255) + 1;

            document.getElementById("result_label").innerHTMl = 'I can hear - '+results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy'+(results[0].confidence*100).toFixed(2)+" %"
            document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

            img = document.getElementById('alien1');
            img1 = document.getElementById('alien2');
            img2 = document.getElementById('alien3');
            img3 = document.getElementById('alien4');

            if (results[0].label == "Clap")
            {
                img.src = 'aliens-01.gif';
                img1.src = 'aliens-02.png';
                img2.src = 'aliens-3.png';
                img3.src = 'aliens-4.png';
            } else if (results[0].label == "Bell") {
                img.src = 'aliens-01.png';
                img1.src = 'aliens-02.gif';
                img2.src = 'aliens-3.png';
                img3.src = 'aliens-4.png';
            } else if (results[0].label == "Snapping") {
                img.src = 'aliens-01.png';
                img1.src = 'aliens-02.png';
                img2.src = 'aliens-3.gif';
                img3.src = 'aliens-4.png';
            } else {
                img.src = 'aliens-01.png';
                img1.src = 'aliens-02.png';
                img2.src = 'aliens-3.png';
                img3.src = 'aliens-4.gif';
            }

        }
}