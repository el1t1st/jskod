# Objects

<!-- vim-markdown-toc GFM -->

- [How to create an Object](#how-to-create-an-object)
- [How to read fields in an Object?](#how-to-read-fields-in-an-object)
- [How to change fields in an Object?](#how-to-change-fields-in-an-object)
- [How to use getters/setters in an Object?](#how-to-use-getterssetters-in-an-object)
- [How to delete a field in an Object?](#how-to-delete-a-field-in-an-object)
- [How to check if a property exists in an Object?](#how-to-check-if-a-property-exists-in-an-object)
- [How to loop over an Object?](#how-to-loop-over-an-object)
- [How to dynamically set keys in Objects?](#how-to-dynamically-set-keys-in-objects)
  - [A field name can be variable.](#a-field-name-can-be-variable)
  - [A field name can be an expression.](#a-field-name-can-be-an-expression)
  - [A field name can be a function.](#a-field-name-can-be-a-function)

<!-- vim-markdown-toc -->

## How to create an Object

```javascript
const person1 = {};
person1.name = 'Alex K';
person2.city = 'Moscow';
```

```javascript
const person2 = new Object{
  name: 'Alex K',
  city: 'Moscow',
}
```

```javascript
const person3 = {
  name: 'Alex K',
  city: 'Moscow',
};
```

## How to read fields in an Object?

```javascript
console.log(person1.name);
console.log(person1['name']);
```

## How to change fields in an Object?

```javascript
person1.name = 'Vladimir Putin';
person1['city'] = 'Saint-Petersburg';
```

## How to use getters/setters in an Object?

```javascript
const person4 = {
  name: 'Alex K',
  get city() {
    return 'Moscow';
  },
  set city(value) {
    console.log('Alex K lives in Moscow');
  },
};
```

## How to delete a field in an Object?

```javascript
delete person1.city;
```

## How to check if a property exists in an Object?

```javascript
if ('name' in person) {
  console.log('The name is ' + person.name);
}
```

## How to loop over an Object?

```javascript
for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}
```

## How to dynamically set keys in Objects?

#### A field name can be variable.

```javascript
const fieldName = 'currentJob';
const fieldValue = 'programmer';
const person = {
  [fieldName]: fieldValue,
};
```

#### A field name can be an expression.

```javascript
cons person = {
  ['current' + fieldName]: fieldValue,
};
```

#### A field name can be a function.

```javascript
function fn(entry) {
  return 'current' + entry;
}
const person = {
  [fn(job)]: fieldValue,
};
```
