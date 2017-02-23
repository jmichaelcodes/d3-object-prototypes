# Classical vs Prototypal Inheritance

## Differences
Class Inheritance: A descriptoin of the object to be created.
    - “Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.”
Prototypal Inheritance: Objects inherit directly form other objects.
    - “A prototype is a working object instance. Objects inherit directly from other objects.”

Inheritance is fundamentally a code reuse mechanism.

## Problems in OO Design
* Tight Coupling Problems
* Fragile base class problem
* Inflexible hierarchy problem
    * All evolving hierarchies are wrong for new uses.
* The duplication by necessity problem
    * New use cases are often done by duplicating rather than adapting existing code.

"Favor object composition over class inheritance"

## Three Different Kinds of Prototypal Inheritance
1. Concatenative Inheritance
    * One object to another by copying the source objects properties.
2. Prototype Delegation
     * If a property is not found on the object, the lokup is delegated to the delegate prototype.
3. Functional inheritance
    * Factory function: Object-creating function is not a constructor.
    * Producing an object from a factory ad extending the produced object by assigning properties to it directly.

# Code Pen Examples

## Class Inheritance
http://codepen.io/jmichaelcodes/pen/zZOyex

## Prototypal Inheritance
http://codepen.io/jmichaelcodes/pen/YZKdoQ