import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.myapp', // App bundle ID
  name: 'test', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

$$(document).on('page:init', '.page[data-name="about"]', function (e) {


    $$('#dodawanie').on('click', () => { 

    var a = document.getElementById("a").value; 
    var podaja = parseInt(a); 
    var b = document.getElementById("b").value; 
    var podajb = parseInt(b); 
    var wynik1 = podaja+podajb;
      
        document.getElementById("wynik1").innerHTML="Dodawanie "+wynik1;
    });
    $$('#odejmowanie').on('click', () => { 

    var a = document.getElementById("a").value; 
    var podaja = parseInt(a); 
    var b = document.getElementById("b").value; 
    var podajb = parseInt(b); 
    var wynik2 = podaja-podajb;
    document.getElementById("wynik2").innerHTML="Odejmowanie "+wynik2;

       
    });
   
    $$('#mnozenie').on('click', () => { 

    var a = document.getElementById("a").value; 
    var podaja = parseInt(a); 
    var b = document.getElementById("b").value; 
    var podajb = parseInt(b); 
    var wynik3 = podaja*podajb;
    document.getElementById("wynik3").innerHTML="Mnozenie "+wynik3;

        
    });

 $$('#dzielenie').on('click', () => { 

    var a = document.getElementById("a").value; 
    var podaja = parseInt(a); 
    var b = document.getElementById("b").value; 
    var podajb = parseInt(b); 
    var wynik4 = podaja/podajb;
    document.getElementById("wynik4").innerHTML="Dzielenie "+wynik4;

    });
});