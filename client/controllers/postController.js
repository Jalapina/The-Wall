myApp.controller('postController', function($scope, $location,$cookies, userFactory, postFactory){
    var logincookie = $cookies.get('loggeduser');
    var userid = $cookies.get('userid');
    $scope.userpost = {}
    $scope.usercomment = {}

    console.log('postController.js == ',logincookie);    
    if(logincookie){
        $scope.user = {name:logincookie, id:userid}
        function getallpost(){
            postFactory.index(function(post){
                $scope.allpost = post
            });
        }
        getallpost();

        $scope.post = function(){
        var newPost = { message: $scope.userpost.post, user: $scope.user.id}
        console.log('adding post ....',newPost);
        postFactory.post(newPost, function(){
            $scope.userpost = {}
        })   
    }

        $scope.comment = function(postID, addingcomment){
            console.log('Running comment in postController')
            var newComment = { comment:addingcomment.comment, user: $scope.user.id, message: postID}
            console.log(newComment);
            postFactory.comment(newComment, function(){
                $scope.usercomment = {}
            })
        }

        $scope.logout = function(){
             $cookies.remove('loggeduser')
             $location.url('/login')
         }

    }
    else{
        $location.url('/login')
    }
  

})