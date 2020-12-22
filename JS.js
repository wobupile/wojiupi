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

var time;
function huadong(){
	time=setInterval(function(){
		var r2 = document.getElementById('r2');
		var r22 = document.getElementById('r22');
		var r222 = document.getElementById('r222');
		r222.innerHTML=r22.innerHTML;
		r2.scrollTop++;
		if (r2.scrollTop>=r22.offsetHeight) {
			r2.scrollTop=0;
		}
	},50)
}
huadong();
r2.onmouseover=function(){
	clearInterval(time);
}
r2.onmouseout=function(){
	huadong();
}

var huafeiss = document.getElementById('huafeiss');
var huafeis=document.getElementsByClassName('huafeis');
var huafeip = document.getElementById('huafeip');
huafeiss.onclick= function huafei(){
	for (var i = 0; i < huafeis.length; i++) {
		if (huafeis[i].selected) {
			huafeip.innerHTML = "￥ "+ huafeis[i].value;
		}
	}
}

var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;

function move(){
	if (isMoving) {
		return;
	}
	isMoving=true;
	index++;
	animate(slider,{left:-800*index},function(){
		if (index==7) {
			slider.style.left=-800+'px';
			index=1;
		}
		isMoving=false;
	});
}

timer = setInterval(move,3000);

box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-800*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-6000px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[4].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var picMove=document.getElementById('picMove').children;
	picMove[0].onmouseover =function(){
		animate(picMove[0],{right:0})
		animate(picMove[1],{right:0})
	}
	picMove[0].onmouseout =function(){
		animate(picMove[0],{right:-82})
		animate(picMove[1],{right:-82})
	}
	picMove[1].onmouseover =function(){
		animate(picMove[0],{right:0})
		animate(picMove[1],{right:0})
	}
	picMove[1].onmouseout =function(){
		animate(picMove[0],{right:-82})
		animate(picMove[1],{right:-82})
	}
	picMove[2].onmouseover =function(){
		animate(picMove[2],{right:0})
	}
	picMove[2].onmouseout =function(){
		animate(picMove[2],{right:-127})
	}
	picMove[3].onmouseover =function(){
		animate(picMove[3],{right:0})
	}
	picMove[3].onmouseout =function(){
		animate(picMove[3],{right:-127})
	}
	picMove[4].onmouseover =function(){
		animate(picMove[4],{right:0})
	}
	picMove[4].onmouseout =function(){
		animate(picMove[4],{right:-75})
}