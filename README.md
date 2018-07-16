# FriendFinder

Compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

# How does it work?

* The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question
* It will convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, the app will compare the difference between current user's scores against those from other users, question by question, then add up the differences to calculate the totalDifference.

    Example:    
            User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

            User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

            Total Difference: 2 + 1 + 2 = 5

* The closest match will be the user with the least amount of difference.
* Once a match has been found, a modal will appear displaying the name and photo of the user

See the working app on Heroku [Tinder Lite](https://ff-tinderlite.herokuapp.com/)