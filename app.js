var portfolioSite = angular.module('portfolioSite', ['ui.router']);

/* Mainly using angular to present static pages and links in order
create static pages for my portfolio site..*/

portfolioSite.config(function($stateProvider) {

  //Home state of the website
  $stateProvider.state('home', {
    url:"",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html'
      },
      'footer': {
        templateUrl: 'partials/footer.html'
      },
    }
  });

  // This is the about state for the website
  $stateProvider.state('about', {
    url:"/about",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/about.html'
      },
      'footer': {
        templateUrl: 'partials/footer.html'
      },
    }
  });

  //This is the project list section of the page
  $stateProvider.state('projects', {
    url:"/projects",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/projects.html'
      },
      'footer': {
        templateUrl: 'partials/footer.html'
      },
    }
  });

  //Contact information for me
  $stateProvider.state('contact', {
    url:"/contact",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/contact.html'
      },
      'footer': {
        templateUrl: 'partials/footer.html'
      },
    }
  });
});
