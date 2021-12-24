import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import style from "./posts.module.css"


export default function Posts() {


    const { posts, isLoading, error } = useAppSelector(state => state.postsReducer)


    return (
        <div className={style.container}>
            {
                isLoading ? <div>Данные еще не загружены</div>
                    : error ? <div>error</div>
                        : <div>
                            <h3>User Posts</h3>
                            {
                                posts ? posts.map((el) => {
                                    return (
                                        <div key={el.id} className={style.mainContent}>
                                            <div>
                                                Post id: {el.userId}
                                            </div>
                                            <div>
                                                Title: :{el.body}
                                            </div>
                                        </div>
                                    )
                                })
                                    : <div>Данные еще не загружены</div>
                            }
                        </div>
            }
        </div>
    )
}
