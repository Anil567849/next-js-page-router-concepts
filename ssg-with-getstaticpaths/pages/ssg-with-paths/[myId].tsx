/*

The getStaticPaths() function in NextJS is used to pre-generate static pages for dynamic routes.

For example, we can create a page that has dynamic parameters like `user/[ID]`  and then we can create a static version for every possible value of the dynamic parameter. In our case, if the dynamic parameter ID limits up to 3 we can create static pages like `user/1`, `user/2`, and `user/3`.


-----------
1. paths is an array that contains the value of the dynamic parameter of the pre-generated static pages.
2. fallBack is a variable that controls the action when the user is trying to access a page whose dynamic parameter is not listed in the paths array.
The fallBack property has two values: 
A. false: The `false` value is the default value of the fallback property. If the request of the user is not listed in the paths array the NextJS will return a 404 page as the result.
B. true: The `true` value tells the NextJS to generate the static version for the request of the user on the fly.
*/


import React from 'react'
interface IUser{
  id: string,
  title: string,
  content: string,
}
function SSGPaths({User}: {User: IUser}) {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-center`}>
        <h1>{User.id}</h1>
        <h1>{User.title}</h1>
        <h1>{User.content}</h1>
    </div>
  )
}


export async function getStaticPaths() {
  return {
      paths: [
        // params passes myId only 1,2,3 = but if user access 4 or etc. it will throw 404 page
          { params: { myId: '1' } },
          { params: { myId: '2' } },
          { params: { myId: '3' } },
      ],
      fallback: false 
      // If the page with the myId is not found, returns 404 page
  };
}

export async function getStaticProps({ params }: {params: {myId: string}}) {
  const { myId } = params;
  const User = {
      id: myId,
      title: `Hello ${myId}`,
      content: `Hello ${myId} is Viewing...`
  };

  return {
      props: {
          User
      }
  };
}


export default SSGPaths