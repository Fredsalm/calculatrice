$(document).ready(main);

function main(){
var init = 0;

	function add(a,b){
		(a+b);
	};

	function sub(a,b){
		(a-b);
	};

	function mul(a,b){
		(a*b);	
	};

	function div(a,b){
		(a/b);
	};

	function correc(){

		$(".btnCorrec").click(function(){
			$(".display").html(init);
			
		});
	};
	function input(){
		$(this.init).html(".display");
	};

input();
correc();

};