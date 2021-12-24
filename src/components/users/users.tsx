import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchAlbums, fetchPosts, fetchUsers, setModalState } from '../../store/reducers/actionCreator'
import { NavLink } from "react-router-dom";
import Modal from '../modal/modal';
import style from "./users.module.css"


export default function Users() {

    const dispatch = useAppDispatch()

    const { users, isLoading, error } = useAppSelector(state => state.userReducer)
    const { modalActive } = useAppSelector(state => state.modalReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const posts = (data: number) => {
        dispatch(fetchPosts(data))
    }

    const albums = (data: number) => {
        dispatch(fetchAlbums(data))
        dispatch(setModalState(true))
    }

    return (
        <div className={style.container}>
            {
                modalActive ? <Modal />
                    : null
            }
            {
                isLoading ? <div>Данные еще не загружены</div>
                    : error ? <div>error</div>
                        : <div >
                            <h3>Users</h3>
                            {
                                users ? users.map((el) => {
                                    return (
                                        <div key={el.id} >
                                            <div>
                                                User: {el.id}. {el.username}
                                            </div>
                                            <div>
                                                Username: {el.name}
                                            </div>
                                            <div>
                                                email: {el.email}
                                            </div>
                                            <div className={style.buttons}>
                                                <div>
                                                    <NavLink to="/posts" onClick={() => posts(el.id)}>
                                                        Posts
                                                    </NavLink>
                                                </div>
                                                <button onClick={() => albums(el.id)}>
                                                    Albums
                                                </button>

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
