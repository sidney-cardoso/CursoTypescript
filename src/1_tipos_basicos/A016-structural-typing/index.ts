type verifyUSerFn = (user: User, sentValue: User) => boolean;
type User = { userName: string; password: string };

const verifyUser: verifyUSerFn = (user, sentValue) => {
    return user.userName == sentValue.userName && user.password == sentValue.password;
};

const bdUser = { userName: 'Sidney', password: '1234' };
const sentUser = { userName: 'Sidney', password: '1234' };
const loggedin = verifyUser(bdUser, sentUser);

console.log(loggedin);
