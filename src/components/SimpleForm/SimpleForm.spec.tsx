import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SimpleForm from './SimpleForm';


describe('SimpleForm', () => {
  const inputs = [
    {
      placeholder: "Name",
    },
    {
      placeholder: "Password"
    },
  ]

  it('should build a form', () => {
    const handleSubmit = jest.fn(event => event.preventDefault())

    render(<SimpleForm handleSubmit={handleSubmit} inputs={inputs} />)

    expect(screen.getByPlaceholderText("Name")).toBeVisible()
    expect(screen.getByPlaceholderText("Password")).toBeVisible()

    fireEvent.click(screen.getByText("Submit"))
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  });

  it('should be to add custom actions', () => {
    const handleSubmit = jest.fn(event => event.preventDefault())
    const handleClick = jest.fn()
    const buttonText = "Custom action button"

    render(
      <SimpleForm handleSubmit={handleSubmit} inputs={inputs}>
        <div>
          <button onClick={handleClick}>{buttonText}</button>
        </div>
      </SimpleForm>
    )

    fireEvent.click(screen.getByText(buttonText))
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
})
