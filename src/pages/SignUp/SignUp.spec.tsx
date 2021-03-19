import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignUp from './SignUp';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Page: SignUp', () => {
  const wrapper = (props: any) => <BrowserRouter {...props} />

  it('should show render the page', () => {
    render(<SignUp />, { wrapper: wrapper })

    expect(screen.getByPlaceholderText("Email")).toBeVisible()
    expect(screen.getByPlaceholderText("Name")).toBeVisible()
    expect(screen.getByPlaceholderText("Password")).toBeVisible()
    expect(screen.getByPlaceholderText("Repeat Password")).toBeVisible()
    expect(screen.getByText("Sign Up")).toBeVisible()
  });

  it('should be able to sign up', () => {
    render(<SignUp />, { wrapper: wrapper })

    const usernameInput = screen.getByPlaceholderText("Email")
    const nameInput = screen.getByPlaceholderText("Name")
    const passwordInput = screen.getByPlaceholderText("Password")
    const repeatPasswordInput = screen.getByPlaceholderText("Repeat Password")
    const submit = screen.getByText("Sign Up")

    userEvent.type(usernameInput, "test@test.com")
    userEvent.type(nameInput, "Test")
    userEvent.type(passwordInput, "password")
    userEvent.type(repeatPasswordInput, "password")

    fireEvent.click(submit)

    expect(submit).toHaveAttribute("data-loading")
    expect(submit).toBeDisabled()
  });
})
