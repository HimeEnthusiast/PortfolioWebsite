---
title: 'Birthday Bot'
iconImage: '../../images/projects/discordLogo.png'
screenshots:
    - '/images/projects/screenshots/birthdayboy/1.png'
    - '/images/projects/screenshots/birthdayboy/2.png'
shortDesc: 'Front End - 2019'
tags:
    - NodeJS
    - Javascript
---

Birthday Bot is a chat bot made for the Discord platform. I built it with JavaScript using the Discord.JS API client and NodeJS. The bot will save user data inside a JSON file where it keeps the birthday they have entered as well as their username, so they can be directly mentioned in their birthday post. Users also have the option to sign up for a watchlist, where the bot will directly message those on the list every time a birthday is announced. This would be useful for people who leave the server muted or don't check often, but would still like to get these notifications. /// Birthday Bot was one of my first personal projects outside of school. I felt very proud to have finally made something on my own! 

One of the largest issues with this project would have to be the if statements. The bot ends up having to do multiple checks for a lot of its functions, which I wanted to have multiple answers for whenever something happens so the user would always understand what's happening. So, I ended up having to nest multiple if statements for each of these methods and I was unsure of how to go about cleaning up this code. 

If I were to make another bot, I would like to try making something a little more complicated, like a game, and I would try to use a database to store data instead of a file. 