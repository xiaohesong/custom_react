import React from 'react'
import asyncComponent from '../AsyncComponent';

const AsyncHome = asyncComponent(() => import ("../components/Home"))
const AsyncNotFound = asyncComponent(() => import ("../NotFound"))

const routes = [
  {
    path: "/",
    component: AsyncHome
  }, {
    path: "",
    component: AsyncNotFound
  }
]

export default routes
