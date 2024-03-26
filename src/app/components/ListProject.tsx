'use client'

import { useState, useEffect } from 'react'

const ListProject = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/user_projects')
      .then((response: any) => response.json())
      .then((data: any) =>
        setProjects(data))
  }, [])


  return (
    <div>
      <h1>List of Projects</h1>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Image</th>
            <th>User Progress</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item: any, index) => (
            <tr key={index}>
              <td>{item.project_name}</td>
              <td><img src={item.project_image} alt={item.project_name} style={{ width: "100px", height: "100px" }} /></td>
              <td>{item.user_progess}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListProject