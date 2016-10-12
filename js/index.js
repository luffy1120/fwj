// JavaScript Document
	 var left = document.getElementById('left');
	 var right = document.getElementById('right');
	 var img1 = document.getElementById('img1');
	 var arr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg']
	 var bank = document.getElementById('bank');
	 var arr1 = bank.getElementsByTagName('a');
	 var i = 0;
	 var num = null;
	 num = arr1[i];
	 num.className = 'active';
	for(var j=0;j<arr1.length;j++){
		arr1[j].index = j;
		arr1[j].onclick = function a(){
				img1.src = arr[this.index];
				num.className = '';
				num = this;
				num.className = 'active';
				i=this.index;
			}
		}
	left.onclick = function(){
				num.className = '';
				i--;
				if(i<0)i=3;
				img1.src = arr[i];
				num = arr1[i];
				num.className = 'active';
	 	}
    right.onclick = function(){
				num.className = '';
				
		 	    i++;     
				if(i==arr.length)i=0;
				img1.src = arr[i];
				num = arr1[i];
				num.className = 'active';
		}