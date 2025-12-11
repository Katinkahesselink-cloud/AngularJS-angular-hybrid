export const dashboardDirective: ng.IDirectiveFactory = () => ({
  restrict: "E",
  scope: {},
  template: `
    <div class="jumbotron">
      <h1 class="display-4">User Details App</h1>
      <p class="lead">Welcome to the Application Dashboard!</p>
      <a class="btn btn-primary btn-lg" href="#/users" role="button">Go to Users Details</a>
    </div>
  `
});
