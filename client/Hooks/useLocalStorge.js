import { useState } from 'react'

export function useLocalStorge(key, initialState) {
	const [store, setStore] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialState
		} catch (error) {
			return initialState
		}
	})

	const setValue = value => {
		try {
			setStore(value)
			window.localStorage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.log(error)
		}
	}

	return [store, setValue]
}
