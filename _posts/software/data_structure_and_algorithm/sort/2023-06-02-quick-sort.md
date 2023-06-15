---
layout: post
title:
description: ''
date: '2023-06-02'
categories: DSA
note:
mathjax: true
mermaid: true
p5:
threeJS:
chartJS: true
anchor:
publish: true
---

## Introduction

QuickSort is an efficient sorting algorithm with an average runtime of **O(n * log(n))**. By using a **random pivot**, it reduces the chances of encountering worst-case scenarios and outperforms other sorting algorithms due to a **smaller constant factor**. Learning QuickSort enhances algorithmic thinking skills and expands problem-solving abilities, providing an elegant and efficient solution to the sorting problem and introducing the **Divide and Conquer** technique for a structured approach to various problems.

## Why?

Learning QuickSort not only equips you with a fast sorting algorithm but also enhances your understanding of the Divide and Conquer technique, improves your algorithmic thinking skills, and broadens your problem-solving capabilities.

## How?

### Divide and Conquer Technique

Two steps:
* Figure out the **base case**. This should be the simplest possible case.
* **Divide** or decrease your problem until it becomes the base case.

For example, given a quadrilateral with length, 1680 and width, 640 and we want to find the largest square to divide it evenly.

```
                1680
   ---------------------------------
  |                                 |
  |                                 | 640
  |                                 |
  |                                 |
   ---------------------------------
```

Step one: the base case, The length is twice the width.

```
         160
   ---------------
  |       |       | 
  |       |       | 80
   ---------------

```

Step two: By Euclid’s algorithm, solving the largest square in 640 X 400 is the same in 1680 X 640

```
        640          640       400
   ---------------------------------
  |            |             |      |
  |            |             |      | 640
  |            |             |      |
  |            |             |      |
   ---------------------------------
```

However, 640 X 400 is not the base case, so keep doing the recursive process -> 640 X 400 => 400 X 240 => 240 X 160 => 160 X 80 and then we find the base case, **160 X 80**.

With above D & C process, we found that 80 X 80 is the largest possible square to divide the quadrilateral evenly.

### Quick Sort

With D & C in mind, we can start to probe quick sort. We want to sort an array and again, we follow the two steps of D & C; that is:

1. Figure out the base case. This should be the simplest possible case.
2. Divide or decrease your problem until it becomes the base case.

The simplest possible case is an array only has one element or no element as follow:

```javascript
[] // empty array
// or
[20] // array with only one element
```

For example, if we want to sort an array: [3, 5, 2, 1, 4], we can try to divide this array until it becomes the base case as follow: (We choose the far-left one  as pivot)

#### Far-left one as pivot for [3, 5, 2, 1, 4]

```javascript
quickSort([3, 5, 2, 1, 4]) = // step 1, O(n)

quickSort([2, 1]) + <3> +  quickSort([5, 4]) = // step 2, O(n)

(quickSort([1]) + <2> + []) + <3> + ([4] + quickSort([5]) + []) = // step 3, O(n)

[1] + <2> + [] + <3> + [4] + [5] + [] =

[1, 2, 3, 4, 5]
```

#### Middle one as pivot for [3, 5, 2, 1, 4]

```javascript
quickSort([3, 5, 2, 1, 4]) = // step 1, O(n)

quickSort([1]) + <2> + quickSort([3, 5, 4]) = // step 2, O(n)

[1] + <2> + (quickSort([3, 4]) + <5> + []) = // step 3, O(n)

[1] + <2> + <3> + quickSort([4]) + <5> + [] = // step 4, O(n)

[1] + <2> + <3> + [4] + <5> + [] =

[1, 2, 3, 4, 5]
```

As you can see, the choice of pivot affects the time complexity. In above examples, choosing middle element as pivot has worse time complexity and there is no best way to choose the pivot; for example, given a sorted array, `[1, 2, 3, 4, 5]`, and we do the same sorting methods again as follow:

#### Far-left one as pivot or [1, 2, 3, 4, 5]

Time complexity: O(n^2)

```javascript
quickSort([1, 2, 3, 4, 5]) = // step 1, O(n)

[] + <1> + quickSort([2, 3, 4, 5]) = // step 2, O(n)

<1> + ([] + <2> + quickSort([3, 4, 5])) = // step 3, O(n)

<1> + <2> + ([] + <3> + quickSort([4, 5])) = // step 4, O(n)

<1> + <2> + <3> + <4> + quickSort([5]) = // step 5, O(n)

[1, 2, 3, 4, 5]
```

#### Middle one as pivot or [1, 2, 3, 4, 5]

Time complexity = O(n * log(n))

```javascript
quickSort([1, 2, 3, 4, 5]) = // step 1, O(n)

quickSort([1, 2]) + <3> + quickSort([4, 5]) = // step 2, O(n)

([] + <1> + quickSort([2])) + <3> + ([] + <4> + quickSort([5])) = // step 3, O(n)

[] + <1> + [2] + <3> + [] + <4> + [5] =

[1, 2, 3, 4, 5]
```

As you can see, now choosing middle one as pivot has less time complexity.

## What?

Based on last section, we can now compose the code of quick sort as follow:

```javascript
function quicksort(array) {
  if (array.length < 2) { // base case
    return array;
  } else {
    var pivot = array[0]; // always choose far-left as pivot (can also randomly choose)
    var less = array.slice(1).filter(function(i) { return i <= pivot; });
    var greater = array.slice(1).filter(function(i) { return i > pivot; });
    return quicksort(less).concat([pivot]).concat(quicksort(greater));
  }
}

console.log(quicksort([10, 5, 2, 3]));
```

### Time complexity

We can express time complexity of quick sort as follow:

$$T(n) = T(k) + T(n-k-1) + O(n)$$

where
  * n is the number of elements
  * k is the number of element in left partition
  * n-k-1 is the number of element in right partition
  * O(n) is the time complexity on this round comparison. (We need to compare the values to the pivot so that we can put elements on left or right partition.) 

#### O(n^2) on worst case

As shown above and if we always choose far-left element as pivot, we will have time complexity as follow:

$$T(n) = T(1) + T(n-2) + O(n)$$

$$T(n) = T(1) + T(1) + T(n-3) + O(n)$$

... 

$$T(n) = T(1) + T(1) + ... T(1) + O(n)$$

and we have time complexity of $$O(n^2)$$

#### O(n * log(n)) on average

Suppose we randomly choose elements as pivot, then as shown above, we have certain chance to decrease the number of rounds. In best situation (each round the pivot divide elements equally), we only need to go through $$log_2n$$ rounds. And in other cases, we still can go through only $$log_an$$ rounds. As a result the time complexity on average is O(n * log(n)).

$$T(n) = T(k) + T(n-k-1) + O(n)$$

$$T(n) = [T(m) + T(k-m-1) + O(k)] + [T(l) + T(n-k-l-1) + O(n-k-1)] + O(n)$$ =

$$T(n) = [T(m) + T(k-m-1)] + [T(l) + T(n-k-l-1)] + 2 * O(n)$$

...

The number of layers is $$log_an$$ and we have time complexity of $$O(n * log n)$$

#### Why quick sort is often faster than merge sort?

There are several reasons: (by GPT)

* Constant Factors:
  * When both algorithms have **the same O times, constant matters**. QuickSort tends to have smaller constant factors compared to Merge Sort. The partitioning step in QuickSort is usually faster than the merging step in Merge Sort, leading to a lower constant factor and faster overall performance.

* Cache Performance: (skip)
  * QuickSort exhibits better cache performance due to its tendency to access elements in a localized manner. During partitioning, the elements are rearranged in-place, which improves memory locality. This locality of reference can result in fewer cache misses and better utilization of the CPU cache, leading to improved overall performance.

* In-Place Sorting: (skip)
  * QuickSort is an in-place sorting algorithm, meaning it does not require additional memory proportional to the input size. In contrast, Merge Sort requires additional memory for merging the sorted subarrays, which can lead to higher memory usage and potential overhead in certain scenarios.

* Tail Recursion Optimization: (skip)
  * QuickSort can often be optimized using tail recursion elimination. This optimization allows the compiler or interpreter to replace the recursive call with a loop, reducing the overhead of function calls and stack operations.

* Randomized Pivot Selection: (skip)
  * A common optimization technique for QuickSort involves using randomized pivot selection. By randomly selecting the pivot element, the probability of encountering worst-case scenarios is reduced, improving the average-case performance.

## Reference

grokking-algorithms-illustrated-programmers-curious

[An Overview of QuickSort Algorithm](https://towardsdatascience.com/an-overview-of-quicksort-algorithm-b9144e314a72)
