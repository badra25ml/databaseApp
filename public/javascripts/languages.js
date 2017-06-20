// language selector
$(function() {
  //Read the cookie, if it has been previously set
  var language = Cookies('language')
  //Set language to previously set value
    !language || $('#sel').val( language );

    //Set up an event listener to update the cookie whenever language is changed
 $('select').change(function(event){

   Cookies.remove('language', language)

   var language = this.value;
   $('.lang').each(function(index, element){
    $(this).text(arrLang[language][$(this).attr('key')]);
    Cookies.set('language', language)
   })

 })
 .change();
});
