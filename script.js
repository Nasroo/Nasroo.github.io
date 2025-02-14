// Function to show the Valentine's message
function showValentineMessage() {
    document.getElementById('message').innerText = 
        "أحب وجودك.. وأعشق كيانكِ في حياتي\nأنا في غرامك\nأنا في غرامك، أعيش كل لحظة متأملًا في تفاصيلك، في تفاصيل كيانك، ولم يعد للعالم معنى دونك.. كل لحظة من حياتي أصبحت أجمل بوجودك، وأنت وحدك من يملك مفتاح قلبي.. لم أتخيل قط أن أكون تحت حبٍّ لم يسبق له وجودٌ، وأنا سعيد وممتنٌّ.. ليس لمرئٍ حظٌّ كحظّي أن تكون لي جوهرةٌ يصطفُّ لها كل من له بصيرة.. أنا حظّي أكبر من أن يتخيله إنسٌ.. أن تكوني لي وأكون لكِ\n\n" +
        "أنام وأحلم، أستيقظ وأحلم.. أحلم باليوم الذي تكوني فيه معي بجنبي.. أعدّ الأيام تعدادا ويا ليت العدّ ينتهي يوما، لأبدأ العدّ مجدّدا.. لنبدأ العدّ.. مجدّدا.. معا..\n\n" +
        "أريد أن أقبلك، أن تلتقي شفاهنا في لحظة تذوب فيها كل المسافات.. كرهت المسافات ولكن ليس قدر ما أحببت حبي لكِ، عشقي أسرني في سجن لا أتمنى الخروج منه، بل زيارتي من خلف القضبان تبعث في العزيمة والقدرة لفتح عينيّ في الصباح.. سهامٌ؟ هي سهامٌ تألمني حينما ليست فيّ منغرسة..\n" +
        "أريد أن أقبلك.. أن أذوب في طعمك وأحس بأسرار قلبك تنبض في كل قبلة كما لو أن الزمان يتوقف لحظتها، ويصبح العالم كله محصورًا في تلك اللمسة..\n\n" +
        "أحبّ حين تناديني عزيزي.. يغمرني شعور بالانتماء\n" +
        "كأنّي طفل.. لاحول ولاقوة لي.. أذوب بين الخيال والحقيقة.. أريد سماع عزيزي من لحنك قبل أن تقبلي ٱلامي.. وتشعريني أنّي.. أنّني على قيد الحياة\n\n" +
        "كلمات.. كلمات تخرج من داخلي.. باطنٌ ممتلئٌ.. يخرج على شكل حروف تحاول تهجئة كيان الحبّ الذي لا تهجئة له.. عشقٌ.. كأنّ وجوده محجوزٌ بين حدود أفق ثقب أسود نوره لا يكاد يتجلى ولكن نور عشقي لك يشعّ أقوى من شمعة في زجاجة.. باقٍ غير فانٍ..\n\n" +
        "في بحر عينيك هامت كل أشواقي يا ربة الحسن هل تنوين إغراقي ما كنت أؤمن بالعيون وفعلها حتى دهتني بالهوى عيناك\n\n"+
        "أحببت سماع نغيم صوتك ورنين لهجتك، تلك التي أشعلت في داخلي نارًا أخمدها برد السنين وظُلمة الفقدان. لا أدري، هل أعود يومًا إلى صغري؟ أم أنكِ أنتِ الفضل الذي يعيدني إلى طفولتي دون أن أدري؟\n"+
        "ذلك الصوت الذي نسج من الحنين وطنًا، ومن الذكرى ملجأً دافئًا يحتويني وسط رياح الغربة والافتقاد. أخبريني، هل للزمن أن يتراجع خطوةً، أم أنني سأظل أبحث عنكِ في طيات الذكرى، بين همسات الشوق وصدى الحروف؟\n"+
        "رأيت في عينيكِ بحرًا من الحكايا، مدنًا من الأمان، وطفلًا يلوّح لي من ضفاف الماضي البعيد. رأيت ليلًا دافئًا يطمئن روحي، وصباحًا نقيًا يغسل عني تعب الأيام.\n\n"+        
        "Siham, sihamsch, esihamsch.. and the long long long elistta goes on.. in this sacred day blessed by the angels of love, whether the world likes it or not, no special day no special hour no special moment are needed to express what I deeply feel towards you and to show how I truly mean it when I say.. I love you\nhemlagh-kem🌻💜🌻🧡"+
        +"\nEmoooooooooooooooouuuuuuuuuuuwaaaaaaa777777777🌻💜🌻🧡"
        "\nWill you be my Valentine?";

    document.getElementById('message').style.display = 'block';
}

// Function to show a styled popup message
function showPopupMessage(text) {
    document.getElementById('popup-text').innerText = text;
    document.getElementById('popup').style.display = 'block';
}

// Add event listener to the Yes button
document.getElementById('yesBtn').addEventListener('click', showValentineMessage);

// No button functionality with stepwise messages
let noClickCount = 0;
const noMessages = [
    "huh? u miss-clicked? try again",
    "chawala hada? tzidi tegheltti? raki diri fiha bel3ani sema",
    "eya hah",
    "sema ana 9ahba w bagra w ma nesswasch?",
    "eya hah tanikitina",
    "emoooouuuuuuuwaa7777🌻🧡🌻💜",
    "hehehehe sayi dork nbeddelha w tchoufi hehehehe"
];

document.getElementById('noBtn').addEventListener('click', function() {
    if (noClickCount < noMessages.length) {
        showPopupMessage(noMessages[noClickCount]);
        noClickCount++;
    } else {
        document.getElementById('popup').style.display = 'none';
        let noBtn = document.getElementById('noBtn');
        noBtn.innerText = "Yes";
        noBtn.id = "yesBtn2";
        noBtn.replaceWith(noBtn.cloneNode(true));
        document.getElementById('yesBtn2').addEventListener('click', showValentineMessage);
    }
});

// Handle Okay button click to close popup
document.getElementById('okBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
