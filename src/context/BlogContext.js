// import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

// const BlogContext = React.createContext ();

const BlogReducer = (BlogPosts, action) => {
  switch (action.type) {
    case 'add_blog':
      return [...BlogPosts, {title: `My Blog Post #${BlogPosts.length + 1}`}];

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
  return () => {
    dispatch ({type: 'add_blog'});
  };
};

//   createDataContext has  3 parameters   reducer (BlogReducer) ,  actions ({addBlogPost}),  initialState ( [])
export const {Context, Provider} = createDataContext (
  BlogReducer,
  {addBlogPost},
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
