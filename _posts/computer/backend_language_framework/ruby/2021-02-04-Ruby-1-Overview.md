---
layout: post
title: (Ruby 1) Overview
date: '2021-02-04T08:50:32.446Z'
categories: ruby
note: 這之後圖要改成 code ，盡量不要用截圖的
state: to be continued
---

## Install (1)

### Install RVM (Ruby Version Manager)
```
$ curl -sSL https://get.rvm.io | bash -s stable
```
### Open RVM

You should know your own path of ruby. Take Mac as example, the path should be `/Users/user_name/.rvm/scripts/rvm`
```
source 'your own path'
```
## Version Control

### All Versions of Ruby that can be installed
```
rvm list known
```
### Install Ruby 2.6
```
rvm install 2.6
```
### Errors Fixing
#### Check the log
You may have the following path to access it (please replace your_user_name with your user name)
```
/Users/your_user_name/.rvm/log/1625795250_ruby-2.7.1/make.log
```
[**solve the ruby old version cannot install on M1 problem**](https://github.com/ffi/ffi/issues/869)

### Check Installed Versions
```
rvm list
```
### Check Current Version
```
ruby -v
```
### Use Other Ruby Version
```
rvm use 3.0.0
```
### Change Default Ruby Version
```
rvm --default use 2.4.1
```
## Variable

### Types
<img src="/assets/img/1__ywZBLRlHrf____K66pKUAsiA.png" alt="">
explanation (skip)

### Scope

Scope means the range that the variable can be use. If we define a variable, **name**, in a function then this variable can only be called in the function, not anywhere else; for example,
<img src="/assets/img/1__MXgPL__Bv9Bnc4Uvdib2sfA.png" alt="">
(上面這個例子不對：say_hello 要印出來的東西沒寫出來)

## Constant

The only rule of constant is the first letter must be uppercase; for example,
<img src="/assets/img/1__1bSiA4EZngxjQ1Aaa__EexA.png" alt="">

Actually, all the class and module name must be constant

## Flow Controller

### True or False

Only nil and false are considered as false

### if…elsif…else…

#### inversion: we can put if statement to the back as inversion. That is, from
<img src="/assets/img/1__ozwwOZDNfqIiun8OHm__jbA.png" alt="">

to

<img src="/assets/img/1____YrEzmpfvZQwtxKoNb1nBA.png" alt="">

### Unless = if not

### Ternary

It is constructed from ? and : For example, from

<img src="/assets/img/1__YOKCxvUI__CRILIoVI8PGvg.png" alt="">

to

<img src="/assets/img/1__qQyOxf0g4uJw__LuwemEOfA.png" alt="">

### Case…When

Can make the if…else… to be more concise; for example, from
<img src="/assets/img/1____juWAAE2TWNktquJMC7whA.png" alt="">

to

<img src="/assets/img/1__KrrerIAP2FlTa428FEJeMg.png" alt="">

## Loop and Iteration

### while

```
counter = 0
while counter < 5
  puts "hi, #{counter}"
  counter += 1
end
```

The output

```
hi, 0
hi, 1
hi, 2
hi, 3
hi, 4
```

### for..in

```
aaa = ['bbb', 'ccc', 'ddd']

for a in aaa
  puts a
end
```

The output

```
bbb
ccc
ddd
```

### times
```
5.times do
  puts "test"
end
```

The output

```
test
test
test
test
test
```

### upto
```
1.upto(5) do |i|
  puts "hi, ruby #{i}"
end
```

The output

```
hi, ruby 1
hi, ruby 2
hi, ruby 3
hi, ruby 4
hi, ruby 5
```

### downto
```
5.downto(1) do |i|
  puts "hi, ruby #{i}"
end
```

The output

```
hi, ruby 5
hi, ruby 4
hi, ruby 3
hi, ruby 2
hi, ruby 1
```

### each
```
strings = ["aaa", "bbb", "ccc", "ddd"]

strings.each do |string|
  puts string
end
```

The output

```
aaa
bbb
ccc
ddd
```
