import React, { Component } from 'react'

function People() {

    const people = [
        {
          name: 'matthew',
         dog: 'snoopz'
        }, 
        {name: 'muhajir'}, 
        {name: 'miki'}, 
        {name: 'chris'}, 
        {name: 'wesley'}
      ];
      
      const List = people.map((person)=>
      <div>
    <h2>{person.name}</h2>
    </div>
      );

        return (
            <div>
              <h1>People Page</h1>
             {List}
            </div>
        )
    
}

export default People;
