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
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "501 Privet Dr",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "22 Broadway",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "88 3rd Ave",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "111 23rd St",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "907 East Blvd",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "56 7th Ave",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "45 MLK Blvd",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "391 20th Ave",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "123 Sesame St",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "322 Broadchurch Lane",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "31 Agony Place",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "212 Timid Deer Path",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "702 Hobbiton Lane",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "61 Vanilla Expressway",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "426 Greenwich Plaza",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "601 Nightly Place",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "45 St Anne's Blvd",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "802 Yahtzee Road",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "1852 East 18th St",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      },
      {
        "latitude": 11.99,
        "longitude": 99.11,
        "location": "205 5th Ave",
        "media": "Big ol' billboard",
        "copy_size": "50X40",
        "cpm": 3.555444
      }
    ]
  };

  let currentPage = 1;
  let pages = pageService.allPages(dummyAssets.assets, 2);
  console.log(pages);
  $scope.assetsPage = pages[currentPage - 1];
  $scope.buttonList = pageService.centerPageRange(pages.length, currentPage);

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
      currentPage = pageNumber;
      $scope.assetsPage = pages[currentPage - 1];
      $scope.buttonList = pageService.centerPageRange(pages.length, currentPage);
    }
  };

  $scope.prevPage = function() {
    if (currentPage > 1) $scope.changePage(currentPage - 1);
  };

  $scope.nextPage = function() {
    if (currentPage < pages.length) $scope.changePage(currentPage + 1);
  };
});
