export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:"Loading",
         message:"Data is being load please wait"

    },
    success:{
        title:"Success",
         message:"Data successfully loaded"

    },
    responsefailure:{
        title:"Error",
         message:"An error occured while fetching the data from server, Please try agian"

    },
    requestfailure:{
        title:"Error",
         message:"An error occured while parsing the data"

    },
    networkError:{
        title:"Error",
         message:"Unable to connect with the server. Please check internet connnection and try agian later"

    }

}
//API SERVICE CALL
// SAMPLE REQUEST 
//NEED SERVICE CALL {url:'/',method ,'post/get/put/delete', params:true/false ,query:true/false}

export const SERVICE_URLS={
    userSignup:{url:'/signup', method:'POST'},
    userLogin:{url:'/login', method:'POST'},
    uploadFile:{url:'/file/upload', method:'POST'},
    createPost:{url:'/create', method:'POST'},
    getAllPosts:{url:'/posts', method:'GET', params:true },
    getPostById:{url:'/post', method:'GET', query:true,},
    updatePost:{url:'/update', method:'PUT', query:true},
    deletePost:{url:'/delete', method:'DELETE', query:true},
    newComment:{url:'/comment/new', method:'POST'},
    getAllComments:{url:'/comments', method:'GET', query:true},  
    deleteComment:{url:'/comment/delete',method:'DELETE',query:true}

}
