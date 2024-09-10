// console.log("Writing java script");

 let Arr=["Headache","High-Fever","Fatigue","Weight-Loss","Breathing Issue","Body Pain","Diabetes","Stress","Joint Pain","Insomnia","Hypertension","Acne"]

 let Symp=document.querySelector("#Symptoms")

 Arr.forEach(function(fruit){
    const Optitems = document.createElement("option");
    Optitems.style.fontWeight="700"
    Optitems.textContent = fruit;
     Symp.appendChild(Optitems);
 })

let Location1=["Mumbai","Delhi-NCR","Chennai","Bangalore","Hyderabad","Kolkata","Pune","Guwahati","Amritsar","Srinagar","Ahmedabad","Jaipur"]

let Loc=document.querySelector("#location")

Location1.forEach(function(loc1){
    const Optitems1 = document.createElement("option");
    Optitems1.style.fontWeight="600"
    Optitems1.style.color='white'
    Optitems1.style.backgroundColor='#608AB0'
    Optitems1.textContent = loc1;
    Loc.appendChild(Optitems1);
})

// taking user's data showing how the things will work at future.

 let a =document.querySelector("#form1");

a.addEventListener("submit",function(Event){
     Event.preventDefault();
     var formData=new FormData(Event.target)
    var Name = formData.get('name');
     var Symptoms = formData.get('Symptoms');
     var Age = formData.get('age');

     console.log(Name);
     console.log(Symptoms);
     console.log(Age);
 })

let Doctorslist=["Neurologist","Dermatologist","Cardiologist","Radiologist","Psychiatrist","Surgeon","ENT specialists","Family medicine"];

let Doc=document.querySelector("#doctor-list")

Doctorslist.forEach(function(doc1){
    const Optitems2 = document.createElement("option");
    Optitems2.style.fontWeight="600"
    Optitems2.style.color='white'
    Optitems2.style.backgroundColor='#608AB0'
    Optitems2.textContent = doc1;
    Doc.appendChild(Optitems2);
})


// added some js

document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();

    const symptoms = document.getElementById('Symptoms').value;
    let cure = '';

    switch(symptoms) {
        case 'headache':
            cure = 'Rest in a quiet, dark room and take over-the-counter pain relievers.';
            break;
        case 'high-fever':
            cure = 'Stay hydrated, rest, and take fever-reducing medications.';
            break;
        case 'fatigue':
            cure = 'Ensure adequate sleep, eat a balanced diet, and manage stress.';
            break;
        case 'weight-loss':
            cure = 'Consult a doctor to determine the underlying cause and follow a healthy diet plan.';
            break;
        case 'breathing-issue':
            cure = 'Avoid allergens, use prescribed inhalers, and seek medical advice if severe.';
            break;
        case 'body-pain':
            cure = 'Rest, apply heat or cold packs, and take pain relievers as needed.';
            break;
        case 'Diabetes':
          cure = 'Monitor blood sugar levels, follow a balanced diet, exercise regularly, and take prescribed medications. Regular check-ups with a healthcare provider are essential for managing diabetes.'
          break;
        case 'Stress':
          cure = 'Practice relaxation techniques such as deep breathing, meditation, or yoga. Regular physical activity, maintaining a healthy diet, and ensuring adequate sleep can also help manage stress'
          break;
        case 'Joint Pain':
          cure = ' Maintain a healthy weight, stay active with low-impact exercises, use heat or cold therapy, and consider over-the-counter pain relievers. For chronic pain, consult a healthcare provider.'
          break;
        case 'Insomnia':
          cure = 'Maintain a regular sleep schedule, create a relaxing bedtime routine, avoid caffeine and electronics before bed, and ensure your sleeping environment is comfortable and dark.'
          break;
        case 'Hypertension':
          cure = 'Adopt a healthy diet low in salt, exercise regularly, maintain a healthy weight, limit alcohol intake, and avoid smoking. Medication may be necessary, so consult a doctor for proper management.'
          break;
        case 'Acne':
          cure = 'Keep your skin clean, avoid touching your face, use non-comedogenic skincare products, and consider over-the-counter treatments with benzoyl peroxide or salicylic acid. For severe cases, consult a dermatologist.'
          break;
        default:
            cure = 'Please consult a healthcare professional for accurate diagnosis and treatment.';
    }

    document.getElementById('solutionTitle').innerText = "Cure:";
    document.getElementById('solutionText').innerText = `${cure}`;
    document.getElementById('solutionBox').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

function hideSolution() {
    document.getElementById('solutionBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


// emergency button working
let emergencybtn = document.getElementsByClassName('emergency-button')[0]
console.log(emergencybtn)
function emergency_button() {
  emergencybtn.innerHTML = `<a href="tel:112" class="emergency-button">Call 112</a>`
}


// box coming soon text
let cs1 = document.getElementById('box1')
// console.log(cs)
function boxes_text1() {
  cs1.innerHTML = `<h2> Coming Soon </h2>`;
}
let cs2 = document.getElementById('box2')
// console.log(cs)
function boxes_text2() {
  cs2.innerHTML = `<h2> Coming Soon </h2>`;
}

let cs3 = document.getElementById('box3')
// console.log(cs)
function boxes_text3() {
  cs3.innerHTML = `<h2> Coming Soon </h2>`;
}

let cs4 = document.getElementById('box4')
// console.log(cs)
function boxes_text4() {
  cs4.innerHTML = `<h2> Coming Soon </h2>`;
}

let cs5 = document.getElementById('box5')
// console.log(cs)
function boxes_text5() {
  cs5.innerHTML = `<h2> Coming Soon </h2>`;
}
