angularApp.controller("assetsController", function($scope, pageService) {
  // const address = "http://ec2-52-86-89-220.compute-1.amazonaws.com/api/assets/search";
  // const payload = {
  //   "location":{"lat":40.7127837,"lon":-74.00594130000002,"radius":"5mi"},
  //   "currentPage":1
  // };
  //
  // $http.post(address, payload)
  //   .success((assets) => {
  //     $scope.assets = assets;
  //     console.log(assets);
  // });

  $scope.test = "CLICK";
  let dummyAssets = {
    "total": 20,
    "assets": [
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "NW 34 14th St",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "501 Privet Dr",
        "media": "Subway Wall",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "22 Broadway",
        "media": "SmartBoard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "111 23rd St",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "907 East Blvd",
        "media": "Subway Wall",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "56 7th Ave",
        "media": "SmartBoard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "45 MLK Blvd",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "391 20th Ave",
        "media": "Subway Wall",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "123 Sesame St",
        "media": "SmartBoard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "322 Broadchurch Lane",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "31 Agony Place",
        "media": "Subway Wall",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "212 Timid Deer Path",
        "media": "SmartBoard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "702 Hobbiton Lane",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "61 Vanilla Expressway",
        "media": "Subway Wall",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "426 Greenwich Plaza",
        "media": "SmartBoard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "601 Nightly Place",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "45 St Anne's Blvd",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "802 Yahtzee Road",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "1852 East 18th St",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      },
      {
        "latitude": 40.72570711111,
        "longitude": -73.98711411111,
        "location": "205 5th Ave",
        "media": "Billboard",
        "copy_size": "50X40",
        "cpm": 3.9511111111
      }
    ]
  };

  $scope.currentPage = 1;
  let pages = pageService.allPages(dummyAssets.assets, 2);
  $scope.totalPages = pages.length;
  $scope.assetsPage = pages[$scope.currentPage - 1];
  $scope.buttonList = pageService.centerPageRange(pages.length, $scope.currentPage);
  console.log();

  $scope.changePage = function(pageNumber, index) {
    if (pageNumber === "...") {
      let scrollAmount = (index === 0) ? -1 : 1;
      $scope.buttonList = pageService.scrollRange(
        pages.length,
        $scope.buttonList,
        scrollAmount
      );
    }

    else {
      $scope.currentPage = pageNumber;
      $scope.assetsPage = pages[$scope.currentPage - 1];
      $scope.buttonList = pageService.centerPageRange(pages.length, $scope.currentPage);
    }
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 1) $scope.changePage($scope.currentPage - 1);
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < pages.length) $scope.changePage($scope.currentPage + 1);
  };
});
