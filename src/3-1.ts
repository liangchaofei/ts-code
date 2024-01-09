type TypeStuobj = { username: string, age: number }

function getStuobj(stuobj: TypeStuobj) {
    console.log(stuobj.username, stuobj.age);
}

// 函数解构
function getStuobj2({ username, age }: TypeStuobj) {
    console.log(username, age);
}