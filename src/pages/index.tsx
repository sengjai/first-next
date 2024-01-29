import Link from 'next/link'


export default function Home() {
    return (
    <>
        <h1>Welcome to Home</h1>
        <p>Lorem ipsum, welcome to about page</p>
        <Link href="/about">Go to about</Link>
    </>
    
    
    )
}