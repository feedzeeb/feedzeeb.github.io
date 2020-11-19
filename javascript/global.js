
  $(function(){
          $('.showSingle').click(function(){
                $('.showSingle').removeClass("active");
                $(this).addClass("active");

                $('.targetDiv').hide();
                // $('.showSingle').addClass("type-active");
                $('#div'+$(this).attr('target')).show();
          });
  });


// $(function(){  // $(document).ready shorthand
//     $('.change').fadeIn('slow');
// });

  $(document).ready(function() {
    $(window).scroll( function(){

        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if( bottom_of_window > bottom_of_object ){
                $(this).animate({
                  'opacity':'1',
                  top:"60px"
              },1500);
            }

        });
      });
  });


  $(document).ready(function() {
    $(window).scroll( function(){

        $('.hideme2').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if( bottom_of_window > bottom_of_object ){
                $(this).animate({
                  'opacity':'1',
              },3500);
            }

        });
      });
  });
