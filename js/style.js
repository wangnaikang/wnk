/*提示信息-s*/

function tip(index, val, time) {

	var n = null
   clearInterval(n)
	$('#tip').hide()
	$('#tip').show()
	if(index == 0) {

		var html = '<div class="tip succeed"><p>' + val + '</p></div>'
		$('#tip').html(html)
		n=setTimeout(function() {
			$('#tip').hide()
			$('#tip').html("")
		}, time)
	} else if(index == 1) {
		var html = '<div class="tip warning"><p>' + val + '</p></div>'
		$('#tip').html(html)

		n=setTimeout(function() {
			$('#tip').hide()
			$('#tip').html("")
		}, time)
	} else if(index == 2) {
		var html = '<div class="tip mistake"><p >' + val + '</p></div>'
		$('#tip').html(html)
		n=setTimeout(function() {
			$('#tip').hide()
			$('#tip').html("")
		}, time)
	} else if(index == 3) {
		var html = '<div class="tip tips"><p>' + val + '</p></div>'
		$('#tip').html(html)

		n=setTimeout(function() {
			$('#tip').hide()
			$('#tip').html("")
		}, time)
	} else if(index == 4) {
		var html = '<div class="tip loading"><p>' + val + '</p></div>'
		$('#tip').html(html)

	}

}

/*提升信息-e*/

/*模态框-s*/

function modelClear(obj) {
	$(obj).parent().parent().parent().hide()
}

/*模态框-e*/

function drawer(index) {

	$('.drawer').eq(index).addClass('ac')

}

function drawerClear(obj) {

	$(obj).parent().parent().parent().removeClass('ac')

}


function draweroff(index) {

	$('.drawer').eq(index).removeClass('ac')

}