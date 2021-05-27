import React, { useState } from 'react'
import styled from 'styled-components'

import ProjectEditModal from './ProjectEditModal'

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import { dateFormat } from '../../helpers/DateTimeHelper'

const newProject = {
  id: 0,
  title: '',
  author: '',
  start_date: null,
  end_date: null,
}

const Component = ({ projects, onRemove, onSave }) => {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  const updateField = (name, value) => {
    setSelectedProject({
      ...selectedProject,
      [name]: value,
    })
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title variant="h4">Projects List</Title>
        <CreateButton
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => {
            setSelectedProject({
              ...newProject,
            })
            setOpen(true)
          }}
        >
          Create
        </CreateButton>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell component="th" scope="row">
                  {project.id}
                </TableCell>
                <TableCell align="right">{project.title}</TableCell>
                <TableCell align="right">{project.author}</TableCell>
                <TableCell align="right">
                  {dateFormat(project.start_date)}
                </TableCell>
                <TableCell align="right">
                  {dateFormat(project.end_date)}
                </TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setSelectedProject({
                        ...project,
                        start_date: dateFormat(project.start_date),
                        end_date: dateFormat(project.end_date),
                      })
                      setOpen(true)
                    }}
                  >
                    Edit
                  </Button>
                  <span>&nbsp;&nbsp;</span>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      onRemove(project.id)
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ProjectEditModal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        onSave={onSave}
        onFieldChange={updateField}
        project={selectedProject}
      />
    </>
  )
}

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`

const CreateButton = styled(Button)`
  height: fit-content;
`

export default Component
