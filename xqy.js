var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById('box'); 
img1.onmouseover=function(){
    slider.style.display='block';
	img2.style.display='block';
}
img1.onmouseout=function(){
    slider.style.display='none';
	img2.style.display='none';
 }
img1.onmousemove=function(ev){
	var ev=ev||event;  
	var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;
	var oMaxw=img1.offsetWidth-slider.offsetWidth;
	var oMaxh=img1.offsetHeight-slider.offsetHeight;
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left = oL+'px';
	slider.style.top = oT+'px' ;
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
}
window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if (st>180) {
			cover.style.position = 'fixed';
		}else{
			cover.style.position = 'static';
		}
	}
} 

var xiao2 = document.getElementById('xiao2');
var big1 = document.getElementById('big1');
var xiao1 = document.getElementById('xiao1');
var l1 = document.getElementById('l1');
var r1 = document.getElementById('r1');
xiao2.onclick=function(){
	big1.setAttribute('src','img/pp1.jpeg');
	Bimg.setAttribute('src','img/pp1.jpeg');
}
xiao1.onclick=function(){
	big1.setAttribute('src','img/pp0.jpeg');
	Bimg.setAttribute('src','img/pp0.jpeg');
}
l1.onclick=function(){
	if (big1.getAttribute('src')=='img/pp1.jpeg') {
		big1.setAttribute('src','img/pp0.jpeg');
		Bimg.setAttribute('src','img/pp0.jpeg');
	}else if(big1.getAttribute('src')=='img/pp0.jpeg'){
		big1.setAttribute('src','img/pp1.jpeg');
		Bimg.setAttribute('src','img/pp1.jpeg');
	}
}
r1.onclick=function(){
	if (big1.getAttribute('src')=='img/pp1.jpeg') {
		big1.setAttribute('src','img/pp0.jpeg');
		Bimg.setAttribute('src','img/pp0.jpeg');
	}else if(big1.getAttribute('src')=='img/pp0.jpeg'){
		big1.setAttribute('src','img/pp1.jpeg');
		Bimg.setAttribute('src','img/pp1.jpeg');
	}
}

var aa1 = document.getElementById('aa1');
var aa2 = document.getElementById('aa2');
var pp = document.getElementById('pp');
aa2.onclick=function(){
	aa2.style.background='url(img/duigou.png) no-repeat bottom right';
	aa2.style.border = "1px solid #ff0853";
	aa1.style.background='none';
	aa1.style.border='none';
	pp.innerHTML='200ml';
}
aa1.onclick=function(){
	aa1.style.background='url(img/duigou.png) no-repeat bottom right';
	aa1.style.border = "1px solid #ff0853";
	aa2.style.background='none';
	aa2.style.border='none';
	pp.innerHTML='150ml';
}
	
var b1 =document.getElementById('b1');
var b2 = document.getElementById('b2');
var in1 = document.getElementById('in1');
var num=1;
b1.onclick=function(){
	if (num<=0) {
		this.style.cursor = "not-allowed";
	}else if(num>0){
		this.style.cursor="default";
		num-=1;
	    in1.value=num;
	}
}
b2.onclick=function(){
	if (num>=5) {
		this.style.cursor = "not-allowed";
	}else if(num<5){
		this.style.cursor="default";
		num+=1;
	    in1.value=num;
	}
}

var beijin = document.getElementById('beijin');
var buttonxr = document.getElementById('buttonxr');
var show = document.getElementById('show');
var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
buttonxr.onclick=function(){
	beijin.style.display ="block";
	show.style.display ="block";
}
close1.onclick= function(){
	beijin.style.display ="none";
	show.style.display ="none";
}
close2.onclick= function(){
	beijin.style.display ="none";
	show.style.display ="none";
}