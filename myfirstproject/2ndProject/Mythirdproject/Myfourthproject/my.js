function generate() {
  var len = document.getElementById("length").value;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  var password = "";

  for (var i = 0; i < len; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  document.getElementById("result").value = password;
}
