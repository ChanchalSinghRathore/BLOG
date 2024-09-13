import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import ThumbPage from './ThumbPage';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return <>
            <ThumbPage/>
            <div className="w-full py-8 text-left mt-24">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className=" text-2xl text-white font-bold hover:text-gray-500">
                               Please Login to read posts <Link
                        to="/login"
                        className="font-light text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In...
                    </Link>
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    }
    return <>
        <ThumbPage/>
        <div className='w-full mt-10 py-8 '>
            <Container>
                <div className='flex flex-wrap gap-5 max-576:flex max-576:flex-col max-576:gap-0'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 max-576:w-4/5 max-576:ml-10'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    </>
}

export default Home