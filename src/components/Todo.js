import React from 'react';

class ToDo extends React.Component {
    constructor() {
        super();
        [
           {
                task: `Go to the #BLM protests`,
                id: Date.now(),
                completed: false
           },
           {
                task: `Donate to one or more of the following: Justice for Breonna Taylor, The Bail Project, My Block My Hood My City, Black Table Arts, Fair Fight,`,
                id: Date.now(),
                completed: false
           },
           {
                task: `Sign petitions`,
                id: Date.now(),
                completed: false
           },
           {
                task: `Discontinue purchases from anti-racist businesses`,
                id: Date.now(),
                completed: false
           },
           {
                task: `Civil discussions with multiple views and backgrounds for the common goal of unity`,
                id: Date.now(),
                completed: false
           }

        ]
    }
}