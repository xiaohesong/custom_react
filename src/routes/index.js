import React from 'react'
import asyncComponent from '../AsyncComponent';

const AsyncHome = asyncComponent(() => import("../components/Home"))

const routes = [
  {
    path: "/",
    component: AsyncHome
  }
]

export default routes
