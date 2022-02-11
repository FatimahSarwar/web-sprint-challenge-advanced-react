import React from 'react'
import AppClass from './AppClass'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Write your tests here
const button = screen.queryByText('Submit')
beforeEach(()=>{
  render(<AppClass />)
  
})
afterEach(()=>{
  document.body.innerHTML
})

test('Set the square to active', ()=>{
  screen.getByText("Square Active")
})
test('Lady Gaga should not be in the class comp', ()=>{
const lady = screen.queryByText('Lady Gaga')
expect(lady)
.not.toBeInTheDocument()})

test('there is a ID in the component', () =>{
  const id = document.querySelector('id')
  expect(id).toBeInTheDocument()
})
test('there is a submit button', ()=>{
   expect(button).toBeInTheDocument()
})
test('we can submit a new email', () =>{
  fireEvent.click(button)
})
test ()
test('sanity', () => {
  expect(true).toBe(false)
})
