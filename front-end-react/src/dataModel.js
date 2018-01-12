class DataModel  {

  constructor() {
	 this.data = ['https://http.cat/200', 
	'https://http.cat/201', 
	'https://http.cat/202', 
	'https://http.cat/207', 
	'https://http.cat/204', 
	'https://http.cat/300',
	'https://http.cat/301',
	'https://http.cat/302',
	'https://http.cat/303',
	'https://http.cat/304',
	'https://http.cat/206', 
	'https://http.cat/305',
	'https://http.cat/307',
	'https://http.cat/400',
	'https://http.cat/406',
	'https://http.cat/410',
	'https://http.cat/413',
	'https://http.cat/416',
	'https://http.cat/421',
	'https://http.cat/411',
	'https://http.cat/451'];

	this.userUrl = null;
	this.score = 0; 
	this.used = []
  }


	shuffleImages(){
		return this.shuffle(this.data);
	}

    shuffle(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}
//Accidentally made it do the opposite of what the game is supposed to do.

	setUrl(url){
		if(this.userUrl === null){
			this.userUrl = url;
		} else {
			if(url === this.userUrl){
				this.score ++;
			} else {
				alert("Loser!");
				this.score = 0;
				this.userUrl = null;
			}
		}
	}
//Tried to make it loop through the this.used array to see if the url already existed, but could not get this to work.

	setURL(url){
		this.userUrl = url;
		for(var i = 0; i < this.used.length; i++){
			if(url === this.used[i]){
				score = 0;
				alert("loser!");
			}else{
				this.used.push(url);
				this.score ++;
			}
		}
	}

	getScore(){
		return this.score; 
	}
}

export default new DataModel();