//import sleep from 'await-sleep';
import { signIn, signOut, useSession } from 'next-auth/react';



export default function Home(props: any) {
    const { data: session } = useSession();
    
    return (

      <div>
        <h2>Welcome to our homepage.</h2>
        <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
        <p>The weather: {props.forecast}</p>
        <div>
          {session ? (
            <>
              <p>Welcome, {session.user?.name}!</p>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              <p><b>You&aposre not signed in, please sign in to continue</b></p>
              <button onClick={() => signIn()}>Sign in with SSO</button>
            </>
            
          )}
        </div>
      </div>
    )
  }
  
  //this is for data that needs to be not cache
  export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()

    //await sleep(3000)
  
    return {
      props: {
        forecast: data.properties.periods[0].detailedForecast
      }
    }
  }