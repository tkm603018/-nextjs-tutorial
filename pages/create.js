import React from 'react';
import CreateForm from '../components/createForm'
import NewTable from '../components/newTable'
import {Box, Switch, Tooltip} from '@material-ui/core';


export default () => {

  const [formVisible, setFormVisible] = React.useState(true)
  const handleChange = (e) => {
    setFormVisible(e.target.checked)
  }

  return (
    <div>
      <center>
        <Tooltip title="フォームを非表示にします" placement="top">
          <Switch
            checked={formVisible}
            onChange={handleChange}
            color="primary"
            />
        </Tooltip>
        {formVisible && <CreateForm />}
      </center>
      

      
      <Box mt={5}>
        <NewTable/>
      </Box>
      
    </div>
  )
}
