# Title

## Purpose

OOP provides a flexible and powerful way to organize and structure software applications.

## How

* Use objects to represent and manipulate data
* Objects are instances of classes that encapsulate data and methods (functions) that operate on that data
* Principles
  * Encapsulation: Hide the internal details of an object and exposing only the necessary information through well-defined interfaces. This helps to ensure data integrity and makes code more modular and reusable.
  * Inheritance: One class (the child or subclass) can inherit the properties and methods of another class (the parent or superclass). This allows for code reuse and promotes modularity and extensibility.
  * Polymorphism: Polymorphism refers to the ability of objects of different classes to be treated as if they are of the same class. This allows for more flexible and dynamic programming, as objects can be used interchangeably without the need for complex type checking and casting.
  * Abstraction: Simplify complex systems by representing only the essential features, and interfaces, which define the contract between objects and the outside world.

### classes

We use class to create objects and the class will define the attributes and methods these objects have. For example, a `User` class in any SaaS product would be as follow:

```ruby
class User
  def initialize(name)
    # attributes
    @name = name
  end
  
  # methods
  def say_hello
    puts "Hello, my name is " + @name
  end
end

user = User.new('name')
user.say_hello
user.name
```

### Coupling and Cohesion

Coupling refers to the degree to which classes or modules in a software system depend on one another. High coupling can make a system more difficult to maintain, update, and test because changes to one class can have a ripple effect on other classes.

We want less coupling and high cohesion. For example, if this class represents a machine in a company, we want it to be as independent as possible so that once it needs to be replace or suspended for some reason, we can easily do it, increasing the maintainability of this company.

So anything making this machine to be related to other components of this company will increase coupling.

#### math

$$Coupling(C) = 1 - 1/(d_o + d_i + 2 * (c_o + c_i) + g_d + 2 * g_c + w + r)$$

1. $$d_o$$ = number of output data parameters
2. $$d_i$$ = number of input data parameters
3. $$c_o$$ = number of output control parameters
4. $$c_i$$ = number of input control parameters
5. $$g_d$$ = number of global variables used as data
6. $$g_c$$ = number of global variables used as control
7. $$w$$ = number of modules called (fan-out)
8. $$r$$ = number of modules calling the module under consideration (fan-in)

* data vs control
  * Data parameters are values that represent input data that is used by the function or method to perform some computation or operation. For example, if a function calculates the area of a rectangle, the length and width of the rectangle would be passed as data parameters.
  * Control parameters are values that represent instructions or options that modify the behavior of the function or method. They do not represent input data but rather control the flow of the function or method. For example, a function that sorts an array of numbers might have a control parameter that determines whether the sort should be ascending or descending.

#### Decrease Coupling

* Use Interfaces: Reduces the dependencies between classes by defining a set of methods that a class must implement
* Encapsulate data: Hides the internal details of a class from other classes, preventing other classes from depending on the implementation details of a class
* Dependency Injection: Injects dependencies into a class instead of creating them inside the class. By injecting dependencies, you can reduce the coupling between classes, making them easier to test and update
* Avoid Global State: Global state refers to data that is accessible by multiple classes in a system. Global state can create strong dependencies between classes, making it harder to change one class without affecting others.
* Use Design Patterns: Design patterns are proven solutions to common programming problems. By using design patterns, you can reduce coupling and improve the maintainability of your code.

### Interfaces

* Implements abstraction and encapsulation thoroughly, making we only see the appearance of this function and use it easily; for example, we know the light can be on by switching the button but we do not know the logics behind it.
* Reduce the number of global variables used as data or control, as well as the number of input or output parameters, by providing a common interface that can be used by multiple clients.
* Reduce the number of modules called (fan-out) by promoting modular design and encouraging the use of common interfaces between modules.

### Abstraction

Abstraction shows only **essential** attributes; for example, in this world, there are lots of animals such as human, pig, ...etc and there are some identical characteristics, then we can first define a class, `Animal` and then subdivide it with inheritance rather than writing both classes having the same characteristics.

```ruby
class Animal
  def initialize
  end

  def eat
  end
end

class Human < Animal
  def speak
  end
end

class Pig
end
```

rather than

```ruby
class Human < Animal
  def initialize
  end

  def eat
  end

  def speak
  end
end

class Pig
  def initialize
  end

  def eat
  end
end
```

### Encapsulation

The private methods are example of encapsulation in ruby. You cannot use the methods outside the class. We only show the meaningful methods for outsiders.

### Interfaces

An interface implements abstraction and encapsulation throughly, making we only see the appearance of this function and use it easily; for example, we know the light can be on by switching the button but we do not know the logics behind it.

### Inheritance

For example, I want to create Animals: Dog, Cat, Bird.

```ruby
class Animal
  def initialize
  end

  def move
    puts "#{self.class.name} is moving"
  end
end

class Dog < Animal
end

class Cat < Animal
end

class Bird < Animal
end

dog = Dog.new
cat = Cat.new
bird = Bird.new

dog.move
cat.move
bird.move
```

### Polymorphism

For example, I want to create Animals: Dog, Cat, Bird I can write a polymorphic class as follow:

```ruby
class Animal
  DOG = 0
  CAT = 1
  BIRD = 2

  attr_accessor :type

  def initialize(type)
    @type = type
  end
  
  def speak(words)
    puts words
  end
end

animals = [Animal.new(Animal.DOG), Animal.new(Animal.CAT), Animal.new(Animal.BIRD)]

animals.each |animal| do
  case animal.type
  when Animal.DOG
    animal.speak('bark')
  when Animal.CAT
    animal.speak('meow')
  when Animal.BIRD
    animal.speak('tweet')
  end
end
```

### polymorphism vs inheritance

It depends on the business logic to determine which one to be used. Think about your database. If we use inheritance, then there will be a new model produced which you can create a table associate with it and you will not need runtime to calculate the logics, of which you cost more space but save more time and vice versa.

For example, the same `Dog` class. If you are running a zoo, you will not need a table for `Dog` and you just need a polymorphism table, `Animal`, to list all the animals with type in that table. But if you are running, a store professionally takes good care about dogs, then you need a `Dog` model inherited from `Animal`.

### Unified Model Language

It is a language to describe the relationship between models. The relationships: inheritance, composition, aggregation, association, link (solid), dependency, realization, link (dashed)

<div class="mermaid">
classDiagram
  classA --|> classB : Inheritance
  classC --* classD : Composition
  classE --o classF : Aggregation
  classG --> classH : Association
</div>

<div class="mermaid">
classDiagram
  classI -- classJ : Link(Solid)
  classK ..> classL : Dependency
  classM ..|> classN : Realization
  classO .. classP : Link(Dashed)
</div>

#### inheritance

A inherited from B -> A has all attributes and methods from B; for example, student is inherited from person.

#### composition

C composed of D -> D is a part of C; for example, car is composed of wheels.

#### aggregation

## What

## Reference

[The Basics of OOP Ruby](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)

[Ruby Tutorial: Abstract Classes](https://www.youtube.com/watch?v=28vDvuhHA9s)

[Coupling (computer programming)](https://en.wikipedia.org/wiki/Coupling_(computer_programming)#:~:text=In%20software%20engineering%2C%20coupling%20is,of%20the%20relationships%20between%20modules.)

[What is the definition of "interface" in object oriented programming](https://stackoverflow.com/questions/2866987/what-is-the-definition-of-interface-in-object-oriented-programming)

[4.7: Introduction to Polymorphism - The Nature of Code](https://www.youtube.com/watch?v=qqYOYIVrso0)

[Design Patterns in Plain English | Mosh Hamedani](https://www.youtube.com/watch?v=NU_1StN5Tkk&t=935s)