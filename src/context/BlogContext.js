// import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

// const BlogContext = React.createContext ();

const BlogReducer = (BlogPosts, action) => {
  switch (action.type) {
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

    default:
      return BlogPosts;
  }
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

//   createDataContext has  3 parameters   reducer (BlogReducer) ,  actions ({addBlogPost}),  initialState ( [])
export const {Context, Provider} = createDataContext (
  BlogReducer,
  {addBlogPost, deleteBlogPost},
  []
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
