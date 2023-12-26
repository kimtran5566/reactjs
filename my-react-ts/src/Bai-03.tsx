import React, { ChangeEvent, FormEvent } from "react";

interface formState {
  password: string;
  rememberMe: boolean;
}

class Form extends React.Component<{}, formState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      password: "",
      rememberMe: false,
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!", this.state);
  };

  handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  handleRememberMeChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ rememberMe: event.target.checked });
  };

  render() {
    return (
      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form onSubmit={this.handleSubmit}>
            <img
              className="mb-4"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgupscaler.com%2Fvi&psig=AOvVaw2kTP7qaZZvUZhDlpBVHlJo&ust=1703643969596000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPD3nMCGrIMDFQAAAAAdAAAAABAD"
              alt="Logo"
            />
            <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>
            <div className="form-floating">
              <input
                type="password"
                className="form-control password"
                id="floatingPassword"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.rememberMe}
                  onChange={this.handleRememberMeChange}
                />{" "}
                Remember me
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">2017-2021</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
