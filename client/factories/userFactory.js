myApp.factory('userFactory',function($http){
    var factory = {};
    factory.errors=[];
    factory.user = null;
    
    factory.register = function(user, createdUser){
        
        $http.post('/api/users/new', user).then(function(response){
            if(response.data.error){
                console.log('Error in userFactory.register',response.data.error)
            }
            else{
                factory.user=response.data.user.first_name
                // console.log('Factory.user is equal to ====',response.data.user.first_name)
            }
        })
        createdUser();
    }

    factory.login = function(user,gotUser){
        // console.log('running login factory')
        console.log(3, 'Factory',user)

        $http.post('/api/user',user).then(function(response){
            console.log('response',response)
            if(response.data.error){
                console.log(5, 'error')
                console.log('Running error in userFactory',response.data.error)
                factory.error.push(response.data.error)
            }
            else{
                console.log(5, 'success')
                console.log('Got first_name on userFactory',response.data.data)
                factory.user = response.data.data
            }
            gotUser();
        })
        
    }

    return factory;

});