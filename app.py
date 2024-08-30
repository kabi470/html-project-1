import speech_recognition as sr 
import pyttsx3
import pyjokes
import webbrowser
import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

print('I am Haris varma Artificial Inteligence')
assis_name="Haris varma A i"
boss_name="Antony samuvel and Sam nivesh"
def say(text):
    engine=pyttsx3.init()
    voice=engine.getProperty('voices')
    engine.setProperty('voice',voice[0].id)
    engine.say(text)
    engine.runAndWait()

def takecommand():
    r=sr.Recognizer()
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source,duration=1)
        print("Listening.......")
        r.pause_threshold=1
        audio=r.listen(source)
        try:
            print("Recognizing please wait.............")
            text=r.recognize_google(audio,language='en-in')
            print(f"You said : {text}\n")
        except Exception as e :
            print(e)
            print("can not recognize your voice")
            return "None"
        return text

def tell_joke():
    joke=pyjokes.get_joke()
    return joke
    

def respond(text):
    if 'hi bro' in text:
        say("HI Sir or Mam !")
        print("HI Sir or Mam !")
    elif "who is created you" in text:
        say("Antony samuvel and sam nivesh was created me")
        print("Antony samuvel and sam nivesh was created me")
    elif "who are you" in text or 'what is your name' in text:
        say("My name is {}".format(assis_name))
        print("My name is {}".format(assis_name))
    elif "good morning" in text: 
        say("A warm" +text)
        print("A warm" +text)
        say("How are you"+boss_name+"?")
        print("How are you"+boss_name+"?")
    elif "I am fine" in text:
        say("oh really good")
        print("oh really good")
    elif "who I am" in text: 
        say("If you talk then definately your human.")
        print("If you talk then definately your human.")
    elif 'who are you' in text:
        say("My name is "+assis_name+"!"+"i was created by "+boss_name)
        print("My name is "+assis_name+"!"+"i was created by "+boss_name)
    elif 'where I am studying' in text:
        say("you are currently studying in haris varma matric higher secondary school ")
        print("you are currently studying in haris varma matric higher secondary school ")
    elif 'who is founder of psi college' in text:
        say("Honouaaraablle S Pandian is founder of a PSY college")
        print("S. Pandian is founder of college")
    elif 'thank you' in text:
        say("It's my pleasure Sir!")
        print("It's my pleasure Sir!")
    elif 'fine' in text or "good" in text: 
        say("It's good to know that your fine")
    elif 'tell me a joke' in text:
        engine2=pyttsx3.init()
        engine2.setProperty('rate',100)
        engine2.say(tell_joke())
        engine2.runAndWait()
    elif 'open our school site' in text:
        webbrowser.open('www.harisvarma.com')
    elif 'open psi college site' in text:
        webbrowser.open('www.psyec.edu.in')
    elif 'who is our principal' in text:
        say("our principal is miss Souw miiyaa mam")
        print("our principal is mrs.dr.sowmiya mam")
    elif 'where is our school located' in text:
        say("our school is located at ariyanendal paramakudi")
        print("our school is located at ariyanendal paramakudi")
    elif 'In what galaxy our solar system located?' in text:
        say("milky way")
        print('milky way')
    elif 'who is cheif minister of tamil nadu' in text:
        say("Honourable m k stalin is our chief minister")
        print("Honourable m k stalin is our chief minister")
    elif "your opinion about harish varma" in text:
        say("right place for good education")
        print("Right Place for Good education")
    elif 'what is your opinion about PSI college' in text:
        say("pandian saraswathi yadav college providing education and events to the students to enhance their level to expose their tallent to the society")
        print("pandian saraswathi yadav college providing education and events to the students to enhance their level to expose their tallent to the society")
    elif 'play our school intro' in text:
        webbrowser.open('https://youtu.be/nnEcvaHa7i4?si=QRpbz3c2tfMM6g-I')
    elif 'play previous Guru Utsav competition' in text:
        webbrowser.open('https://youtu.be/pXzcTkwaWt0?si=fYk4uReJO5y0orDo')
    elif 'play intro video' in text:
        webbrowser.open('https://youtu.be/7sBUUQNz2yE?si=idgp-IioA0RVqPFy')
    elif 'play a song' in text:
        webbrowser.open('https://youtu.be/CCJctjIO5kU?si=O-pBP5dI9Hx7Z7go')
    elif 'play rhymes' in text:
        webbrowser.open('https://youtu.be/QNYB7Tsb880?si=P-_xIT_uZuaeGae5')
    elif 'play our opinion about event' in text:
        webbrowser.open('https://youtube.com/shorts/RkQ3wGwOzm8?si=AYbT0IHA8DTUWpCQ')

        

while True:
    text=takecommand()
    respond(text)