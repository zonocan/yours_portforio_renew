@charset "UTF-8";
/* reset */
body, h1, h2, h3, h4, h5, h6, p, address,
ul, ol, li, dl, dt, dd, img, form, table, tr, th, td {
	margin: 0;
	padding: 0;
	border: none;
	font-style: normal;
	font-weight: normal;
	font-size: 100%;
	text-align: left;
	list-style-type: none;
	border-collapse: collapse;
}

textarea { font-size: 100%; vertical-align:middle;}
img { border-style: none; display: block; }
hr { display: none; }
em{font-style: normal}
input{line-height:auto;vertical-align:middle;}
strong.more{color:#c30}
a{text-decoration: none;}

html {

}

body {
	font-family:'ヒラギノ角ゴ Pro W3','Hiragino Kaku Gothic Pro','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
}

* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-o-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
}

/* 上の部分は気にせずここから書く */
.header-all{
	width: 100%;
	height: 50px;
	background-color: black;
	display: flex;
}

.logo-part{
	width: 50%;
	height: 40px;
	background-color: white;
  clip-path: polygon(-2000% 100%, 17.5% 0%, 82.5% 0%, 100% 100%);
	border-left: solid 50px white;
	display: flex;
	justify-content: flex-start;
	padding-top: 10px;
}

#logo{
	width: 20%;
	height: 20px;
}

.logo-part-title{
	width: 65%;
	display: flex;
	justify-content: space-around;
	margin-left: 5%;
}

.header_ui{
	width: 40%;
	height: 20px;
	display: inline-flex;
	justify-content: flex-end;
	justify-content: space-between;
	margin-left: 5%;
	margin-top: 13px;
}
