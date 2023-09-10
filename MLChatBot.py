import numpy as py
import string
import random
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

nltk.download('punkt',halt_on_error=False) #for identification of different puns if present in the code
nltk.download('wordnet') #for having access of all the words present in the english dictionary

data=open("Data.txt",'r')
# print(data.read())

#data preprocessing
raw_data=data.read()
raw_data=raw_data.lower() #converting all data into lower case letters and words
# print(raw_data)



s_tokens=nltk.sent_tokenize(raw_data) 
# print("s_tokens: ",s_tokens)
w_tokens=nltk.word_tokenize(raw_data)
# print("w_tokens: ",w_tokens)

#--------------Lemmatization process-------------------------------------
lemmar=nltk.stem.WordNetLemmatizer()

def lematizeTokens(tokens):
    return [lemmar.lemmatize(token) for token in tokens]
removed_punct_dict=dict((ord(punct),None) for punct in string.punctuation)

def normalize_lem(text):
    return lematizeTokens(nltk.word_tokenize(text.lower().translate(removed_punct_dict)))

#--------------------Greeting functions---------------------------------
greetInputs=["hello","hi","hey","hey there","wassup","good morning","good evening","how are you?","greetings"]
greetResponses=["hello there","hey","hi","there there","pleasure to meet you"]

def greet(reply):
    for word in reply.split(" "):
        if word.lower() in greetInputs:
            return random.choice(greetResponses)
        else:
            return 0
        
#----------------------Response functions of the Bot-------------------
        
def respond(user_response):

    bot_response=""
    tfidfVect=TfidfVectorizer(tokenizer=normalize_lem, stop_words='english')
    tfidf=tfidfVect.fit_transform(s_tokens)
    values=cosine_similarity(tfidf[-1],tfidf)
    idx=values.argsort()[0][-2]
    flat=values.flatten()
    flat.sort()
    req_tfidf=flat[-2]

    if req_tfidf==0:
        bot_reponse=bot_response+"Sorry.I am not able to understand you."
        return bot_response
    
    else:
        bot_response=bot_response+s_tokens[idx]
        return bot_response
    
#--------------Structure for the chat between both the parties----------

stopFlag=False
print("Bot: Hello my name is Scar.\nI am the retrieval based chat bot.\nHow can I help you?\n(If you want to stop talking type 'bye' and press Enter)")

while not stopFlag:
    question=input()
    question=question.lower()
    if question =='bye':
        print("bye bye")
        stopFlag=True
    else:
        if question=="thankyou" or question=="thanks":
            print("Bot: you are welcome")

        elif greet(question) != None:
            bot_greet=greet(question)
            print("Bot: ",bot_greet)
            
        else:
            s_tokens.append(question)
            w_tokens=w_tokens+nltk.word_tokenize(question)
            final_words=list(set(w_tokens))
            print("Bot: ",respond(question))
            s_tokens.remove(question)
