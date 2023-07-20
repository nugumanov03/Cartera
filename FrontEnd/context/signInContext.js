import React from 'react'

export const signInContext = React.createContext({
	isSignIn: false,
	setisSignIn: signin => {},
})
