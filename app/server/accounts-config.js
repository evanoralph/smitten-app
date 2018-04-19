export default () => {
    Accounts.onCreateUser(function(options, user) {
        console.log(user);
    })
}