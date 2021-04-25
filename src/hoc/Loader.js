import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const SimpleLoader = () => (
  <Dimmer active>
    <Loader inverted>Loading</Loader>
  </Dimmer>
)

export default SimpleLoader
