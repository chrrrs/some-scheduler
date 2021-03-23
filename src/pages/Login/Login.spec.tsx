import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Page: Login', () => {
  const wrapper = (props: any) => <BrowserRouter {...props} />

  it('should render the initial form', () => {
    render(<Login />, { wrapper: wrapper })

    expect(screen.getByPlaceholderText("Email")).toBeVisible()
    expect(screen.getByPlaceholderText("Password")).toBeVisible()
    expect(screen.getByText("Login")).toBeVisible()
  });

  it('should be able to login', () => {
    render(<Login />, { wrapper: wrapper })

    const usernameInput = screen.getByPlaceholderText("Email")
    const passwordInput = screen.getByPlaceholderText("Password")
    const submit = screen.getByText("Login")

    userEvent.type(usernameInput, "test@test.com")
    userEvent.type(passwordInput, "password")

    fireEvent.click(submit)

    expect(submit).toHaveAttribute("data-loading")
    expect(submit).toBeDisabled()
  });
})
