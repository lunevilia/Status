/**
 * 
 */

$(function(){
	
	var sum = 0;
	/* 수익현황을 양수면 빨간색, 음수면 파란색으로 변경 */
	$('.StatusNum').each(function(){
		if($(this).text().substring(0,1) == '+'){
			$(this).css('color', 'rgb(222, 68, 68)');
			sum += Number($(this).text().substring(1,$(this).text().length-2));
			$(this).append('▲');
			 
		} else{
			$(this).css('color', 'rgb(52, 152, 219)');
			$(this).append('▼');
			sum += Number($(this).text().substring(1,$(this).text().length-2));
		}
		
	});
	
	$('#sumStatus').append(sum);
	
});