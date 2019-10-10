import React from 'react'
import Repo from './Repo'
//import RepoSearch from './RepoSearch'

export default function RepoList({ repos }) {

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-10-mx-auto  col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slaned text-center">Repo List</h1>
          </div>
        </div>
        <div className="row">
          {repos.map(repo => {
            return <Repo key={repo.id} repo={repo} />
          })}
        </div>
      </div>
    </>
  )
}

