myApp.factory('postFactory', function($http){
    var factory = {};
    factory.post = [];
    factory.errors = [];

    factory.index = function(gotPost){
        $http.get('/api/messages').then(function(response){
    
            post = response.data.messages
            gotPost(post);
        })
    }
    
    factory.post = function(post, madePost){
        $http.post('/api/message',post).then(function(response){
                console.log('postFactory response',response)
                madePost();
        })
    }
    factory.comment = function(newComment, madeComment){
        console.log('running comment in postFactory');
        $http.post('/api/comment',newComment).then(function(response){
            console.log('postFactory comment response',response)
            madeComment();
        });
    }

    return factory;

});