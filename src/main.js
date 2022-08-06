
let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0;

let string =
    `/*你好，我是一名前端新人
*接下来我演示一下我的前端功底
*首先我会准备一个div
*/
#div1{
    border:1px solid red;
    width:400px;
    height:400px;

}
/*接下来我要把div变成一个八卦图
*注意看好了
*首先把div变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
  }
/*
八卦是一黑一白的阴阳形成的
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, 
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, 
    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*补充细节*/
#div1::before{
    top:0;
    left:50%;
    transform: translateX(-50%);
    width:200px;
    height:200px; 
    border-radius:50%;
    background-color: black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    width:200px;
    height:200px;
    border-radius:50%;
    background-color: white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`
let string2 = ''


let step = () => {
    setTimeout(() => {
        //注释写下当时的思路

        //如果是回车就不照搬，如果是回车就照搬
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        n += 1;
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 999999)
        html.scrollTo(0, 999999)

        if (n < string.length) {

            step()
        }

    }, 50)
}

step()





