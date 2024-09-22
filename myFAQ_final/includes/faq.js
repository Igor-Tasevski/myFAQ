
//I way of solving 


/*
$(document).ready(function () {

    $('.faq_question').click(function () {

        if ($(this).parent().is('.open')) {
            $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': '0' }, 500)
            $(this).closest('.faq').find('.letter_a').fadeOut(500);
			$(this).closest('.faq').find('.letter_q').animate({'left':'25px'});
            $(this).closest('faq').removeClass('.open')
        } else {
            var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
            $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': newHeight }, 500);
            $(this).closest('.faq').find('.letter_a').fadeIn(500);
			$(this).closest('.faq').find('.letter_q').animate({'left':'10px'});
            $(this).closest('.faq').addClass('open');

        }



    })
$('.faq').each(function(){
    $(this).append('<div class="letter_q"></div><div class="letter_a"></div>')


})



})

*/

/* II way of solving */

$(document).ready(function () {
    $('.faq_question').click(function () {
    if ($(this).parent().hasClass('open')) {
    // Close the currently open FAQ
    $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': '0' }, 500);
    $(this).closest('.faq').find('.letter_a').fadeOut(500);
    $(this).closest('.faq').find('.letter_q').animate({ 'left': '25px' });
    $(this).closest('.faq').removeClass('open');
    } else {
    // Close any other open FAQ
    $('.faq.open').find('.faq_answer_container').animate({ 'height': '0' }, 500);
    $('.faq.open').find('.letter_a').fadeOut(500);
    $('.faq.open').find('.letter_q').animate({ 'left': '25px' });
    $('.faq.open').removeClass('open');
    
    // Open the clicked FAQ
    var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
    $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': newHeight }, 500);
    $(this).closest('.faq').find('.letter_a').fadeIn(500);
    $(this).closest('.faq').find('.letter_q').animate({ 'left': '10px' });
    $(this).closest('.faq').addClass('open');
    }
    });
    
    // Append the Q and A elements dynamically
    $('.faq').each(function () {
    $(this).append('<div class="letter_q"></div><div class="letter_a"></div>');
    });
    });
    
    