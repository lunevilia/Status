/**
 * 
 */

		
		
$(document).ready(function(){
	
	function getQuestion(){
		$('#chatBox').append('<div class = "msgBox receive"><br>챗봇<br><span>' +
							"담당자 전화문의 1번<br>내 투자 내역 2번<br>회원정보 확인 3번"  + "</span></div>");
	}
	
	$('#chatBox').append('<div class = "msgBox receive"><br>챗봇<br><span>' +
							"저희 서비스를 이용해주셔서 감사합니다 무엇이 궁금하신가요?<br>"  + "</span></div>");
	getQuestion();
							
	var tempMassage;
	$('#chatForm').on('submit', function(){
		event.preventDefault();
		
		//message 입력하고 [전송] 버튼 누르면
		//chatBox 에 보낸 메시지 추가
		if($('#message').val() != ""){
			$('#chatBox').append("<div class = 'msgBox send'><span>"
									 + $('#message').val() + "</span></div><br><br>");
		}
		tempMassage = $('#message').val();
		$('#message').val("");
		
		getResponse(tempMassage);
	});
	
	function getResponse(tempMassage){
		var result;
		
		//서버로부터 받는 메시지(가정)
		if(tempMassage == '#'){
			getQuestion();
		} else if(tempMassage == '1번' || tempMassage=='1'||tempMassage.includes('번호')){
			result ="담당자 번호 : 010-1111-1111";
		} else if(tempMassage == '2번' || tempMassage=='2'||tempMassage.includes('내역')){
			result ="1. 뉴 욕쟁이 디저트<br> 2. Alohaiz<br> 3. Wadiz ";
		} else if(tempMassage == '3번' || tempMassage=='3'||tempMassage.includes('회원')){
			result ="성명 : 이은아<br>아이디 : mugcup1234<br>이번 달 수익 : 102,031<br>현재 투자 : 총 3개";
		} else if(tempMassage.includes('안녕')){
			result ="안녕하세요";
		} else {
			result = "질문을 알 수 없습니다.";
		}
		
		if(result != undefined){
			$('#chatBox').append('<div class = "msgBox receive"><br>챗봇<br><span>' +
							result + "</span></div>");
		}
		
		result = "질문지를 다시 확인하고 싶으시면 #을 입력해주세요";
		$('#chatBox').append('<div class = "msgBox receive"><br>챗봇<br><span>' +
							result + "</span></div><br><br>");
		
							
		// 스크롤해서 태그하기
		$('#chatBox').scrollTop($('#chatBox').prop('scrollHeight'));
	}
	
	
	$('#closeBtn').on('click', function(){
		if($('#closeBtn').text() == '닫기X'){
			$('#closeBtn').text('열기O');
			$('#chatContainer').slideUp(1000);
		} else if($('#closeBtn').text() == '열기O'){
			$('#closeBtn').text('닫기X');
			$('#chatContainer').slideDown(1000);
		}
	})
	
	
});