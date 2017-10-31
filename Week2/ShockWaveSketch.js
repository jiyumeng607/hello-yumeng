var Power;
var Defense;
var Shock;
var Choice;


function setup(){

}

function draw(){

}


function Power(){

}

function Defense(){

}

function Shock(){

}

function Choice(){
playerPower = 0;



 if (playerPower < 1 && PlayerChoice = Shock):
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
}