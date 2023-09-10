import numpy as py
import string
import random
import nltk
nltk.download('punkt',halt_on_error=False) #for identification of different puns if present in the code
nltk.download('wordnet') #for having access of all the words present in the english dictionary

data=open("Data.txt",'r')
# print(data.read())

#data preprocessing
raw_data=data.read()
raw_data=raw_data.lower() #converting all data into lower case letters and words
# print(raw_data)



s_tokens=nltk.sent_tokenize(raw_data)
print("s_tokens:",s_tokens)
