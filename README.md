## Team Instructions

# Daily Steps For Working On This Repo

1. Make sure you are on your computer's master branch.
2. git pull.

## To Work On A New Feature

3. git checkout -b new-branch-name (pick a name for your new branch)
4. Do your normal work on your computer, but do everything on your new branch.
5. As you go, use add . & commit -m '' like normal to save your work to your new branch that you have created for the day. 

## To Work On The Same Feature You've Been Working On

3. git checkout branch-name (name of the branch you're working on)
4. git merge master (this updates your working branch to be current with the master branch).
5. Do your normal work on your computer, but do everything on your new branch. As you go, use add . & commit -m '' like normal to save your work to your alternate branch that you are working on for the day.
_____________________________________________________________
## To Push Your Changes To Github

6. git checkout master
7. git pull
8. git checkout name-of-the-branch-you-created
9. git merge master (if there are any conflicts, you will fix them at this point. If it says there are merge conflicts, open up the project again in your code editor, and search for HEAD. this will show you the merge conflicts, and you can fix them in there. Ask a mentor for help if needed).
10. git add .
11. git commit -m 'fixed merge conflicts'
12. git push -u origin name-of-the-branch-you-created
13. Do a 'pull request' on Github.

# YouTube Clone - React With Redux


## Introduction

This project was a fantastic way for our group to practice building in React with Redux, as well as learning to program the functionality behind one of the most used websites of today. 

## Tech Stack

React
Redux
Sass
Node
Express
Massive
PostgreSQL
Passport/OAuth

## To Use This App

1. Fork and clone this repo
2. run 'npm i' in the terminal / Git Bash
3. run 'npm start' in the terminal / Git Bash
