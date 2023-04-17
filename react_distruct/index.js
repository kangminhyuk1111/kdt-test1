/* 
const lists = ['apple', 'grape'];
console.log(lists[0]);
[item1, item2, item3 = 'peach'] = lists;

console.log('item1 : ', item1);
console.log('item2 : ', item2);
console.log('item3 : ', item3);

const arr = [1, 2, 3, 4, 5]


let x = 1, y = 2;
console.log(x, y);
[x, y] = [y, x];
console.log(y, x);

const obj = {
    key1: 'one',
    key2: 'two',
}

const { key1: newKey, key2, key3 = 'three' } = obj;
// console.log("key1 : ", key1)
console.log("key2 : ", key2);
console.log("newKey:", newKey);
console.log('key3 : ', key3);

const { a, b } = { a: 10, b: 20 };
console.log('a', a);
console.log('b', b);

const a1 = [1, 2, 3, 4, 5];
console.log(...a1);

// rest 파라미터 남은 인수들을 묶어서 배열로 반환
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data;
console.log(data);
console.log("c: ", c);
console.log("d: ", d);
console.log("rest : ", rest);
*/


/*
 
// 배열 분해 할당
const newArr = ['one', 'two', 'three'];
const [one, two, three, four = 'four'] = newArr;
console.log(one, two, three, four);

// swap
let a = 10, b = 20;
console.log(a, b);
[a, b] = [b, a]
console.log(a, b);

const newObj = {
    one: 'one',
    two: 'two',
    three: 'three',
}

console.log(newObj.one)
console.log(newObj.two)
console.log(newObj.three)

// spread 연산자
const t1 = [1, 2, 3];
const t2 = [4, 5];
const t3 = [...t1, ...t2];
console.log(t3);

const cookie = {
    base: 'cookie',
    madeIn: 'korea',
}

const chocochipCookie = {
    ...cookie,
    toping: 'choco',
}

console.log(chocochipCookie);

const noTopingCookie = {
    ...cookie,
    toping: 'no',
}

console.log(noTopingCookie);

//클래스
//-> 객체 생성 템플릿 => 객체를 만들기 위해 사용
class Cat {
    //생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //메소드
    mew() {
        console.log('야옹~');
    }
    //메소드2
    eat() {
        console.log('밥먹자!!');
    }
}
let navi = new Cat('나비', 1);
navi.mew();
navi.eat();
//class가 없던 시절
let tv1 = {
    name: 'aaa tv',
    price: 2000,
    size: '56inch',
};
let tv2 = {
    name: 'bbb tv',
    price: 3000,
    size: '27inch',
};
let tv3 = {
    name: 'ccc tv',
    size: '55inch',
};
console.log(tv1.price, tv2.price, tv3.price);
//클래스 등장 = 일종의 작업지시서
class TV {
    name = '';
    price = 0;
    size = '';
    constructor(name, price, size) {
        //this: 여기 클래스 안에 있는 속성
        //this.name : 이 클래스 안에 있는 name!
        this.name = name;
        this.price = price;
        this.size = size;
    }
    getPrice() {
        return this.price + '만원';
    }
    setPrice(price) {
        this.price = price;
    }
}
const newTv1 = new TV('aaa tv', 2000, '56inch');
console.log(newTv1.getPrice());
newTv1.setPrice(4000);
console.log(newTv1.getPrice());

*/

// 하위클래스
class Product {
    name = '';
    price = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price + '만원';
    }
}

// 상속 : 부모클래스로 부터 변수, 메소드를 가져와서 사용하는 개념
class Laptop extends Product {
    constructor(name, price, weight) {
        // 부모클래스의 변수를 사용하겠다는 의미
        super(name, price);
        this.weight = weight;
    }
}

let laptop = new Laptop('삼성tv', 5000, '55');
console.log(laptop.price);
console.log(laptop.getPrice());
let parent = new Product('tv', 1000);
console.log(parent.weight); // 부모는 자식 사용 불가능






