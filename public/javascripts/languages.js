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
    $('.lang, .linkdeleteuser').each(function(index, element){
      //  changing language
      $(this).text(arrLang[language][$(this).attr('key')]);
      // changing placeholder language
      var placeholderValues = $(this).text();
      $(this).attr('placeholder', placeholderValues);

      Cookies.set('language', language);
    })

  })
  .change();
});
