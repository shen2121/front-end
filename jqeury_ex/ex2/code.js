$(function(){
    
    //<ol>の要素の取得
let list = $("#list");
//新しい<a>要素を追加
let newLink = $("<a>");
//aタグの中に内容を追加
newLink.html("developer.mozilla.org");
//リストの末尾に追加
list.append(newLink);

//新しいliを作ってaタグを入れる
let newItem = $("<li>");
list.append(newItem);
newItem.append(newLink);

let newText = $("<p>");
newText.html("And more...");
list.after(newText);

//要素を丸こと削除
//list.remove();

//要素の中を空にするempty
list.empty();

//クリックイベントjs onclick
$("#button1").click(()=>{
    console.log("hello");
})

//クリックイベント andEvent~
$("#button1").on("click",()=>{
    console.log("Goodbye");
})

$("#button1").on("click",()=>{
    console.log("Goodbye2");
})
});