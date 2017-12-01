import React from 'react'
import asyncComponent from '../AsyncComponent';

const AsyncHome = asyncComponent(() => import ("../components/Home"))
const AsyncNotFound = asyncComponent(() => import ("../NotFound"))
const AsyncUser = asyncComponent(() => import("../components/users/User"))

const routes = [
  {path: "/", component: AsyncHome},
  {path: "/users", component: AsyncUser},
  {path: "", component: AsyncNotFound}
]

export default routes
