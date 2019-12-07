$(document).ready(function() {


	$('#next').click(function() {

		var $prev = $('.shown').prev();

		$('.shown').removeClass('shown').addClass('hidden');

		if ($prev.size() == 0)
			$prev = $('.cont_div').last();

		$prev.addClass('shown');
	})

	$('#prev').click(function() {
		var $prev = $('.shown').prev();

		$('.shown').removeClass('shown').addClass('hidden');

		if ($prev.size() == 0)
			$prev = $('.cont_div').last();

		$prev.addClass('shown');

	})

});