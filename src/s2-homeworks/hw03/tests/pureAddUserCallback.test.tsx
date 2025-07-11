import React from 'react'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: UserType[] = []
// const setName = (a: any[]) => {
//     initialState = a
// }
const setName = (value: React.SetStateAction<UserType[]>) => {
    if (typeof value === 'function') {
        initialState = value(initialState) // Обрабатываем функциональную форму обновления
    } else {
        initialState = value // Обрабатываем прямое значение
    }
}
beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
