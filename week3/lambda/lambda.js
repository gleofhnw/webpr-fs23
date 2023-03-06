
const id = x => x;

const konst = x => y => x;

//const snd = konst(id);
const snd = x => y => y;

//True returns first value and false returns the second.
//const T = x => y => x;
const T = konst;
//const F = x => y => y;
const F = snd;

//P and Q instead of x and y
//First parantheses gets called if p is true, p {()} ()
// p (     ) (     )
//     p=T    p=F
// const and = p => q => p (q (T) (F)) (q (F) (F))
// const and = p => q => p (q (T) (F)) (F);
// const and = p => q => p (q) (F);
const and = p => q => p (q) (p);


// const or = p => q => p (q(T) (T)) (q (T) (F));
// const or = p => q => p (T) (q (q) (q));
const or = p => q => p (p) (q);

// Rock solid construction, cant be changed, is immutable, not even Debugger can change it.
const Pair = firstname => lastname => getter => getter(firstname)(lastname);
// Gives firstname, which is same as konst first from getter
const firstname = konst;
// Gives lastname, which is same as snd, second from getter
const lastname = snd;

const Left = x => f => g => f(x);
const Right= x => f => g => g(x);
// Eta reduce multiple times, then exchance the e => e with id
// const either = e => f => g => e(f)(g);
// const either = e => f => e(f);
// const either = e => e;
const either = id;


// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




