---
layout: post
title: (DB 5) Indexing
description:
date: '2021-06-29'
categories: database
note: 之後要整合到後來的文章中 
---

## Summary
1. Index helps us to retrieve records from a database quickly.
2. Index = a small table with only two columns, a copy of primary or candidate key of a table and a set of pointers for holding the address of the disk block where that specific key value stored.

## why
skip

## How
There are many indexing method which can increase the speed of search. I am going to use `Binary Tree Index` as example
### B-Tree Index
The basic concpet: the speed of binary search (O(log n)) > the speed of linear search (O(n)); as a result, the structure of binary search like:

skip (之後要畫個圖)

is faster than the structure of linear search like:

skip (之後要畫個圖)

## What

## Reference
[**guru99**](https://www.guru99.com/indexing-in-database.html)
https://www.youtube.com/watch?v=KXJSjte_OAI
