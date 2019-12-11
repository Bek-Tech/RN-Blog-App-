// import React, {useReducer} from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// const BlogContext = React.createContext ();

const BlogReducer = (BlogPosts, action) => {
  switch (action.type) {
    case 'get-blogPosts':
      return action.payload;
    case 'delete_blog':
      return BlogPosts.filter (blogPost => blogPost.id !== action.payload);

    case 'add_blog':
      return [
        ...BlogPosts,
        {
          id: Math.floor (Math.random () * 9999), //   this gives random number  to id
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'edit_blog':
      return BlogPosts.map (blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return BlogPosts;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get ('/blogposts');
    //response.data === []  or [{},{},{}]
    dispatch ({type: 'get-blogPosts', payload: response.data});
  };
};

// to get access to dispatch function  change this function
// const addBlogPost = () => {
//   dispatch ({type: 'add_blog'});
// };

// to this :
const addBlogPost = dispatch => {
  return (title, content, callback) => {
    // callback === ()=>navigation.navigate("Index")  it comes from CreateScreen
    // this function means  run dispatch and after  response run callback   //142
    dispatch ({type: 'add_blog', payload: {title, content}});
    callback ();
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch ({type: 'delete_blog', payload: id}); //135
  };
};
const editBlogPost = dispatch => {
  return (title, content, id, callback) => {
    dispatch ({type: 'edit_blog', payload: {title, content, id}}); //135
    callback ();
  };
};

//   createDataContext has  3 parameters   reducer (BlogReducer) ,  actions ({functions which contains dispatch}),  initialState ( [])
export const {Context, Provider} = createDataContext (
  BlogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [{title: 'test', content: 'test content', id: 1}]
);

//  const [BlogPosts, dispatch] = useReducer (BlogReducer, []);
// export const BlogProvider = ({children}) => {

//   // const [BlogPosts, setBlogPosts] = useState ([]);

//   // const addBlogPost = () => {
//   //   setBlogPosts ([
//   //     ...BlogPosts,
//   //     {title: `My Blog Post #${BlogPosts.length + 1}`},
//   //   ]);
//   // };
//   return (
//     <BlogContext.Provider value={{data: BlogPosts, addBlogPost}}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
