import React, { useContext } from 'react'
import { signInContext } from './signInContext'

export const useSignIn = () => {
	const context = useContext(signInContext)

	return context
}
