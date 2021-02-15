var kdh={
    test: function () {
        alert("test!!!!!!");
    },
    testBabel:function () {
        const array = ['foo', 'hello', 'world' ,'!'];
        const array2 = array.map((v)=> v.length);
        alert(array2);
    }
};



$(function () {
    // kdh.test();
    // kdh.testBabel();
});
