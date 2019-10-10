import React, { useState } from 'react'

export default function Repo({ repo }) {
  const { avatar_url, id,name, login, html_url,
    description, stargazers_count, owner,
    forks_count, open_issues_count } = repo
  const [showIssue, setShowIssue] = useState(false)
  const [repoDetails, setRepoDetails] = useState([])
  


  return (
    <>
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img src={owner.avatar_url} alt="repo" className="img-card-top" style={{ height: "14rem" }} />
          <div className="card-body text-capitalize">
            <h6>{name}</h6>
            <h6>{owner.login}</h6>
            <h6 className="text-warning">
              Can be find at: {html_url}
              {login}
            </h6>
          </div>
          <div className="card-footer">
            {/* <button type="button" style={{ margin: `13px` }} className="btn btn-primary text-center" data-id={id} onClick={handleShowInfo}>More Info</button> */}
            {/* {showInfo &&
              <button key={recipe_id} type="button" style={{ margin: `13px` }} className="btn btn-success text-center font-weight-bold" ></button>}
            {showInfo ?
              ingredients.map((i, index) => {
                return <ul key={index} className="list-group">
                  <li className="list-group-item" >{i}</li>
                </ul>
              })
              : null} */}
          </div>
        </div>
      </div>
    </>
  )
}