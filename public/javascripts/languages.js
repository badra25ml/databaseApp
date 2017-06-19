// language selector
var arrLang = {"en":{
 "Home": "Home",
 "Register": "Register",
 "Login": "Login",
 "Logout": "Logout",
 "Search": "Search",
 "User list": "Userl-ist",
 "User Info": "User info",
 "Name": "Name:",
 "Age": "Age:",
 "Gender": "Gender:",
 "Location": "Location:",
 "Username": "Username",
 "Email": "Email",
 "Delete": "Delete?",
 "full name": "Full name",
 "Add User": "Add User",
 "Login Page": "Login page",
 "Cancel": "Cancel",
 "Registration Page": "Registration Page",
 "Password": "Password",
 "Verify password": "Verify password",
 "Register": "Register",
 "Language": "Language",
 "Enter Password": "Enter Password"
},
"fr": {
 "Home": "Acceuil",
 "Register": "S'enregistrer",
 "Login": "Se connecter",
 "Logout": "Se deconnecter",
 "Search": "Chercher",
 "User List": "Liste des utilisateurs",
 "User Info": "Information sur l'utilisateur",
 "Name": "Nom:",
 "Age": "Age:",
 "Gender": "Genre:",
 "Location": "Lieu de residence:",
 "Username": "Nom d'utilisateur",
 "Email": "Email",
 "Delete": "Effacer?",
 "Full Name": "Nom complet",
 "Add User": "Ajout d'utilisateur",
 "Login Page": "Page d'acceuil",
 "Cancel": "Annuler",
 "Registration Page": "Page d'enregistrement",
 "Password": "Mot de passe",
 "Verify Password": "Verifier le mot de passe",
 "Language": "Langue",
 "Enter Password": "Entrer le mot de pass"
 }
}
$(function() {
 $('select').change(function(event){
  var language = this.value;
   $('.lang').each(function(index, element){
    $(this).text(arrLang[language][$(this).attr('key')]);
    $(this).text(arrLang[language][$(this).attr('placeholder')]);
   })
  //  $('placeholder').each(function(index, element){
  //    $(this).text(arrLang[lang][$(this).attr('key')])
  //  })
 })
});
