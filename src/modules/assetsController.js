angularApp.controller("assetsController", function($scope, pageService, assetService) {
  // const address = "http://ec2-52-86-89-220.compute-1.amazonaws.com/api/assets/search";
  // const payload = {
  //   "location":{"lat":40.7127837,"lon":-74.00594130000002,"radius":"5mi"},
  //   "currentPage":1
  // };
  //
  // $http.post(address, payload)
  //   .success((assets) => {
  //     $scope.assets = assets;
  // });

  let dummyAssets = assetService;

  $scope.currentPage = 1;
  let pages = pageService.allPages(dummyAssets.assets, 6);
  $scope.totalPages = pages.length;
  $scope.assetsPage = pages[$scope.currentPage - 1];
  $scope.buttonList = pageService.centerPageRange(pages.length, $scope.currentPage);

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
