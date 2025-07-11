import Post from '../model/post.js';   

export const createPost= async (request, response) => {

    try {
        const post=await new Post(request.body)
 post.save();
        return response.status(200).json("post saved successfully");
    }
    catch(error){
        response.status(500).json({ message: error.message });
    };
   
}
export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}
export const getPost = async (request, response) => {
    const id = request.query.id;
    try {
        const post = await Post.findById(request.params.id);
        return response.status(200).json(post);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
export const updatePost = async (request, response) => {
    try {
       const post =  await Post.findById(request.params.id);
       if(!post){
              return response.status(404).json({msg:'Post not found'});
       }
    await Post.findByIdAndUpdate(request.params.id,{$set:request.body});
    return response.status(200).json({msg:'Post updated successfully'});
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
export const deletePost = async (request, response) => {
    try {
        const post = await Post.findByIdAndDelete(request.params.id);
        if (!post) {            
            return response.status(404).json({ msg: 'Post not found' });
        }      
      
        return response.status(200).json({ msg: 'Post deleted successfully' });
    }   catch (error) {
        return response.status(500).json({ message: error.message });
    }
}