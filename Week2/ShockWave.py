import random




a = "Welcome to Shockwave Wars!"
print a


playerPower = 0 
computerPower = 0 
computerChoice = None
choice = None


name = raw_input("Enter an enemy name: ")
story = "Your enemy is called "+ name + ", " \
"who would defeat you with very powerful shock waves. " \
"Try to beat him in the following ways:" \
"COLLECT : Every time you collect energy, you can shock once, if you are shocked in the state of COLLECT, you will die. " \
"SHOCK : Every time you shock enemy, you will consume a COLLECT. " \
"DEFENSE : Feel free to use, it can offset a SHOCK. " \
"NUCLEAR : When you COLLECT 3, you can use NUCLEAR. NUCLEAR cannot be defensed and will consume 3 COLLECTS. "
print (story)

print "Let's begin."
gameOver = False
flag = False
while gameOver == False:
  
 if (playerPower < 3):
    choice = raw_input("What is your choice? [collect , defensed , shock]")
  elif (playerPower >= 3):
    choice = raw_input("What is your choice? [collect , defensed, shock , nuclear]")
  else:
    print "nothing"
    
 works = True
  computerChoice = None
  computerChoiceText =''
  
 if (playerPower < 1 and choice == "shock"):
      print "You do not have enough power. Please choose another option."
      works = False
  elif (choice == "collect"):
      playerPower += 1
      works = True
  elif (choice =="shock" and playerPower > 0):
      playerPower -=1
      works = True
  elif (choice =="nuclear"):
    playerPower -=3
    work = True
    gameOver = True
  import random
  if (works == True):
    if (flag == False):
        computerChoice = 0
        flag = True
    elif (flag == True and computerPower < 1):
        computerChoice = random.randint(0,1)
    elif (flag == True and computerPower > 0 and computerPower < 3):
      computerChoice = random.randint(0,2)
    elif (flag == True and computerPower > 2):
      computerChoice = 3
      computerChoiceText = 'Nuclear'
      computerPower -=3
      gameOver = True
    if (computerChoice == 0):
         computerChoiceText = 'Collect'
         computerPower+=1
         if (choice == "shock"):
           gameOver = True
    elif (computerChoice == 1):
         computerChoiceText = 'Defense'
    elif (computerChoice == 2):
         computerChoiceText = 'Shock'
         computerPower -=1
         if (choice == "collect"):
           gameOver = True
   # elif (computerChoice == 3):
   #      computerChoiceText = 'Nuclear'
    #     computerPower -=3
    #     gameOver = True
        
  
 
   print "You chose " + str(choice) + " and the computer chose " + computerChoiceText
        #if (choice == computerChoice)
    print 'Current Player Power: ' + str(playerPower)
    print 'Current Computer Power: '+ str(computerPower)
    
   if (gameOver == True and (choice == "shock" or choice == "nuclear")):
      print "Game over! you win"
    if (gameOver == True and (choice != "shock" and choice != "nuclear")):
      print "Game over! you lose"
