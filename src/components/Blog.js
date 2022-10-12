import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 md:w-8/12 mx-auto my-16 grid gap-6'>
            <div className='border border-gray-300 bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='text-2xl font-semibold mb-1'>What is the purpose of react router</h1>
                <p>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border border-gray-300 bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='text-2xl font-semibold mb-1'>How does context api works</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is needed to use it. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
            </div>
            <div className='border border-gray-300 bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='text-2xl font-semibold mb-1'>Tell us about useRef hook</h1>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. In general, we want to let React handle all DOM manipulation. But there are some instances where useRef can be used without causing issues. In React, we can add a ref attribute to an element to access it directly in the DOM. The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.</p>
            </div>
        </div>
    );
};

export default Blog;