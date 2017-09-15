myApp.controller('userController', function($scope,userFactory, $location, $cookies){
    console.log(1,'controller')
        $scope.register = function(){
            console.log($scope.reguser.password,$scope.reguser.confirm)
            if($scope.reguser.password==$scope.reguser.confirm){
                userFactory.register($scope.reguser,function(){
                    
                    $location.url('/');
                })
            }
            else{
                console.log('error at userController.js')
            }
        }

        $scope.login =  function(){
            // console.log('running login in userController');
             console.log(2,'controller')
            userFactory.login($scope.loginUser, function(){
                console.log(4,'controller')
                // console.log("userController $scope.loginUser",$scope.loginUser)
                console.log("userController factory",userFactory.user)
                if(userFactory.user){
                    console.log(6, 'Success in userController id',userFactory.user._id)
                    console.log( "userFactory.user",userFactory.user )
                    $cookies.put('loggeduser',userFactory.user.first_name);
                    $cookies.put('userid',userFactory.user._id);
                    $location.url('/')
                }
                else{
                    console.log(6,'Error in userController')
                    $scope.errors = userFactory.errors

                    console.log('Error at userController.login',$scope.errors)
                }
            })
        }
})