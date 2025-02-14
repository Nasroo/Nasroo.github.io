// Function to show the Valentine's message
function showValentineMessage() {
    document.getElementById('message').innerText = "أحب وجودك.. وأعشق كيانكِ في حياتي\nأنا في غرامك\nأنا في غرامك، أعيش كل لحظة متأملًا في تفاصيلك، في تفاصيل كيانك، ولم يعد للعالم معنى دونك.. كل لحظة من حياتي أصبحت أجمل بوجودك، وأنت وحدك من يملك مفتاح قلبي.. لم أتخيل قط أن أكون تحت حبٍّ لم يسبق له وجودٌ، وأنا سعيد وممتنٌّ.. ليس لمرئٍ حظٌّ كحظّي أن تكون لي جوهرةٌ يصطفُّ لها كل من له بصيرة.. أنا حظّي أكبر من أن يتخيله إنسٌ.. أن تكوني لي وأكون لكِ\n\nأنام وأحلم، أستيقظ وأحلم.. أحلم باليوم الذي تكوني فيه معي بجنبي.. أعدّ الأيام تعدادا ويا ليت العدّ ينتهي يوما، لأبدأ العدّ مجدّدا.. لنبدأ العدّ.. مجدّدا.. معا..\n\nأريد أن أقبلك، أن تلتقي شفاهنا في لحظة تذوب فيها كل المسافات.. كرهت المسافات ولكن ليس قدر ما أحببت حبي لكِ، عشقي أسرني في سجن لا أتمنى الخروج منه، بل زيارتي من خلف القضبان تبعث في العزيمة والقدرة لفتح عينيّ في الصباح.. سهامٌ؟ هي سهامٌ تألمني حينما ليست فيّ منغرسة..\nأريد أن أقبلك.. أن أذوب في طعمك وأحس بأسرار قلبك تنبض في كل قبلة كما لو أن الزمان يتوقف لحظتها، ويصبح العالم كله محصورًا في تلك اللمسة..\n\nأحبّ حين تناديني عزيزي.. يغمرني شعور بالانتماء\n\nكأنّي طفل.. لاحول ولاقوة لي.. أذوب بين الخيال والحقيقة.. أريد سماع عزيزي من لحنك قبل أن تقبلي ٱلامي.. وتشعريني أنّي.. أنّني على قيد الحياة\n\nكلمات.. كلمات تخرج من داخلي.. باطنٌ ممتلئٌ.. يخرج على شكل حروف تحاول تهجئة كيان الحبّ الذي لا تهجئة له.. عشقٌ.. كأنّ وجوده محجوزٌ بين حدود أفق ثقب أسود نوره لا يكاد يتجلى.. ولكن نور عشقي لك يشعّ أقوى من شمعة في زجاجة.. باقٍ غير فانٍ..\n\nفي بحر عينيك هامت كل أشواقي يا ربة الحسن هل تنوين إغراقي ما كنت أؤمن بالعيون وفعلها حتى دهتني بالهوى عيناك";
    document.getElementById('message').style.display = 'block';
}

// Add event listener to the original Yes button
document.getElementById('yesBtn').addEventListener('click', showValentineMessage);

// Handle No button click
document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

// Handle Okay button click (convert No to Yes)
document.getElementById('okBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';

    let noBtn = document.getElementById('noBtn');
    noBtn.innerText = "Yes";  // Change text to Yes
    noBtn.id = "yesBtn2";  // Change the ID to avoid conflicts

    // Remove previous event listener (No button function)
    noBtn.replaceWith(noBtn.cloneNode(true));
    document.getElementById('yesBtn2').addEventListener('click', showValentineMessage);
});


