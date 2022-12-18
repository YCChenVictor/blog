---
layout: post
title: (Internet 1) How does the internet work? (Basic Concepts)
date: '2021-03-29T04:54:22.522Z'
categories: internet
---

## Introduction

The internet is a system to connect all computers globally, mainly using internet protocol suite to communicate with all the objects in the network.

### What Is Internet Protocol Suite?

It is a kind of **conceptual model** used in a network model. The foundation is "Transmission Control Protocol" (TCP) and "Internet Protocol" (IP)

A simple structure of TCP/IP is as follow:
<img src="/assets/img/1__RwTbhJGkPNdHriCUy6vDww.png" alt="" width=500>

### How Do The Layers Work?

#### Link layer

For example, if a computer (sender) want to send data to another computer (receiver), the sender will send electromagnetic signals. These signals walk through wired or wireless connection from sender to receiver.

#### Network layer (IP)

Once the number of computers grow, we need to specify the address to identify which one is receiver. The address for identification is IP address. We called all the computer in this network **nodes**.

Now the network looks like
<img src="/assets/img/internet_network.png" alt="">

#### Transport layer (TCP)

In the network plot above, if a sender wants to send signal to another computer, there are many path for signal to walk.

(interlude) **Packet Switching:**

The concept of packet switching is that it **breaks down the data** into small pieces and transfer these pieces with any possible routes to the destination and reassemble these pieces to show the complete data to the users at the destination.

I am going to explain the way to decompose the data and the way to transfer it with following example:

At the moment when the data is going to be sent, the available routes may be as follow:
<img src="/assets/img/1__kF7aAIKeqLdK7SH9b0vavw.png" alt="" width=500>

1. If there is arrows between nodes, then there is connection between the two computers and we call it the **path**.
2. The number near the arrow is the cost to send a unit of data from sender to receiver.

Based on these two concepts, we can define algorithms such as walk through minimum path and walk through minimum cost.

**TCP is used to make sure the packets are truly transported:**

1. sender want to send data to receiver
2. the data being decomposed into packets
3. algorithm pops up to determine how packets being sent
4. the packets walk through the routes in networks and being reassembled at destination
5. if the receiver did not receive the data, then tell sender to send again.

### Application Layer

After the data arrives at destination, the receiver use Hypertext Transfer Protocol (HTTP) to translate the data from sender and then the page will show up on the receiver’s browsers.

## Reference

[**Internet - Wikipedia**  
_The Internet ( or internet ) is the global system of interconnected computer networks that uses the Internet protocol…_en.wikipedia.org](https://en.wikipedia.org/wiki/Internet "https://en.wikipedia.org/wiki/Internet")[](https://en.wikipedia.org/wiki/Internet)

[**Transmission Control Protocol - Wikipedia**  
_The Transmission Control Protocol ( TCP) is one of the main protocols of the Internet protocol suite. It originated in…_en.wikipedia.org](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "https://en.wikipedia.org/wiki/Transmission_Control_Protocol")[](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)

[**The Internet protocol suite (article) | Khan Academy**  
_Review the protocols that make up the suite of Internet Protocols and consider the stack of protocols that are used in…_www.khanacademy.org](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:the-internet-protocol-suite/a/the-internet-protocols "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:the-internet-protocol-suite/a/the-internet-protocols")[](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:the-internet-protocol-suite/a/the-internet-protocols)

[**What is Packet Switching? Definition & FAQs | Avi Networks**  
_Back to Technical Glossary Packet Switching transmits data across digital networks by breaking it down into blocks or…_avinetworks.com](https://avinetworks.com/glossary/packet-switching/ "https://avinetworks.com/glossary/packet-switching/")[](https://avinetworks.com/glossary/packet-switching/)

[http://www2.cs.uidaho.edu/~krings/CS420/Notes-F16/420-16-18-DCC10-Chap-19.pdf](http://www2.cs.uidaho.edu/~krings/CS420/Notes-F16/420-16-18-DCC10-Chap-19.pdf)

[https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:web-protocols/a/hypertext-transfer-protocol-http](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:web-protocols/a/hypertext-transfer-protocol-http)