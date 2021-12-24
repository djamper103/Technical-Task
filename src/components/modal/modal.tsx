import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setModalState } from '../../store/reducers/actionCreator'
import style from './modal.module.css'


export default function Modal() {

    const { modalActive } = useAppSelector(state => state.modalReducer)

    const { albums, isLoading, error } = useAppSelector(state => state.albumsReducer)

    const dispatch = useAppDispatch()

    return (
        <div className={modalActive ? style.containerActive : style.container} onClick={() => dispatch(setModalState(false))}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                <div>
                    {
                        isLoading ? <div>Данные еще не загружены</div>
                            : error ? <div>error</div>
                                : <div>
                                        <h3>User Albums</h3>
                                    {
                                        albums ? albums.map((el) => {
                                            return (
                                                <div  key={el.id} className={style.mainContent}>
                                                    <div>
                                                        Album number: {el.id}
                                                    </div>
                                                    <div>
                                                        Title: {el.title}
                                                    </div>
                                                </div>
                                            )
                                        })
                                            : <div>Данные еще не загружены</div>
                                    }
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}