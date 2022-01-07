import React from 'react'
import '../App.css'

import { Table } from 'react-bootstrap'

const Link = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Link for services</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://localhost:3000/signin"
                target="_blank"
              >
                Aptitude Assesment
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://localhost:3000/signin"
                target="_blank"
              >
                Reasoning Assesment
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://localhost:3000/signin"
                target="_blank"
              >
                Verbal Assesment
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://localhost:3000/signin"
                target="_blank"
              >
                Self Assesment
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://localhost:3000/signin"
                target="_blank"
              >
                AI Assist
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Link
