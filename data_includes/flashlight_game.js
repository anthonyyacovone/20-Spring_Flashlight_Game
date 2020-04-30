
// Establish the sequence for the flashlight game

alert("Please note: This study *only* works properly with Google Chrome and Safari browsers. It *does not* work with Opera, FireFox, Edge, iOS, and Andriod. Please switch your browser (if necessary) before continuing. Thank you!")
         
var shuffleSequence = seq("intro","consent","demo","welcome",
                          "practiceInstructions","practice_button_1","practice_1",
                          "practice_button_2", "practice_2",
                          "practice_button_3", "practice_3", "ready",
                          "button", sepWith("button",randomize(startsWith("sentence"))), "debrief","exit")
    

// Define some default parameters    
    
var defaults = [
    "QuestionAlt", {randomOrder: false,
        presentHorizontally: true}, //fixes the presentation 
 
    "Message", {
        hideProgressBar: true
    },
    "AY_Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        continueMessage: null,
        transfer: 1000
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        continueMessage: null
    }
];


// Shuffle the set of stimuli and then define which set will be presented to the participants 
// Things to do: Cut the number of items in half, keeping the ratio the same but doubling the number of participants 

    
var n = 0 // sets the number for the random sentence from the array of 60 non-questioned target and filler stimuli
var q = 0 // sets the number for the question filler sentence and the question presented
var correctList = "s" // sets the number for the number of accurate question trials
    
// Define the set of items for IbexFarm to use

var items = [
    
    // In-between screens: no html file added to the chunk includes section
    
     ["ready", "Message", {consentRequired: false, transfer: 4000,
                    html: [ 
                            ["div", {"@style.fontFamily": "Times New Roman", "@style.fontSize":"xx-large", "@style.textAlign":"center", "@style.marginTop":"3em"}],
                            ["br"],
                            ["h1", "That's it for practice!"],
                            ["h3", "The real game will start automatically in a few seconds."],
                            ["br"],
                            ["h3", "Good luck!"],
                          ]}],
    
     ["practiceInstructions", "Message", {consentRequired: false, transfer: 8000,
                    html: [ 
                            ["div", {"@style.fontFamily": "Times New Roman", "@style.fontSize":"xx-large", "@style.textAlign":"center", "@style.marginTop":"3em"}],
                            ["br"],
                            ["h1", "The practice is about to begin!"],
                            ["br"],
                            ["h3", "Good luck!"],
                          ]}],
    
    // All of the arrow clicking screens that check to make sure the screen is maximized, zoom is at 100%, and the screen brightness is all the way up
    

    
    ["practice_button_1", "Message_AY", {consentRequired: false, hideProgressBar: true, continueMessage: "", html:  { include: "practice_button_check.html"}}],
    ["practice_button_2", "Message_AY", {consentRequired: false, hideProgressBar: true, continueMessage: "", html:  { include: "practice_button_check2.html"}}],
    ["practice_button_3", "Message_AY", {consentRequired: false, hideProgressBar: true, continueMessage: "", html:  { include: "practice_button_check3.html"}}],
    ["button", "Message_AY", {consentRequired: false, hideProgressBar: true, continueMessage: "", html: { include: "button_check.html"}}],

    
    // Conset, instructions, demographic survey, debrief, and exit screens below
    // Things to add: The instructions needs to demonstrate that they will be pressing an arrow and the sentence will be popping up, create a short gif, maybe? 
    
    ["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, consentRequired: true, html: {include: "MTurk_SONA_consent_2020.html" }} ],
    
    ["welcome", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Click here to try some practice", continueOnReturn: false, html: { include: "Welcome.html"},} ],
    ["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "demographics.html" }} ],
    ["exit", "Form", {consentRequired: false, continueMessage:"Click here to continue", html: {include: "MTurk_SONA_exit.html" }} ],
    ["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Click here to submit your answers", continueOnReturn: false, html: { include: "MTurk_SONA_debrief.html"},} ],
  
    // Create the practice trials 
    ["practice_1", "AY_Form", {html:  { include: "practice_reader.html"},},], 
    ["practice_2", "AY_Form", {html:  { include: "practice_reader_2.html"},},], 
    ["practice_3", "AY_Form", {html:  { include: "practice_reader_3.html"},},], 

    
    // Beginning of the experimental sentences: There will be a question every five sentences and an update screen showing their current accuracy levels 
    // Things to add: Need to make the comprehension questions for every fifth sentence set, so we need to set the fifth sentence in each pair, write the questions, and then make the accuracy screen

["sentence_1", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_2", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_3", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_4", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_5", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_6", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_7", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_8", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_9", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_10", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_11", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_12", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_13", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_14", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_15", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_16", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_17", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_18", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_19", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_20", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_21", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_22", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_23", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_24", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_25", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_26", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_27", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_28", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_29", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_30", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_31", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_32", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_33", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_34", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_35", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_36", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_37", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_38", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_39", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_40", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_41", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_42", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_43", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_44", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_45", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_46", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_47", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_48", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_49", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_50", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_51", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_52", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_53", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_54", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_55", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_56", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],


["sentence_57", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_58", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_59", "AY_Form", {html:  { include: "flashlight_reader.html"},},], 
["sentence_60", "AY_Form", {html:  { include: "flashlight_reader_q.html"},},
               "AY_Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Continue reading...", consentRequired: true, html: {include: "q.html" }} ],



  
];
    

// Assign the list of stimuli to be presented
var shuffledID = shuffleArray([1, 2, 3])[0]

if (shuffledID == 1) { 
      
    var list = "list1"
    var array = shuffleArray(["John used a pump to inflate the large carrots for dinner last night.",
    "The man used a knife to spread the steaming asphalt on the road.",
    "The man used a strainer to drain the thin spaghetti yesterday evening.",
    "The woman used a book to teach the tough bread very carefully.",
    "Bill used the scissors to cut the hard cheese from Italy.",
    "The hostess used the dish to serve the hot beans for dinner.",
    "The man used the phone to call the old frame together. ",
    "Jenny used a mousetrap to catch the small butterfly flying by.",
    "Patricia used a bucket to carry the fresh water extremely carefully.",
    "George used a harness to restrain the many flowers in his garden.",
    "Frank used a helicopter to transport the heavy groceries from the store.",
    "Julie used a bell to summon the various children after recess.",
    "Melinda used a spatula to flip the little house at night.",
    "The woman used a rag to apply the thick mascara in the morning.",
    "Gloria used a shortcut to avoid the annoying traffic on Main Street.",
    "Jenny’s English teacher threw a piece of chalk at the blackboard because he was so angry.",
    "The volunteer fireman sped around the corner on his way to the firehouse.",
    "The preacher gave a rousing sermon last Sunday.",
    "George only went to his parents’ house when he wanted to do laundry.",
    "Whenever her parakeet pecked at the door of its cage, Mary let it out.",
    "Every Friday evening my grandparents play bingo.",
    "The chef from a popular cooking show used black pepper in every dish.",
    "Kendra couldn’t open the can of tomato sauce without using a towel to grip the lid.",
    "Barbara planned to make chicken soup for supper.",
    "Driving to Pittsburgh takes a very long time.",
    "The actress’ manager talked to the producers about increasing her salary.",
    "Donna knew that the neighbor’s dog didn’t bite, but she was still scared of it.",
    "The racecar squealed around the curve, spewing smoke behind it.",
    "The barber stood by the door of his shop, enjoying the warm air and bright sun.",
    "The astronaut looked out the window of his lunar module.",
    "Paula honked loudly at the delivery truck that was blocking her driveway.",
    "The delivery man dropped a fragile package on the floor by mistake.",
    "The cashier forgot to ring up the laundry detergent in the bottom of the customer’s cart.",
    "One of the aerobics instructors at the gym forgot her sneakers last Monday.",
    "A bodybuilder ordered megavitamins from an on-line store.",
    "The farmer drove his tractor up and down the field, plowing the earth in preparation for planting.",
    "Henry’s brother ordered a tuxedo for the prom.",
    "The man in dressed in a big pink pig suit stood guard outside the camp.",
    "The coach shouted encouragement at the opposing team.",
    "Mandy wrote a letter to her boyfriend on newspaper.",
    "Sometimes the town’s butcher and baker would go hiking together and discuss food.",
    "The nurse frantically buzzed the intercom to get the doctor’s attention.",
    "An investor called his broker, complaining about the high surcharges on his account.",
    "Kimberly got a new puppy and named him Duncan.", 
    "The baby did spectacularly on the statistics test."]);
  
  } else if (shuffledID == 2) { 
    
    var list = "list2" 
    var array = shuffleArray(["John used an axe to chop the large carrots for dinner last night.",
    "The man used a shovel to spread the steaming asphalt on the road.",
    "The man used a feather to tickle the thin spaghetti yesterday evening.",
    "The woman used a saw to cut the tough bread very carefully.",
    "Bill used the knife to cut the hard cheese from Italy.",
    "The hostess used the music to calm the hot beans for dinner.",
    "The man used the chopsticks to hold the old frame together.",
    "Jenny used a net to catch the small butterfly flying by.",
    "Patricia used a fork to eat the fresh water extremely carefully.",
    "George used a sword to protect the many flowers in his garden.",
    "Frank used a cart to transport the heavy groceries from the store.",
    "Julie used a needle to sew the various children after recess.",
    "Melinda used an anchor to secure the little house at night.",
    "The woman used a brush to apply the thick mascara in the morning.",
    "Gloria used a mask to scare the annoying traffic on Main Street.",
    "Jenny’s English teacher threw a piece of chalk at the blackboard because he was so angry.",
    "The volunteer fireman sped around the corner on his way to the firehouse.",
    "The preacher gave a rousing sermon last Sunday.",
    "George only went to his parents’ house when he wanted to do laundry.",
    "Whenever her parakeet pecked at the door of its cage, Mary let it out.",
    "Every Friday evening my grandparents play bingo.",
    "The chef from a popular cooking show used black pepper in every dish.",
    "Kendra couldn’t open the can of tomato sauce without using a towel to grip the lid.",
    "Barbara planned to make chicken soup for supper.",
    "Driving to Pittsburgh takes a very long time.",
    "The actress’ manager talked to the producers about increasing her salary.",
    "Donna knew that the neighbor’s dog didn’t bite, but she was still scared of it.",
    "The racecar squealed around the curve, spewing smoke behind it.",
    "The barber stood by the door of his shop, enjoying the warm air and bright sun.",
    "The astronaut looked out the window of his lunar module.",
    "Paula honked loudly at the delivery truck that was blocking her driveway.",
    "The delivery man dropped a fragile package on the floor by mistake.",
    "The cashier forgot to ring up the laundry detergent in the bottom of the customer’s cart.",
    "One of the aerobics instructors at the gym forgot her sneakers last Monday.",
    "A bodybuilder ordered megavitamins from an on-line store.",
    "The farmer drove his tractor up and down the field, plowing the earth in preparation for planting.",
    "Henry’s brother ordered a tuxedo for the prom.",
    "The man in dressed in a big pink pig suit stood guard outside the camp.",
    "The coach shouted encouragement at the opposing team.",
    "Mandy wrote a letter to her boyfriend on newspaper.",
    "Sometimes the town’s butcher and baker would go hiking together and discuss food.",
    "The nurse frantically buzzed the intercom to get the doctor’s attention.",
    "An investor called his broker, complaining about the high surcharges on his account.",
    "Kimberly got a new puppy and named him Duncan.", 
    "The baby did spectacularly on the statistics test."]);

} else { 
    
    var list = "list3"
    var array = shuffleArray(["John used a knife to chop the large carrots for dinner last night.",
    "The man used a grill to cook the steaming asphalt on the road.",
    "The man used a net to drain the thin spaghetti yesterday evening.",
    "The woman used a knife to cut the tough bread very carefully.",
    "Bill used the calculator to compute the hard cheese from Italy.",
    "The hostess used the toothpick to serve the hot beans for dinner.",
    "The man used the clamp to hold the old frame together.",
    "Jenny used a hose to water the small butterfly flying by.",
    "Patricia used a purse to carry the fresh water extremely carefully.",
    "George used a fence to protect the many flowers in his garden.",
    "Frank used a hammer to nail the heavy groceries from the store.",
    "Julie used a flare to summon the various children after recess.",
    "Melinda used a lock to secure the little house at night.",
    "The woman used a pitchfork to carry the thick mascara in the morning.",
    "Gloria used a loophole to avoid the annoying traffic on Main Street.",
    "Jenny’s English teacher threw a piece of chalk at the blackboard because he was so angry.",
    "The volunteer fireman sped around the corner on his way to the firehouse.",
    "The preacher gave a rousing sermon last Sunday.",
    "George only went to his parents’ house when he wanted to do laundry.",
    "Whenever her parakeet pecked at the door of its cage, Mary let it out.",
    "Every Friday evening my grandparents play bingo.",
    "The chef from a popular cooking show used black pepper in every dish.",
    "Kendra couldn’t open the can of tomato sauce without using a towel to grip the lid.",
    "Barbara planned to make chicken soup for supper.",
    "Driving to Pittsburgh takes a very long time.",
    "The actress’ manager talked to the producers about increasing her salary.",
    "Donna knew that the neighbor’s dog didn’t bite, but she was still scared of it.",
    "The racecar squealed around the curve, spewing smoke behind it.",
    "The barber stood by the door of his shop, enjoying the warm air and bright sun.",
    "The astronaut looked out the window of his lunar module.",
    "Paula honked loudly at the delivery truck that was blocking her driveway.",
    "The delivery man dropped a fragile package on the floor by mistake.",
    "The cashier forgot to ring up the laundry detergent in the bottom of the customer’s cart.",
    "One of the aerobics instructors at the gym forgot her sneakers last Monday.",
    "A bodybuilder ordered megavitamins from an on-line store.",
    "The farmer drove his tractor up and down the field, plowing the earth in preparation for planting.",
    "Henry’s brother ordered a tuxedo for the prom.",
    "The man in dressed in a big pink pig suit stood guard outside the camp.",
    "The coach shouted encouragement at the opposing team.",
    "Mandy wrote a letter to her boyfriend on newspaper.",
    "Sometimes the town’s butcher and baker would go hiking together and discuss food.",
    "The nurse frantically buzzed the intercom to get the doctor’s attention.",
    "An investor called his broker, complaining about the high surcharges on his account.",
    "Kimberly got a new puppy and named him Duncan.", 
    "The baby did spectacularly on the statistics test."]);
};
    

// Various functions needed for the question section
    

function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
