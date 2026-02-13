#import the random variable
import random 
# 2- create subjects
subjects=[
    "shah rukh khan",
    "salman kahan",
    "nirmala sitharaman",
    "a mumbai cat",
    "a group of monkeys",
    "auto rickshaw driver from delhi",
    "a group of teenages",
]
actions=[
    "launches",
    "cancels",
    "dances with",
    "eats",
    "declares war on",
    "order ",
    "celebrates",]
places_or_things=[
    "a new movie",
    "a new policy",
    "a new dance move",
    "a new dish",
    "a new country",
    "a new auto rickshaw",
    "a new festival",
]
# 3-start the headline generator loop
while True:
    subject = random.choice(subjects)
    action = random.choice(actions)
    places_or_thing = random.choice(places_or_things)

    headline = f"{subject} {action} {places_or_thing}"
    print("\n "+ headline)
    user_input = input("Do you want to generate another headline? (yes/no):").strip().lower()
    if user_input == "no":
        break
print("Thank you for using the fake headline generator!")