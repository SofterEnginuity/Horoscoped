//create some html to ask for the info we need
//create a function to gather that data
//create the if statements for the date ranges
//create a button to display results
//display the horoscope with day and sign - along with a breif description
//website that i got my descriptions from:https://www.vogue.in/content/star-sign-dates-traits-and-symbols-explained-for-each-zodiac-sign

document.querySelector('#button').addEventListener('click', convert)

function convert() {
    let stringDate = document.querySelector('#dob').value
    console.log(document.querySelector('#dob').value)
    let month = stringDate.substring(5, 7)
    let day = stringDate.substring(8, 10)
    // if the bday is between december 22 and january 19
    if (month == 12 && (day >= 22 && day <= 31) || month == 1 && (day <= 19)) {
        // document.querySelector('#h').innerText = 'You are a Capricorn!'
        document.querySelector('#p').innerText = 'Belonging to the Earth element of the zodiac (like with Taurus and Virgo), you\'re practical, realistic, independent, furiously ambitious. You\'re a workaholic. You\'ve probably never had a sick day in your life. You\'re driven by success and power which can be both a good and a bad thing.You\'re smart, intuitive and disciplined, with an impressive strength of character.'
        document.querySelector('#pic').src = "img/cap.png"
    }
    // if the bday is between january 20 and february 18
    else if (month == 1 && (day >= 20 && day <= 31) || month == 2 && (day <= 18)) {
        // document.querySelector('#h').innerText = 'You are an Aquarius!'
        document.querySelector('#p').innerText = 'Your an Air element along with Gemini and Libra ruled by the planet Uranus, Aquarius are smart, analytical and original. You are hugely creative and unique. Your unconventional and eccentric ways can make you a little unpredictable. People probs think you\'re a bit weird, but if they\'re the type of people you want in your life, they also think your weirdness is what makes you so wonderful.Your analytical nature can make you a bit detached. If anyone\'s got serious bottled up emotion, it\'s you. You\'re strong though and very independent. It just takes a lot for you to let someone in.'
    document.querySelector('#pic').src = "img/aquarius.png"
    }

    // if the bday is between february 19 and march 20
    else if (month == 2 && (day >= 19 && day <= 29) || month == 3 && (day <= 20)) {
        // document.querySelector('#h').innerText = 'You are a Pisces!'
        document.querySelector('#p').innerText = 'Along with Cancer and Scorpio, you belong to the Water element of the zodiac making you deeply emotional and compassionate. This is backed up by your planetary ruling of Neptune, making you super intuitive, faithful and caring.This can give you a tendency to overthink which can make you anxious. Plus, because you\'re so empathetic and understanding, you expect that of others too, and are often disappointed. Words definitely can hurt you and it probably won\'t surprise you to learn that you can be a little over-sensitive. Kindness is not weakness though, it\'s your strength.You likely have an artistic side and don\'t mind being on your own listening to music or doing something arty.'
    document.querySelector('#pic').src = "img/pisces.png"
    }


    // if the bday is between march 21 and april 19
    else if (month == 3 && (day >= 21 && day <= 31) || month == 4 && (day <= 19)) {
        // document.querySelector('#h').innerText = 'You are an Aries!'
        document.querySelector('#p').innerText = 'You are a natural-born leader. Ruled by Mars (the god of War), it\'s probably no surprise that you\'re known for being ballsy and pioneering.You\'re tenacious and don\'t get scared.You like to take risks, try new experiences and get an adrenaline rush.Sure, it might mean that things don\'t always go your way, but it also makes you passionate and full of fire. If there\'s one thing you\'re not, Aries, it\'s boring.'
    document.querySelector('#pic').src = "img/aries.png"
    }

    // if the bday is between april 20 and may 20
    else if (month == 4 && (day >= 20 && day <= 30) || month == 5 && (day <= 20)) {
        // document.querySelector('#h').innerText = 'You are a Taurus!'
        document.querySelector('#p').innerText = 'This is one of the most reliables signs, known for being stable, reliable and devoted. Your friends are important to you and, once you get close with someone, you are fiercely loyal.This commitment is also reflected in your work, although can also be interpreted as stubbornness. Yes, you are typically stubborn, but it probably stems from the fact you can\'t stand change. You just know what you want and how things should be, and you like to keep it that way.'
    document.querySelector('#pic').src = "img/taurus.png"
    }

    // if the bday is between may 21 and june 20
    else if (month == 5 && (day >= 21 && day <= 31) || month == 6 && (day <= 20)) {
        // document.querySelector('#h').innerText = 'You are a Gemini!'
        document.querySelector('#p').innerText = 'Gentle Gemini. You are affectionate and curious and, as you\'re an Air sign (like Libra and Aquarius), you are smart, sharp, quick-learning and adaptable. You\'re all about the mind–you are analytical but you can still be impulsive and erratic.You\'ll probably be found at the party mixing your drinks and chatting BS. And why the hell not? You\'re a fun time gal. People like to have you around. You\'re funny and make people laugh, though your jokes can sometimes be a little on the nose. Who cares though? It\'s not your fault if they get offended.'
    document.querySelector('#pic').src = "img/gemini.png"
    }

    // if the bday is between june 21 and july 22
    else if (month == 6 && (day >= 21 && day <= 30) || month == 7 && (day <= 22)) {
        // document.querySelector('#h').innerText = 'You are a Cancer!'
        document.querySelector('#p').innerText = 'You don\'t get much more loyal than you, Cancer. Your level of emotional depth, understanding and compassion is unrivalled. You put yourself in other people\'s shoes. You listen—like, properly listen—and you keep their secrets.You do tend to be a bit clingy though and despite your incredible empathy, you can\'t always tell when someone needs their space. This won\'t help your mood, which tbh can be a bit all over the place. Because deep down, you\'re quite fragile. But really, who isn\'t? And if it makes you that caring and kind, then it\'s no bad thing.'
    document.querySelector('#pic').src = "img/cancer.png"
    }

    // if the bday is between july 23 and august 22
    else if (month == 7 && (day >= 23 && day <= 31) || month == 8 && (day <= 22)) {
        // document.querySelector('#h').innerText = 'You are a Leo!'
        document.querySelector('#p').innerText = 'Leo is ruled by the sun, making you reliable, stable, vivacious and full of life. You are self-confident and entertaining. Being centre stage doesn\'t often bother you, whether that\'s with mates at a party or with colleagues at work. You like to take command. You\'re courageous.Sometimes, this dominance and confidence can come across as arrogance. You\'re probably not everyone\'s cup of tea, and some may find you overbearing. For the most part though, you bring fun and vibrance to people\'s lives. You\'re unforgettable, Leo.'
    document.querySelector('#pic').src = "img/leo.png"
    }


    // if the bday is between august 23 and september 22
    else if (month == 8 && (day >= 23 && day <= 31) || month == 9 && (day <= 22)) {
        // document.querySelector('#h').innerText = 'You are a Virgo!'
        document.querySelector('#p').innerText = 'You\'re an Earth sign along with Taurus and Capricorn, making you practical and reliable, and because you\'re ruled by Mercury, you are speedy, organised and fiercely clever.You have high standards and you know how things should be done. So yes, you\'re a bit of a control freak. It\'s your way or the highway. This can make your inner critic quite savage though, and there\'s no one harder on you than yourself. You work damn hard though, and there\'s no task too big or hard, whether it\'s for you or other people. You\'re helpful like that, Virgo.'
    document.querySelector('#pic').src = "img/virgo.png"
    }


    // if the bday is between september 23 and october 22
    else if (month == 9 && (day >= 23 && day <= 30) || month == 10 && (day <= 22)) {
        // document.querySelector('#h').innerText = 'You are a Libra!'
        document.querySelector('#p').innerText = 'Along with Gemini and Aquarius, you\’re an Air element, making you charming and cool. You probably have no difficulty making friends; people are drawn to you.You\’re an over-thinker which makes you indecisive. You\'ve probably had an exasperated, "Will you just pick one already?!"- aimed your way. You are a nightmare to order Doordash with. Your love of balance means you can\'t stand mess, and being ruled by Venus, you\'re into beautiful things. You want everything to look nice. If you mess up your winged eyeliner even slightly, you\'re taking it all off and starting again.'
    document.querySelector('#pic').src = "img/libra.png"
    }


    // if the bday is between october 23 and november 21
    else if (month == 10 && (day >= 23 && day <= 31) || month == 11 && (day <= 21)) {
        // document.querySelector('#h').innerText = 'You are a Scorpio!'
        document.querySelector('#p').innerText = 'There are MANY different sides to you, Scorpio. On the surface, you\'re a ball-buster; confident and set in your ways. But underneath it all, you\'re incredibly emotional (not that you\'ll ever admit it) and you have a deep desire for connection (that\'s the Water element talking). You\'re the one who will get ghosted and act like you just DGAF, but really, you\'re crying on the inside.But anyone who wrongs you better watch out. You are not one for forgiveness.It\'s no surprise that you can kick off when betrayed. No one messes with Scorpio.You\'ll fight tooth and nail for the people you love though; you\'re fiercely protective. There\'s no one better to have fighting your corner than you, Scorpio.'
    document.querySelector('#pic').src = "img/scorpio.png"
    }

    // if the bday is between november 22 and december 21
    else if (month == 11 && (day >= 22 && day <= 31) || month == 12 && (day <= 21)) {
        // document.querySelector('#h').innerText = 'You are an Sagittarius!'
        document.querySelector('#p').innerText = 'You hate being contained or told what to do; routine is your enemy. You\'re restless and love going to new places, though this can make you reckless. You\'ve made some bad decisions in your time.You\'re honest (sometimes painfully so), but people always know where they stand with you. You\'re never two-faced. You have a bad bitch sense of humour and your friends probs think you\'re hilarious. You\'re the queen of the clapbacks.'
    document.querySelector('#pic').src = "img/sag.png"
    }
    else{
        document.querySelector('#h').innerText = 'Please enter a valid date of birth!'  
   } 

}