---
title: What is RESTful API
description: ''
date: '2021-02-18T08:15:19.463Z'
categories: internet
---

## Summary

REST means [REpresentational State Transfer](https://en.wikipedia.org/wiki/Representational_state_transfer). Any style satisfying these features:

1. Client–server architecture
2. Statelessness
3. Cacheability
4. Layered System
5. Code on demand (optional)
6. Uniform Interface

are called **RESTful**.

## Why

### Client–server architecture

This architecture applies separation of concerns (SoC), meaning separating user interface and data storage to improve the portability of user interface across multiple platforms and the scalability of server and allows them to evolve independently.

### Statelessness

The current state is unrelated to last state; for example, if I want to read a news from yahoo news, I can either go to the yahoo main page and then click the news page or directly input the news page url in my browsers, which means that I do not have to go to news page through main page. The current state, news page, is unrelated to the last state, main page.

### Cacheability

Cache is to store required data in a user’s computer, so this user do not need to wait reloading next time using this website.

### Layered System

Layer means the system has multiple layers, many intermediary servers.

1. Intermediary servers can improve system scalability by load balancing and shared caches.
2. Intermediary servers can also improve security by adding mechanism in it.
3. Intermediary servers can call multiple servers to generate response to a client.

### Code on demand (optional)

### Uniform Interface

1. **Resource identification in requests:** the resources are separated from the representation; for example, user may view a html template but the server side may send a json file.
2. **Resource manipulation through representations:** users manipulate data with html webpage rather than data changing directly to server.
3. **Self-descriptive messages:** the client can decide how to parse the resources them read from representation, meaning there is already ‘enough’ information to do so.
4. **Hypermedia as the engine of application state:** After the users enter an initial URL, then they should be able to discover all the available resources they need dynamically.

### How

I am going to demonstrate how RESTful API used in rails
The concept of CRUD (create, read, update, delete) maps to create, show, update, destroy in rails and then maps to POST, GET, PATCH/PUT, DELETE in HTTP with summary as follow:

* POST /events -> /events/create -> events#create
* GET /events/1 -> /events/show/1 -> events#show
* PATCH /events/1 -> /events/update/1 -> events#update
* DELETE /events/1 -> /events/destroy/1 -> events#destroy

HTML now can only use GET and POST; as a result, rails adds params, method=PATCH and method=DELETE in POST for PATCH and DELETE.

### What

## references

[**表现层状态转换**](https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2)

https://ihower.tw/rails/restful.html