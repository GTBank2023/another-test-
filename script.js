

/*eslint-env es6*/

// Function to launch your system
async function launchSystem() {
    // CAMERA SETUP
    const videoElement = document.getElementById('video-feed');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // COCO SSD MODEL
    const cocoSsdModel = await cocoSsd.load('https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd');

    // THRESHOLD DETECTION
    // Define the threshold for detection confidence
    const threshold = 0.5;

    // Define the rules for each area
    const detectionRules = {
    'Entrance Area': [
        {
            label: "African Tribal Painting",
            minConfidence: 0.5,
        },
        {
            label: "Metal Wall Decoration",
            minConfidence: 0.5,
        },
        {
            label: "Wooden Reception Desk",
            minConfidence: 0.5,
        }
    ],
    'Customer Information Service': [
        {
            label: "Customer Information Service on an A4 poster Stainless steel stand",
            minConfidence: 0.5,
        },
        {
            label: "Black Chair With Wheels",
            minConfidence: 0.5,
        },
        {
            label: "City Scape Painting",
            minConfidence: 0.5,
        }
    ],
    'Relationship Desk ': [
        {
            label: "Black Swivel Chair",
            minConfidence: 0.5,
        },
        {
            label: "Black Leather Sofas",
            minConfidence: 0.5,
        },
        {
            label: "Tambour Cupboard",
            minConfidence: 0.5,
        }
    ],
    'Lobby Area ': [
        {
            label: "ATM Machine Mounted On the Wall",
            minConfidence: 0.5,
        },
        {
            label: "Proudly African Banner",
            minConfidence: 0.5,
        },
        {
            label: "It's Banking, Only Easier Banner",
            minConfidence: 0.5,
        },
        {
            label: "Revolving Doors",
            minConfidence: 0.5,
        },
        {
            label: "Kinara Account Banners",
            minConfidence: 0.5,
        }
    ],
    'Operations Area ': [
        {
            label: "Please Wait Here Metal Stand",
            minConfidence: 0.5,
        },
        {
            label: "Jibakishie Banner",
            minConfidence: 0.5,
        },
        {
            label: "Person Behind Wooden Reception Desk",
            minConfidence: 0.5,
        },
        {
            label: "Orange Wall with Flower Pot",
            minConfidence: 0.5,
        }
    ],
    'hni Area': [
        {
            label: "Abstract Painting",
            minConfidence: 0.5,
        },
        {
            label: "Seaside Bridge Painting",
            minConfidence: 0.5,
        },
        {
            label: "Metal Decorative Grill",
            minConfidence: 0.5,
        }
    ]
};

    };


   // Function to detect areas based on rules
    function detectAreas(predictionsArray) {
  
    for (const area in detectionRules) {
        const rules = detectionRules[area];

        // Check if all rules for this area are satisfied
        const areaDetected = rules.every(rule => {
            const labelIndex = cocoSsdModel.classIndex[rule.label];
            const confidence = predictionsArray[labelIndex];
            return confidence >= rule.minConfidence;
        });

        if (areaDetected) {
            // Instead of pushing just the area name, push an object with more information
            detectedAreas.push({
                area: area,
                description: getDescriptionForArea(area),
                benefits: getBenefitsForArea(area),
            });
        }
    }

    return detectedAreas;



    // FUNCTION TO PROCESS PREDICTIONS
    async function detectObjects() {
        // Your detectObjects function here...
    }

// Function to launch your system
async function launchSystem() {

    if (detectedAreas.length > 0) {
        const detectedArea = detectedAreas[0];
        const areaInfoDiv = document.getElementById("areaInfo");
        areaInfoDiv.querySelector("h1").textContent = detectedArea.area;
        areaInfoDiv.querySelector("p").textContent = detectedArea.description;
    }

    // Call the initial detection
    await detectObjects();
}


// Call the launchSystem function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    launchSystem();
});


// Get a reference to the "Get Started" button
const getStartedButton = document.getElementById('get-started-button');

// Add an event listener to the button
getStartedButton.addEventListener('click', () => {
    // Call the launchSystem function when the button is clicked
    launchSystem();
});


let detectedAreas = []; // Declare as a global variable

function initializeDetectedAreas() {
    detectedAreas = []; // Initialize the array
}

// Call this function to initialize the array
initializeDetectedAreas();

const tf = require('@tensorflow/tfjs');
     
document.addEventListener('DOMContentLoaded', async () => {
    const videoElement = document.getElementById('video-feed');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Check if Web Speech API is supported
if ('speechSynthesis' in window) {
    // Web Speech API is supported
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
}

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
    await videoElement.play();

const cocoSsdModel = await cocoSsd.load('https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd');

// Define the threshold for detection confidence
const threshold = 0.5;

// Define the rules for each area
const detectionRules = {
    'Entrance Area': [
        {
            label: "African Tribal Painting",
            minConfidence: 0.5,
        },
        {
            label: "Metal Wall Decoration",
            minConfidence: 0.5,
        },
        {
            label: "Wooden Reception Desk",
            minConfidence: 0.5,
        }
    ],
    'Customer Information Service': [
        {
            label: "Customer Information Service on an A4 poster Stainless steel stand",
            minConfidence: 0.5,
        },
        {
            label: "Black Chair With Wheels",
            minConfidence: 0.5,
        },
        {
            label: "City Scape Painting",
            minConfidence: 0.5,
        }
    ],
    'Relationship Desk ': [
        {
            label: "Black Swivel Chair",
            minConfidence: 0.5,
        },
        {
            label: "Black Leather Sofas",
            minConfidence: 0.5,
        },
        {
            label: "Tambour Cupboard",
            minConfidence: 0.5,
        }
    ],
    'Lobby Area ': [
        {
            label: "ATM Machine Mounted On the Wall",
            minConfidence: 0.5,
        },
        {
            label: "Proudly African Banner",
            minConfidence: 0.5,
        },
        {
            label: "It's Banking, Only Easier Banner",
            minConfidence: 0.5,
        },
        {
            label: "Revolving Doors",
            minConfidence: 0.5,
        },
        {
            label: "Kinara Account Banners",
            minConfidence: 0.5,
        }
    ],
    'Operations Area ': [
        {
            label: "Please Wait Here Metal Stand",
            minConfidence: 0.5,
        },
        {
            label: "Jibakishie Banner",
            minConfidence: 0.5,
        },
        {
            label: "Person Behind Wooden Reception Desk",
            minConfidence: 0.5,
        },
        {
            label: "Orange Wall with Flower Pot",
            minConfidence: 0.5,
        }
    ],
    'hni Area': [
        {
            label: "Abstract Painting",
            minConfidence: 0.5,
        },
        {
            label: "Seaside Bridge Painting",
            minConfidence: 0.5,
        },
        {
            label: "Metal Decorative Grill",
            minConfidence: 0.5,
        }
    ]
};


   // Function to detect areas based on rules
    function detectAreas(predictionsArray) {
  
    for (const area in detectionRules) {
        const rules = detectionRules[area];

        // Check if all rules for this area are satisfied
        const areaDetected = rules.every(rule => {
            const labelIndex = cocoSsdModel.classIndex[rule.label];
            const confidence = predictionsArray[labelIndex];
            return confidence >= rule.minConfidence;
        });

        if (areaDetected) {
            // Instead of pushing just the area name, push an object with more information
            detectedAreas.push({
                area: area,
                description: getDescriptionForArea(area),
                benefits: getBenefitsForArea(area),
            });
        }
    }

    return detectedAreas;


// Function to detect areas based on rules
function detectAreas(predictionsArray) {
    const detectedAreas = [];

    for (const area in detectionRules) {
        const rules = detectionRules[area];

        // Check if all rules for this area are satisfied
        const areaDetected = rules.every(rule => {
            const labelIndex = model.classIndex[rule.label];
            const confidence = predictionsArray[labelIndex];
            return confidence >= rule.minConfidence;
        });

        if (areaDetected) {
            // Instead of pushing just the area name, push an object with more information
            detectedAreas.push({
                area: area,
                description: getDescriptionForArea(area),
                benefits: getBenefitsForArea(area),
            });
        }
    }

    return detectedAreas;
}

// For Lobby Area
const LobbyArea = detectedAreas.find(area => area.area === "Lobby Area");
if (LobbyArea) {
    const LobbyAreaInfoDiv = document.getElementById("LobbyAreaInfo");
    LobbyAreaInfoDiv.querySelector("h1").textContent = LobbyArea.area;
    LobbyAreaInfoDiv.querySelector("p").textContent = LobbyArea.description;
    // Call text-to-speech for LobbyArea if needed
    textToSpeech(LobbyArea.description);
}

const RelationshipDesk = detectedAreas.find(area => area.area === "Relationship Desk");
if (RelationshipDesk) {
    const RelationshipDeskInfoDiv = document.getElementById("RelationshipDeskInfo");
    RelationshipDeskInfoDiv.querySelector("h1").textContent = RelationshipDesk.area;
    RelationshipDeskInfoDiv.querySelector("p").textContent =  RelationshipDesk.description;
    // Call text-to-speech for RelationshipDesk if needed
    textToSpeech(RelationshipDesk.description);
}

const OperationsArea = detectedAreas.find(area => area.area === "Operations Area");
if (OperationsArea) {
    const OperationsAreaInfoDiv = document.getElementById("OperationsAreaInfo");
    OperationsAreaInfoDiv.querySelector("h1").textContent = OperationsArea.area;
    OperationsAreaInfoDiv.querySelector("p").textContent = OperationsArea.description;
    // Call text-to-speech for OperationsArea if needed
    textToSpeech(OperationsArea.description);
}

const CustomerInformationService = detectedAreas.find(area => area.area === "Customer Information Service");
if (CustomerInformationService) {
    const CustomerInformationServiceInfoDiv = document.getElementById("CustomerInformationServiceInfo");
    CustomerInformationServiceInfoDiv.querySelector("h1").textContent = CustomerInformationService.area;
    CustomerInformationServiceInfoDiv.querySelector("p").textContent =  CustomerInformationService.description;
    // Call text-to-speech for CustomerInformationService if needed
    textToSpeech(CustomerInformationService.description);
}

const EntranceArea = detectedAreas.find(area => area.area === "Entrance Area");
if (EntranceArea) {
    const EntranceAreaInfoDiv = document.getElementById("EntranceAreaInfo");
    EntranceAreaInfoDiv.querySelector("h1").textContent = EntranceArea.area;
    EntranceAreaInfoDiv.querySelector("p").textContent = EntranceArea.description;
    // Call text-to-speech for EntranceArea if needed
    textToSpeech(EntranceArea.description);

}

const StaircaseArea = detectedAreas.find(area => area.area === "Staircase Area");
if (StaircaseArea) {
    const StaircaseAreaInfoDiv = document.getElementById("StaircaseAreaInfo");
    StaircaseAreaInfoDiv.querySelector("h1").textContent = StaircaseArea.area;
    StaircaseAreaInfoDiv.querySelector("p").textContent = StaircaseArea.description;
    // Call text-to-speech for StaircaseArea if needed
    textToSpeech(StaircaseArea.description);
}


const hniArea = detectedAreas.find(area => area.area === "hni Area");
if (hniArea) {
    const hniAreaInfoDiv = document.getElementById("hniAreaInfo");
    hniAreaInfoDiv.querySelector("h1").textContent = hniArea.area;
    hniAreaInfoDiv.querySelector("p").textContent = hniArea.description;
    // Call text-to-speech for hniArea if needed
    textToSpeech(hniArea.description);
}

// Function to get the description for a specific area
function getDescriptionForArea(area) {
    // Define descriptions for each area here
    const descriptions = {
        'Lobby Area': "Welcome to GTBank Tanzania, You are currently at the Bank's Lobby Area which is your first point of contact as you enter the bank.",
        'Relationship Desk': "You are now at the relationship desk, a welcoming space where you can sit down with your dedicated account officer to discuss the well-being of your accounts and explore the intricate details of your financial journey. Here, we cherish the art of personalized banking, tailoring our services to your unique aspirations and needs.",
        'Operations Area': "You are now at the Operations area, This is the heart of our banking center, where your financial actions come to life. It's where you interact with your money, whether you're putting it in, taking it out, or making it work for you.",
        'Customer Information Service':  "You are now at the Customer Information Service; a designated area where you can access information and assistance regarding their accounts as well as general banking queries.",
        'Entrance Area': "You've arrived at GTBank Tanzania, and this is our welcoming entrance area.",
        'Staircase Area': "You are about to go up the stairs.",
        'hni Area': "You are now at the HNI Banking area, an exclusive space, meticulously designed to cater to your distinctive financial needs with sophistication and tailored care that stands above the rest."
    };

    return descriptions[area] || '';
}


// Function to get the benefits for a specific area
function getBenefitsForArea(area) {
    // Define benefits for each area here
const benefits = {
    'Lobby Area': "This is where convenience meets knowledge. Here, you'll find ATMs for quick transactions and user-friendly tariff guides to help you navigate our services. It's your gateway to easy and informed banking.",
    'Relationship Desk': "It's a welcoming space where you can sit down with your dedicated account officer to discuss the well-being of your accounts and explore the intricate details of your financial journey. Here, we cherish the art of personalized banking, tailoring our services to your unique aspirations and needs.",
    'Operations Area': "It's where you can make deposits, withdrawals, handle foreign operations, and securely send and receive money globally through trusted services like Western Union, MoneyGram, and RIA Money Transfer. Your financial needs, both near and far, are well within reach here.",
    'Customer Information Service': "The Customer Information Service area is your starting point for effortless banking solutions. It's a welcoming haven where you can seamlessly open accounts, obtain your banking card, reactivate dormant accounts, set up standing orders, and tailor your iBank profile.",
    'Entrance Area': "At the entrance area, a welcoming personnel awaits to receive you, marking the starting point of your journey. Here, your banking experience begins.",
    'Staircase Area': "This staircase is a gateway to personalized banking. To the left, it leads to the Customer Information Service area, a hub of information and assistance. To the right, it opens the door to the Relationship Desk area, where tailored financial guidance awaits. It's a path of options, each step revealing a distinct facet of your banking experience.",
    'hni Area': "Enjoy a dedicated relationship manager, access to exclusive opportunities, and a seamless banking experience that aligns with your unique goals, all while surrounded by an atmosphere of sophistication and discretion."
};


    return benefits[area] || '';
}



   // Function to process predictions from COCO-SSD
// Function to process predictions from COCO-SSD

async function processPredictions(predictions) {

  const predictionsArray = predictions.map(prediction => prediction.score);



detectAreas(predictions);



  // Handle the detected areas

  handleDetectedAreas(predictionsArray);



  // Continue video frame processing or rendering as needed...

}



// Function to detect objects using COCO-SSD

async function detectObjects() {

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  ctx.drawImage(videoElement, 0, 0);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const tensor = tf.browser.fromPixels(imgData).expandDims();



  const predictions = await cocoSsdModel.detect(tensor);

  const detectedAreas = detectAreas(predictions);

  processPredictions(predictions);



  if (detectedAreas.length > 0) {

    const detectedArea = detectedAreas[0]; // Assuming you want to use the first detected area

    const areaInfoDiv = document.getElementById("areaInfo");

    areaInfoDiv.querySelector("h1").textContent = detectedArea.area;

    areaInfoDiv.querySelector("p").textContent = detectedArea.description;



    // Call the text-to-speech function here if needed

  }

}



// Call detectObjects when the video is loaded

videoElement.addEventListener("loadeddata", () => {

  videoElement.play();

  detectObjects();

});

    // You will need to implement the textToSpeech function using your preferred TTS library.
    // This function should take the message as input and read it aloud.
  
  function textToSpeech(message) {
       // Function to perform text-to-speech
function textToSpeech(message) {
  
  // Check if the Web Speech API is supported
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);

 // Get the list of available voices
 const voices = speechSynthesis.getVoices();

 // Select a voice (let's use the first available voice)
 if (voices.length > 0) {
        utterance.voice = voices[0];
    }

// Create separate SpeechSynthesisUtterance objects for each area's description
const lobbyDescription = new SpeechSynthesisUtterance("Welcome to GTBank Tanzania, You are currently at the Bank's Lobby Area which is your first point of contact as you enter the bank.");
const relationshipDeskDescription = new SpeechSynthesisUtterance("You are now at the relationship desk, a welcoming space where you can sit down with your dedicated account officer to discuss the well-being of your accounts and explore the intricate details of your financial journey. Here, we cherish the art of personalized banking, tailoring our services to your unique aspirations and needs.");
const OperationsAreaDescription = new SpeechSynthesisUtterance("You are now at the Operations area, This is the heart of our banking center, where your financial actions come to life. It's where you interact with your money, whether you're putting it in, taking it out, or making it work for you.");
const CustomerInformationServiceDescription = new SpeechSynthesisUtterance("You are now at the Customer Information Service; a designated area where you can access information and assistance regarding their accounts as well as general banking queries.");
const EntranceAreaDescription = new SpeechSynthesisUtterance("You've arrived at GTBank Tanzania, and this is our welcoming entrance area.");
const StaircaseAreaDescription = new SpeechSynthesisUtterance("You are about to go up the stairs.");
const hniAreaDescription = new SpeechSynthesisUtterance("You are now at the HNI Banking area, an exclusive space, meticulously designed to cater to your distinctive financial needs with sophistication and tailored care that stands above the rest.");

// Create separate SpeechSynthesisUtterance objects for each area's benefits
const lobbyBenefits = new SpeechSynthesisUtterance("This is where convenience meets knowledge. Here, you'll find ATMs for quick transactions and user-friendly tariff guides to help you navigate our services. It's your gateway to easy and informed banking.");
const relationshipDeskBenefits = new SpeechSynthesisUtterance("It's a welcoming space where you can sit down with your dedicated account officer to discuss the well-being of your accounts and explore the intricate details of your financial journey. Here, we cherish the art of personalized banking, tailoring our services to your unique aspirations and needs.");
const OperationsAreaBenefits = new SpeechSynthesisUtterance("It's where you can make deposits, withdrawals, handle foreign operations, and securely send and receive money globally through trusted services like Western Union, MoneyGram, and RIA Money Transfer. Your financial needs, both near and far, are well within reach here.");
const CustomerInformationServiceBenefits = new SpeechSynthesisUtterance("The Customer Information Service area is your starting point for effortless banking solutions. It's a welcoming haven where you can seamlessly open accounts, obtain your banking card, reactivate dormant accounts, set up standing orders, and tailor your iBank profile.");
const EntranceAreaBenefits = new SpeechSynthesisUtterance("At the entrance area, a welcoming personnel awaits to receive you, marking the starting point of your journey. Here, your banking experience begins.");
const StaircaseAreaBenefits = new SpeechSynthesisUtterance("This staircase is a gateway to personalized banking. To the left, it leads to the Customer Information Service area, a hub of information and assistance. To the right, it opens the door to the Relationship Desk area, where tailored financial guidance awaits. It's a path of options, each step revealing a distinct facet of your banking experience.");
const hniAreaBenefits = new SpeechSynthesisUtterance("Enjoy a dedicated relationship manager, access to exclusive opportunities, and a seamless banking experience that aligns with your unique goals, all while surrounded by an atmosphere of sophistication and discretion.");

 // Set the voice for each area if you have different voices
 // You can use this line to get the list of available voices and choose one:
// const voices = speechSynthesis.getVoices();
        
// Set the voice for lobbyDescription and relationshipDeskDescription
 // Make sure to select an available voice that you want to use
lobbyDescription.voice = voices[0]; // Use the desired voice index for the lobby
relationshipDeskDescription.voice = voices[1]; // Use the desired voice index for the relationship desk
// Set voices for other areas as needed
        
// Finally, trigger speech synthesis for each area
window.speechSynthesis.speak(lobbyDescription); // Read out lobby description
window.speechSynthesis.speak(relationshipDeskDescription); // Read out relationship desk description
window.speechSynthesis.speak(OperationsAreaDescription); // Read out Operations Area description
window.speechSynthesis.speak(CustomerInformationServiceDescription); // Read out Customer Information Service description
        
};


    async function detectObjects() {
        ctx.drawImage(videoElement, 0, 0);
        const predictions = await cocoSsdModel.detect(canvas);
        console.log(predictions);

    fetch('https://drive.google.com/file/d/1uNDyaihSkeOFFU3zAivZByG4pa05fGMc')
        .then((response) => response.json())
        .then((data) => {
            // Process the JSON data here
            // You can access 'data' which contains your JSON
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


    fetch('https://drive.google.com/file/d/1uNDyaihSkeOFFU3zAivZByG4pa05fGMc')
        .then((response) => response.json())
        .then((data) => {
            // Process the JSON data here
            // You can access 'data' which contains your JSON
        })
        .catch((error) => {
            console.error('Error:', error);
        });

 // Create a function to load images
function loadImages(imageUrls) {
  for (const url of imageUrls) {
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img); // You can append it to a different HTML element if needed
  }
}

// Define image URLs for each area
const StaircaseImages = [
    'https://drive.google.com/uc?id=1Du6Gs_XaEBdvP7rli4b7CVoY2LMEby-t',
    'https://drive.google.com/uc?id=1ZZDhKY5p23KFPj8JWxOjjfap6qDZy66I',
    'https://drive.google.com/uc?id=1WW34VQT-Ut9D1p167svHueh9cizFtLPU',
  ];


const RelationshipDeskImages = [
    'https://drive.google.com/uc?id=1b6Vqo8EoYP-9LI9jOpTzOXo7CeQ5AWGp',
    'https://drive.google.com/uc?id=1gonsFAcyV4ZkzRIlr0fkJNgIlM8PR6eT',
    'https://drive.google.com/uc?id=18MrypKyw0tfQEn8eqFykKURC-zuBJoix',
    'https://drive.google.com/uc?id=15JvCkO0Epys2_U7x0qKDyUIoGCg7E2qM',
    'https://drive.google.com/uc?id=1KYaDu89UydsuSFYw4gax_ggsKexSVG4M',
    'https://drive.google.com/uc?id=18VT4fMLoBl2pQDc3uzBsOnNWoOTyzHi0',
    'https://drive.google.com/uc?id=1trhvDqt-4JmxRqFCaTGso_gYjIZp4FZZ',
    'https://drive.google.com/uc?id=10573EvXYRv5GLKXBVdp0dZI_7DbMPE5R',
    'https://drive.google.com/uc?id=1UU1U-tDGkQFTVjB7Pj-NwhUIj95BJAWd',
    'https://drive.google.com/uc?id=1rbidElv-IxYOA923pPHBd5vHW7ng_F6q',
    'https://drive.google.com/uc?id=154pmVI-65ORTpB0Xf9qAYYMt2duqVtd7',
    'https://drive.google.com/uc?id=1ySBFjBUjx6MN5N9Q_DR3sACryLtJyJpc',
    'https://drive.google.com/uc?id=1X2g7UmBReLRS7TuY_HpBcp7FL0DCmNfh',
    'https://drive.google.com/uc?id=14AaweTWzvbx8-QeQqBjzowfGBRFruGis',
    'https://drive.google.com/uc?id=1BlZj5a3H1XasgATLKHunHLUIzC9zfdwP',
    'https://drive.google.com/uc?id=1JPmd9wquHo5qt4_iY1H1nEmo3o2NCEkQ',
    
]

const loadOperationsAreaImages = [
    'https://drive.google.com/uc?id=1Kw-RTbqRFJlvjwpi8DwBWjIwImbW3P1E',
    'https://drive.google.com/uc?id=1zUhR1xbN29J5ni9W9oVDng52fBAE6akc',
    'https://drive.google.com/uc?id=1GyR98xAhZksa6alQ3GT-HAMCQVxUAwJd',
    'https://drive.google.com/uc?id=1O8H70Hkr3FsKJ12Cfoas1ZnWij-s0qDm',
    'https://drive.google.com/uc?id=1XcnPf94DTCaZfwdDMgpZf6MM9FNY8day',
    'https://drive.google.com/uc?id=1XcnPf94DTCaZfwdDMgpZf6MM9FNY8day',
    'https://drive.google.com/uc?id=1D1BklcrkBBSeeoioCclCbnw_wh_Cdlqg',
    'https://drive.google.com/uc?id=1ICKnK5WLnZI2Lo5Jxcp5RAAm6HshwWC_',
    'https://drive.google.com/uc?id=15Vpfks3fWBKKI4HwC1AMR1QxO1n3U8N3',
    'https://drive.google.com/uc?id=1LZlXSPmYo3cfOdV-s3pCTNSXLLL2pZag',
    'https://drive.google.com/uc?id=11n_KpMsHjOFihSBldCtH_CjVNaSPIkl0',
    'https://drive.google.com/uc?id=1FYoZUY47dozZtlik8rBVFNwPZ5TRbIbw',
    'https://drive.google.com/uc?id=1hPPxMP74RWfg_H71U6Nw8X5TWeli-mUD',
    'https://drive.google.com/uc?id=1NgUyMRo72t10B7rLkLtscDG0rfxWnJ-C',
    
];


  const LobbyAreaImagesURLs = [
    'https://drive.google.com/uc?id=1-FGQUzoNmUy3aNiUBVZDB2rQlETG2Mbe',
    'https://drive.google.com/uc?id=1icGYQJ8d4AAdjV2KrGL9NGN28vNZtKuR',
    'https://drive.google.com/uc?id=1DyPopWgjXxUYDuhYB03ze2KkOeAc6xQu',
    'https://drive.google.com/uc?id=19yxd_IUG7v1a2jNj3_5yD3A9de23J0kv',
    'https://drive.google.com/uc?id=1L1sRQz_fQbuCnGQKe0HXOk_6ah68Zsbl',
    'https://drive.google.com/uc?id=1FL2td2bt_X3CoTBLBFN9COVSJn-WUQp2',
    'https://drive.google.com/uc?id=1nlcDKnJjbKFVFxTLEEdnj_y5BFo__vN8',
    'https://drive.google.com/uc?id=1siPhzdMpwvMAm4fFWVOVUi6g3rpu8SHX',
    'https://drive.google.com/uc?id=1Mr_UO4ZrmI-UiuMFhIY1lg5SK-B38ClO',
    'https://drive.google.com/uc?id=1JTnKcprY23TwFdL-C5_7PDIUPqLqUCmg',

];


  const HNIareaImagesURLs = [
    'https://drive.google.com/uc?id=1t7zXWKeufIUa7QxqkTLgyNUoko29L0TV',
    'https://drive.google.com/uc?id=1_U0QODFIlpYabmxuztfHvNq9M8BYxOtb',
    'https://drive.google.com/uc?id=14a3tpeW3UNZRCKB3-nt3Mcg5LVot-aU9',
    'https://drive.google.com/uc?id=1Xvi4ta8SGeKCyDVg-Xr-NE7PGLLdXk9c',
    'https://drive.google.com/uc?id=1K7ej9k28trotwZfsTwMdpUIFHUUJJEAz',
    'https://drive.google.com/uc?id=1xE5US1EuaA0QkreIOyYs9oyU8VbtwiTE',
    'https://drive.google.com/uc?id=1ONqmE-t070wfGZfJsyjF58aEBxbQ_xuO',
    'https://drive.google.com/uc?id=17ef9bRhVSXQZaYIwi4ugxwb-EnhoCIL_',
    'https://drive.google.com/uc?id=1r4w0MM-4cnYW06HUgbcmJKVXiGO9xfPP',
    'https://drive.google.com/uc?id=1-lnKCxNrbFnB0tRoCfgdvE4L0twZuoVf',
];

  const EntranceAreaImagesURLs = [
    'https://drive.google.com/uc?id=1XaWExfQXAj9SuClCXlWre7wgExVmsqNT',
    'https://drive.google.com/uc?id=10kbp2rCQS9fpCtLRtD6-vCHCrIQeRCaJ',
    'https://drive.google.com/uc?id=1ssisPQvN3AOY6Ff7xIa2d9rlUrBXsoii',
    'https://drive.google.com/uc?id=1oJZkkNUCbtTDzpRxdqqhxt5vGQDuMt5c',
    'https://drive.google.com/uc?id=1pSz-c9TsJjY-YA0oHTKKdn8rgF1Cm5Qj',
];

  const CustomerInformationServiceImagesURLs = [
    'https://drive.google.com/uc?id=1bgiaCRDbiP3ZogDFLqpbw78iS8pXb9rI',
    'https://drive.google.com/uc?id=1vn5Lep2toJO5nOe8Uii66_cA5cEzUGK7',
    'https://drive.google.com/uc?id=1oaIdtbvrRdT4JDHVNPJKAaGEfaRfPWde',
    'https://drive.google.com/uc?id=1RM2e_1MH5oUEq6KuwOvIXwlApDHjChh4',
    'https://drive.google.com/uc?id=10Su9jqmMVF7W2F0JyOjbz5izdwZufNTB',
    'https://drive.google.com/uc?id=1fITPa_YpWJJ3paetk5fcDEz7nmdIXS6c',
    'https://drive.google.com/uc?id=1GcOXu6608mUs1USrfGt6Q6CwWy6jFNNL',
    'https://drive.google.com/uc?id=1h6d7zRNGDdoc4-0_6lPNoQ4LSthgs_E7',
    'https://drive.google.com/uc?id=1atJvi7I6-jIU6uHiZioAVaY0c1UFTL7-',
    'https://drive.google.com/uc?id=1e6nn1j6PV6tQSYrELDUgLNEExQwR9Yx4',
    'https://drive.google.com/uc?id=11ZMVSRBD4RFbMbmET7QTsw8C136pyu0L',
    'https://drive.google.com/uc?id=1TNwaewif8r9ImCbiI-R7tRXW0UiTI9Qr',
    'https://drive.google.com/uc?id=1Et2QFelNahctNme9oI363rYlYEXtpB9S',
    'https://drive.google.com/uc?id=1KOWnc9kEr0LjOycPLVcbJAQryoiI5bW7',
    'https://drive.google.com/uc?id=1Acx3vnTlB1MALcDIfQ937UNYaTZApfqM',
    'https://drive.google.com/uc?id=1RwlE8rrpoJMlPVcwQ1_dPkaRM8Dx_AyO',
    'https://drive.google.com/uc?id=1lmc8-fshfwkMtDfIZDZevqsLSyBfZzG6',
];


// Call the function to load images for each area
loadImages(StaircaseImages);
loadImages(RelationshipDeskImages);
loadImages(OperationsAreaImages);
loadImages(LobbyAreaImages);
loadImages(HNIareaImages);
loadImages(EntranceAreaImages);
loadImages(CustomerInformationService);


try {
  // Load images from external URLs
  loadImages(StaircaseImages);
  loadImages(RelationshipDeskImages);
  loadImages(OperationsAreaImages);
  loadImages(LobbyAreaImages);
  loadImages(HNIareaImages);
  loadImages(EntranceAreaImages);
  loadImages(CustomerInformationService);

} catch (error) {
  // Handle the network error
  console.error('Network error occurred while loading images:', error);
  // Optionally, display a user-friendly error message
  displayErrorMessageToUser('Failed to load images. Please check your internet connection.');
}

async function loadModel() {
try {
  // Load the object detection model
  const cocoSsdModel = await tf.loadGraphModel('path/to/model.json');
} catch (error) {
  // Handle the model loading error
  console.error('Error loading the object detection model:', error);
  // Optionally, display a user-friendly error message
  displayErrorMessageToUser('Failed to load the object detection model. Please try again later.');
 }
}


// Call the async function
loadModel();




async function someFunction() {
  try {
    // Load the object detection model
    const cocoSsdModel = await tf.loadGraphModel('path/to/model.json');
    // Rest of your code after model is loaded
  } catch (error) {
    // Handle the model loading error
    console.error('Error loading the object detection model:', error);
    // Optionally, display a user-friendly error message
    displayErrorMessageToUser('Failed to load the object detection model. Please try again later.');
  }
}

async function predictFromVideo() {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const tensor = tf.browser.fromPixels(imgData).expandDims();

    const predictions = await cocoSsdModel.detect(tensor);
    const predictionsArray = await predictions.data();
    
    const detectedMarker = detectMarker(predictionsArray);

    if (detectedMarker !== null) {
        handleDetectedMarker(detectedMarker);
    }

    requestAnimationFrame(predictFromVideo);
}

videoElement.addEventListener('loadeddata', async () => {
    videoElement.play();
    await detectObjects(); // Assuming detectObjects() is asynchronous
});

document.addEventListener('DOMContentLoaded', () => {
    launchSystem();
});
