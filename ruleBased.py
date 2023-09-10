import re
import random

class RuleBasedBot:
    ##Obvious Negative Responses from users
    neg_response=["No","no","nope","Nope","Not possible","disagree","opposition","oppose","reject","disapprove","refuse","sorry","nah","naw","not a chance"]
    ##obvious response from user which indicate that user wants to stop talking
    exit_response=["Bye","byebye","goodbye","later","quit","exit","leave","pause","see you later"]

    random_questions=[
        "Who created you?\n",
        "Why are you created?\n",
        "Are there any programming language that I can learn?\n",
        "Why has programming became a need in your place?\n",
        "Does programming help you become intelligent?\n",
        "Is there any programming language that can be considered the best among all others?\n",
        "What types of languages have you learned or tried learning it?\n",
        "What kind of knowledge is required in creating these programming languages?\n"
    ]

    def __init__(self): #initializing
        self.programmingBotMap={'describe_origin':r'^Who',
                                'describe_intent':r'^Why.*\s*created\?$',
                                'describe_pl':r'^Are',
                                'describe_reason':r'Why.*\s*programming.*\s*need.*\s*',
                                'describe_intel':r'^Does',
                                'describe_best_pl':r'^Is'
                                }

    def startConvo(self): #working
        self.name=input("What is your name?\n")
        will_help=input(
            f"Hi {self.name}, My name is Scar.Can you tell me anything about programming?\n"
        )
        
        if will_help in self.neg_response:
            print("Ok it was nice meeting you.Thank you for your patience.Bye Bye")
            return
        self.chat(will_help)
    
    def exit_chat(self,reply): #working
        for command in self.exit_response:
            if reply==command:
                print("Ok it was nice meeting you.Bye-Bye")
                return True
    
    def chat(self,reply): #working 
        # print("Reply given at chat():",reply)
        while not self.exit_chat(reply):
            reply=input(self.match_reply(reply))

    def match_reply(self,reply):
        for key,value in self.programmingBotMap.items():
            intent=key
            pattern=value
            print("Value of pattern at match_reply:",pattern)
            pattern_match=re.match(pattern,reply)
            
            if pattern_match and intent=="describe_origin":
                return self.describe_origin()
            elif pattern_match and intent=="describe_intent":
                return self.describe_intent()
            elif pattern_match and intent=="describe_pl":
                return self.describe_pl()
            elif pattern_match and intent=="describe_reason":
                return self.describe_reason()
            elif pattern_match and intent=="describe_intel":
                return self.describe_intel()
            elif pattern_match and intent=="describe_best_pl":
                return self.describe_best_pl()
            
        if not pattern_match:
            return self.no_describe()
        
    def describe_origin(self): #working
        responses=("I am created by a human who was living in 2bhk flat\n",
                   "A student named Alex Quinson who is a late teen entering his 20s has created me.\n",
                   "I am actually created by a programming language called python which was used by my creator\n")
        return random.choice(responses)
    
    def describe_intent(self): #working
        responses=("I am here to help you find whatever things you need but in a faster and efficient way\n",
                   "I am here to make your life less cumbersom","I am created so as to ease your problems\n")
        return random.choice(responses)
        
    def no_describe(self): #working
        responses=("Please tell me more about it \n",
                   "Sorry I don't know anything about it, can you elaborate it furthur\n",
                   "Hmm Interesting! can you tell me more about it?\n",
                   "I see. How do you think?\n",
                   "Why?\n",
                   "Why do you put it that way?\n"
                   )
        return random.choice(responses)
    
    def describe_pl(self): #working
        responses=("There are many programming languages you can learn and teach it to others\n",
                   "Definitely, there are languages like HTML,CSS, JS, Python ,etc.\n",
                   "Of course, you can learn language like R Fortran or anyother by doing an online course\n"
                   )
        return random.choice(responses)
    
    def describe_reason(self): #working
        responses=("It is the case because I am myself created by the use of a programming language.\n",
                   "Well, to make my friends it is an important thing as I love my friends and my creator\n"
                   )
        return random.choice(responses)
    
    def describe_intel(self): #working
        responses=("If you do learn programming, you will be considered as intelligent\n",
                   "Problem solving intelligence is'nt the only intelligence that is present in this world \n",
                   "Without a doubt, cause most of the individuals want to solve their problems in a fast manner \n"
                   )
        return random.choice(responses)
    
    def describe_best_pl(self): #working
        responses=("Best actually depends on the type of need and thus its subjective\n",
                   "There is nothing like \"The Best\" language from all the other languages\n",
                   )
        return random.choice(responses)
    
scarObject=RuleBasedBot()
scarObject.startConvo()