/*
  Scenarios common to both snapshot tests and stories
*/

import React from 'react'
import References from './index'

export const Scenarios = [
  {
    title: 'With references',
    description: 'Demonstrates rendering of references',
    element: (
      <div>
        <p>Before</p>
        <References
          references={[
            { id: 'id1', title: 'title1' },
            { id: 'id2', title: 'title2' },
            { id: 'id3', title: 'title3' },
          ]}
        />
        <p>After</p>
      </div>
    ),
  },
  {
    title: 'with references and different label',
    description: 'Demonstrates rendering of references with a different label',
    element: (
      <div>
        <p>Before</p>
        <References
          referencesLabel="Works Cited"
          references={[
            { id: 'id1', title: 'title1' },
            { id: 'id2', title: 'title2' },
            { id: 'id3', title: 'title3' },
          ]}
        />
        <p>After</p>
      </div>
    ),
  },
]
