M.AutoInit();

window.addEventListener('offline',()=> M.toast({html:'Network issue',classes:'rounded'}));

 
 var firebaseConfig = {
    apiKey: "AIzaSyDUxWO-nES7JOCY3G1VrX2z97QYKwudOFk",
    authDomain: "previous-papers-b0d21.firebaseapp.com",
    databaseURL: "https://previous-papers-b0d21.firebaseio.com",
    projectId: "previous-papers-b0d21",
    storageBucket: "previous-papers-b0d21.appspot.com",
    messagingSenderId: "1000010528387",
    appId: "1:1000010528387:web:b3045e33608f8573210db6",
    measurementId: "G-T4WVVR40M5"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  document.querySelector(".myfile").addEventListener("change",(e) => {
console.log(e);
for(var i=0;i<e.target.files.length;i++)
{

var storageRef=firebase.storage().ref(e.target.files[i].name);

storageRef.getDownloadURL().then(function(url){
M.toast({html:'The song has already uploaded!',classes:'rounded'});
document.getElementById("form").reset();
}).catch(function(error){});


var task=storageRef.put(e.target.files[i]);
task.on("state_changed",(s) =>{
console.log((s.bytesTransferred/s.totalBytes)*100);
document.querySelector(".progress1").value=(s.bytesTransferred/s.totalBytes)*100;
if(document.querySelector(".progress1").value==100)
{
M.toast({html:"Your file has been uploaded!",classes:'rounded'});
document.querySelector(".progress1").value=0;
}

});




}

});

  
  
  $(document).ready(function(){
    $('.carousel').carousel({
    onCycleTo: function (ele) {
      console.log(ele);
      console.log($(ele).index()); // the slide's index
	  var carousellength=document.getElementsByTagName("img").length;
	  var carouselitem=document.getElementsByTagName("img");
	  for(var i=0;i<carousellength;i++)
	  {
		if($(ele).index()==i)
		{
			var filename=carouselitem[i].name;
			filename+=".mp3";
			var storage=firebase.storage().ref(filename);
			storage.getDownloadURL().then(function(url){document.getElementById("playing-song").src=url;})
                                         .catch(function(error){M.toast({html:"Network issue",classes:'rounded'});});
		}
	  }
	
	  
    }
});
  });
  
  
  
document.querySelector(".thumbnail").addEventListener("change",(e) => {
console.log(e);
for(var i=0;i<e.target.files.length;i++)
{
var storageRef=firebase.storage().ref(e.target.files[i].name);
var songname=e.target.files[i].name;
var task=storageRef.put(e.target.files[i]);
task.on("state_changed",(s) =>{
console.log((s.bytesTransferred/s.totalBytes)*100);
document.querySelector(".progress2").value=(s.bytesTransferred/s.totalBytes)*100;
if(document.querySelector(".progress2").value==100)
{
M.toast({html:"Your thumbnail has been uploaded!",classes:'rounded'});
document.querySelector(".progress2").value=0;
}
});
}

});

function imageoncarousel(url,filename)
{

				var divmain=document.getElementById("grandparent");
				var newdiv=document.createElement("div");
				newdiv.classList.add('carousel-item');
			
				var image=document.createElement("img");
				image.src=url;
				
				var song_name=filename;
				image.setAttribute("name",song_name);
				newdiv.appendChild(image);
				//divmain.appendChild(newdiv);
				divmain.insertBefore(newdiv, divmain.firstChild);

				

				var elems3 = document.querySelectorAll('.carousel');
				var instances3 = M.Carousel.init(elems3);				
										 
	  $('.carousel').carousel({
      onCycleTo: function (ele) {
      console.log(ele);
      console.log($(ele).index()); 
	  var carousellength=document.getElementsByTagName("img").length;
	  var carouselitem=document.getElementsByTagName("img");
	  for(var i=carousellength-1;i>=0;i--)
	  {
		if($(ele).index()==i)
		{
			var filen=carouselitem[i].name;
			filen+=".mp3";
			var storage=firebase.storage().ref(filen);
			storage.getDownloadURL().then(function(url){document.getElementById("playing-song").src=url;})
                                         .catch(function(error){M.toast({html:"Network issue",classes:'rounded'});});
		}
	  }
    }

	});
	var xx = document.getElementById("playing-song");
	xx.play();
}


document.getElementById("play").addEventListener("click",function(){


var filename=document.getElementById("song-search").value;
var newname;

var newname=filename+".mp3";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				})
                                         .catch(function(error){M.toast({html:'The song has not been uploaded yet!',classes:'rounded'});});


newname=filename+".jpg";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});

newname=filename+".jpeg";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});
				 
newname=filename+".png";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});

newname=filename+".webp";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});
 
setTimeout(function(){
	document.getElementById("playing-song").play();
}, 1500);
				

});

function sea(filename){
//var filename=document.getElementById("song-search").value;
var newname;

var newname=filename+".mp3";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				})
                                         .catch(function(error){M.toast({html:'The song has not been uploaded yet!',classes:'rounded'});});


newname=filename+".jpg";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});

newname=filename+".jpeg";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});
				 
newname=filename+".png";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});

newname=filename+".webp";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
				imageoncarousel(url,filename);
				})
                                         .catch(function(error){});
}


function mea(song){
	sea(song);
	setTimeout(function(){
	document.getElementById("playing-song").play();
	}, 1000);

}
function put(url, img){
	img.src = url;
}

function quett(filename, img){
var newname;
newname=filename+".jpg";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
					put(url, img);
				})
                                         .catch(function(error){});

newname=filename+".jpeg";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
					put(url, img);
				})
                                         .catch(function(error){});
				 
newname=filename+".png";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
					put(url, img);
				})
                                         .catch(function(error){});

newname=filename+".webp";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
					put(url, img);
				})
                                         .catch(function(error){});
}



	class Node {
		constructor(song, artist) {
			this.song = song;
			this.artist = artist;
			this.next = null;
		}
	}

	class Queue {
		constructor() {
			this.front = null;
			this.back = null;
		}

		isEmpty() {
			return !this.front;
		}

		enqueue(song, artist) {
			console.log('ENQUEUE', song, artist);
			let node = new Node(song, artist);
			if (this.isEmpty()) {
			this.front = this.back = node;
			}
			else {
			this.back.next = node;
			this.back = node;
			}
			var tt = document.createElement("div");
			tt.className += "queue_elem";
			var im = document.createElement("img");
			im.className += "queue_img";
			quett(song, im);
			tt.appendChild(im);
			var nt = document.createElement("div");
			nt.className += "detail";
			tt.appendChild(nt);
			var art = document.createElement("p");
			art.className += "artist";
			if(artist == ""){
				artist = song;
			}
			art.innerHTML = artist;
			var son = document.createElement("p");
			son.classList.add("sonee");
			son.innerHTML = song;
			nt.appendChild(art);
			nt.appendChild(son);
			
			var qqq = document.getElementById("qqq");
			qqq.appendChild(tt);
		}

		dequeue() {
			let node = this.front;
			//console.log('DEQUEUE', node ? node.value : '');
			if (!this.isEmpty()) {
			this.front = this.front.next;	   
			}
			if (!this.front) {
			this.back = null;
			}
			return node;
		}
	}

	var q = new Queue();
	function que(){
		var form = document.forms["form"];
		q.enqueue(form["song_name"].value, form["artist_name"].value);

	}
	var xx = document.getElementById("qqq");
	xx.removeChild(xx.childNodes[0]);
	function deq(){
		q.dequeue();
		var xx = document.getElementById("qqq");
		xx.removeChild(xx.childNodes[0]);
		console.log("deq worked");
	}

	function play_next(){
		if(!q.isEmpty()){
			sea(q.front.song);
			setTimeout(function(){
				document.getElementById("playing-song").play();
			}, 1500);
		}
	}

	var aud = document.getElementById("playing-song");
	aud.onended = function() {
		console.log("working");
		deq();
		play_next();
	};

	function dead(){
		console.log("worked tf");
		var form = document.forms["form"];
		q.enqueue(form["song_name"].value, form["artist_name"].value);
	}
	function checkexist(){
		var form = document.forms["form"];
				var newname=form["song_name"].value+".mp3";
				var ans;
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
						dead();
				})
				.catch(function(error){M.toast({html:'The song has not been uploaded yet!',classes:'rounded'});});
	}

	function pead(){
		var form = document.getElementById("song-search").value;
		q.enqueue(form, form);
	}

	function playq(){
		var form = document.getElementById("song-search").value;
				var newname=form+".mp3";
				var storage=firebase.storage().ref(newname);
				storage.getDownloadURL().then(function(url){
						pead();
				})
				.catch(function(error){M.toast({html:'The song has not been uploaded yet!',classes:'rounded'});});
	}

