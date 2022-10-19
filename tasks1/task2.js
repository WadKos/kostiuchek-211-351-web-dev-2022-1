function task2(arr)
{
    let res = [];
    for (let i = 0; i < arr.length; i++)
    {
        let a = false;
        for (let j = 0; j < res.length; j++)
        {
            if (res[j].name == arr[i])
            {
                res[j].count += 1;
                a = true;
            }
        }
        if (!a) {
            let numbers = {
                name: arr[i],
                count: 1,
            }
            res.push(numbers);
        }
    }
    for (let i = 0; i < res.length; i++)
    {
        if (res[i].count == 1)
        {
            res.splice(i,1);
        }
    }

    return res;
}

console.log(task2([2,1,1,3,4,4]));