---
title: Test Project
description: An engaging roguelike game set in procedurally generated dungeons, challenging players to survive against formidable monsters with each unique playthrough
heroImage: /blog-placeholder-3.jpg
creationDate: 2024-03-02 00:00:00
thumbnailImage: /1280x720.webp
---

### Context

I've always been a fan of roguelike games, and I've always wanted to make one myself.

I created this game as part of my final year project for my Bachelor's degree in Computer Science. I wanted to create a game that I would enjoy playing, and I think I succeeded in that regard.

### Features & Mechanics

Due to the nature of the project, I had to create a lot of systems from scratch, we needed to have a way to generate a dungeon, populate it with monsters and items, and have a way to save the game and synchronize it across devices, but also a way to handle combat, inventory, equipment, experience, leveling and so much more.

Beyond that, I also had to handle so many edge cases, such as what happens when the player dies, or when the player levels up, the turn-based combat system, and so on.

### Technologies

The game, for the client-side, is built using PixiJS, a 2D WebGL renderer with a focus on performance, and React, a JavaScript library for building user interfaces.

For the server-side, I'm using Node.js and Socket.IO( a web socket library ) to handle the communication between the client and the server.

Data persistence is handled using MongoDB, a document-oriented database program providing high performance / availability, and easy scalability.
