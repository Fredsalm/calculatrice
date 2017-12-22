$(document).ready(main);

function main(){
	var a="";
	var b="";

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
			$(".num").html('');
			
		});
	};
	function btn1(){
		$('.btn1').click(function(){
			$('.num').append('1');
		})
	};
	function btn2(){
		$('.btn2').click(function(){
			$('.num').append('2');
		})
	};
	function btn3(){
		$('.btn3').click(function(){
			$('.num').append('3');
		})
	};
	function btn4(){
		$('.btn4').click(function(){
			$('.num').append('4');
		})
	};
	function btn5(){
		$('.btn5').click(function(){
			$('.num').append('5');
		})
	};
	function btn6(){
		$('.btn6').click(function(){
			$('.num').append('6');
		})
	};
	function btn7(){
		$('.btn7').click(function(){
			$('.num').append('7');
		})
	};
	function btn8(){
		$('.btn8').click(function(){
			$('.num').append('8');
		})
	};
	function btn9(){
		$('.btn9').click(function(){
			$('.num').append('9');
		})
	};
	function btn0(){
		$('.btn0').click(function(){
			$('.num').append('0');
		})
	};

function allbtn(){
	correc();btn1();btn2();btn9();btn8();btn7();btn6();btn5();btn4();btn3();btn0();
};
//if (+) {
	//a= $('.num').html();
		//$('.num').html('');
//}
allbtn();

};