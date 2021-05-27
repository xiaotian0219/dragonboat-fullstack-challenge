import React from 'react'
import styled from 'styled-components'

import {
  Box,
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core'

const Component = ({
  open,
  onClose,
  onSave,
  onFieldChange,
  project: { id, title, author, start_date, end_date },
}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {id > 0 ? 'Edit' : 'Create'} Project
      </DialogTitle>

      <Divider />

      <DialogContent>
        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="title"
          label="Title"
          value={title}
          onChange={(event) => {
            onFieldChange('title', event.target.value)
          }}
          fullWidth
        />

        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="author"
          label="Author"
          value={author}
          onChange={(event) => {
            onFieldChange('author', event.target.value)
          }}
          fullWidth
        />

        <Box display="flex" justifyContent="space-between" marginTop={1}>
          <DateField
            variant="outlined"
            id="start_date"
            label="Start Date"
            type="date"
            defaultValue={start_date}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={(event) => {
              onFieldChange('start_date', event.target.value)
            }}
          />

          <Box flex="0 0 auto" width={15}>
            &nbsp;
          </Box>

          <DateField
            variant="outlined"
            id="end_date"
            label="End Date"
            type="date"
            defaultValue={end_date}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={(event) => {
              onFieldChange('end_date', event.target.value)
            }}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Box display="flex" justifyContent="center" flex="1 1 0" padding={1}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Box width={15}></Box>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              onSave(id, { title, author, start_date, end_date })
              onClose()
            }}
          >
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

const DateField = styled(TextField)`
  .MuiOutlinedInput-input {
    padding: 10.5px 14px;
  }
`

const Button = styled(MuiButton)`
  width: 120px;
`

export default Component
