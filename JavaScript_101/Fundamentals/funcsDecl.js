//hoisting Func Declaration

johnyWalker();


// Function Declaration
function johnyWalker() {
    console.log("walk");
}
//Hoisting Func Expression | also cant hoist variables
// run(); - - - can't call before initialization

// Anonymous Function Expression
let run = function() {
    console.log('run');
};
let moveLike = run;
run();
moveLike();