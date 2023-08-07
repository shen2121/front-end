$(function(){
//この中にjQueryの処理を書く
//要素の取得
let text = $("#text-1");
//要素の内容の取得Helloを取得
console.log(text.html());
//helloをGoodByeに変更する
text.html("GoodBye");


//リンクの話
//リンクの要素を取得する
let link = $("#link-1");
//リンクのURLを取得する
console.log(link.attr("href"));

//リンクの書き換え
link.attr("href","https://kinarino.jp/cat8/38722");
link.attr("target","_blank");

//cssの話
let texts = $(".text-class");
//とってきた要素に色をつけろ
texts.css("color","red");


});



