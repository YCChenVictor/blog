---
layout: post
title: (JavaScript 3) Callback Hell, Promise, and Async/Await
date: '2021-06-19'
state: none
categories: javascript
---

## Introduction & Why
The concept of Async: letting some steps be skipped and do it latter once conditions matched. Asynchronous programming is common in javascript, because the process of rendering data from server takes time and we do not want our page to be stalled. To achieve it, we use callback function.

## How
For example, thinking of my webpage is the burger store and I serve burgers. The ingredients are simply as follow: sauce, patty, lettuce. The chef(backend) needs time to prepare the ingredients. One second for lettuce cutting, two seconds for patty slicing, and three seconds for sauce cooking. I use `setTimeout()` to simulate the delivery time from backend. The Chef can cut and slice while the sauce is boiled. Then the coding may be as follow:

### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>main.js</script>
</head>
<body>
    
</body>
</html>
```

### main.js
```
const ingredients = [
  'buns'
]

serveBurger()
createIngredient({ name: 'sauce', time: 3000 })
createIngredient({ name: 'patty', time: 2000 })
createIngredient({ name: 'lettuce', time: 1000 })

function serveBurger() {
  setTimeout(() => {
    let burger = '';
    ingredients.forEach((ingredient) => {
      burger += `<ul>${ingredient}</ul>`
    });
    document.body.innerHTML = burger;
  }, 4000)
}

function createIngredient(ingredient) {
  setTimeout(() => {
    ingredients.push(ingredient.name)
  }, ingredient.time)
}
```
Then the burger looks like

<img src="/assets/img/burger.png" alt="" width=500> 

However, what if we do not know how much time each ingredient takes, meaning the waiter may go to get the meal too early and may serve Semi-finished products if the chef did not notice; for example, taking the 4000 out from the setTimout() in the function, serveBurger.

We need callback function to help us. With callback function, we can tell the waiter back after the burger prepared; for example, we call the waiter back every 0.5 second and check whether ingredients prepared. The code:
### js
```
const requiredIngredients = ['lettuce', 'patty', 'sauce']

const ingredients = [
  'buns'
]

const recipes = [
  { name: 'lettuce', time: 1000 },
  { name: 'patty', time: 2000 },
  { name: 'sauce', time: 3000 }
]

for (let i = 0; i < requiredIngredients.length; i++) {
  createIngredient(recipes[i], () => {
    checkIngredients(() => {
      serveBurger()
    })
  })
}

function checkIngredients(callback) {
  setTimeout(() => {
    if (requiredIngredients.every(result => ingredients.includes(result))) {
      callback()
    } else {
      console.log("still preparing")
    }
  }, 500)
}

function serveBurger() {
  setTimeout(() => {
    let burger = '';
    ingredients.forEach((ingredient) => {
      burger += `<ul>${ingredient}</ul>`
    });
    document.body.innerHTML = burger;
  })
}

function createIngredient(ingredient, callback) {
  setTimeout(() => {
    ingredients.push(ingredient.name);
    callback()
  }, ingredient.time)
}
```
As you can see, there is some callbacks looks like
```
createIngredient(recipes[i], () => {
  checkIngredients(() => {
    serveBurger()
  })
})
```
As you can see, the more steps to wait, the more callbacks would be, making the code looks like boomerang and this is called the **callback hell**. To solve this kind of issue, we can use **promise**

### Promise
I am going to solve the callback part in the callback hell. With promise, we can eliminate callback from the function first. For example, the checkIngredient(), changing from
```
function createIngredient(ingredient, callback) {
  setTimeout(() => {
    ingredients.push(ingredient.name);
    callback()
  }, ingredient.time)
}
```
to
```
function createIngredient(ingredient) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ingredients.push(ingredient.name);
      
      const error = true
      if (!error) {
        resolve();
      } else {
        reject(`Error: Something went wrong while creating ingredient, ${ ingredient.name }`)
      }

    }, ingredient.time)
  })
}
```
and eliminate callback() from checkIngredients with same technique. Then, the callback hell structure, changing from
```
createIngredient(recipes[i], () => {
  checkIngredients(() => {
    serveBurger()
  })
})
```
to
```
createIngredient(recipes[i])
  .then(checkIngredients)
  .then(serveBurger)
  .catch(error => console.log(error))
```
However, there is still a hell like chain structure, so I am going to use async/await.

### Async/Await
With the promise function defined above, we can turn the chain structure into
```
async function step(recipe) {
  await createIngredient(recipe).catch(error)
  await checkIngredients()
  serveBurger()
}
```
and call them with
```
for (let i = 0; i < requiredIngredients.length; i++) {
  step(recipes[i]);
}
```


## Reference
[**Using Promise (MDN)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

[**Promise (MDN)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[**Async JS Crash Course - Callbacks, Promises, Async Await**](https://www.youtube.com/watch?v=PoRJizFvM7s)
