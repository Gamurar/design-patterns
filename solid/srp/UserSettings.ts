// SRP: A class should only have one reason to change.

class User {
  constructor(public username: string, public email: string) {}
}

// Handles user data operations
class UserDataManager {
  saveUser(user: User) {
      console.log('User saved:', user);
  }

  deleteUser(user: User) {
      console.log('User deleted:', user.username);
  }
}

// Handles user notifications
class UserNotifier {
  sendEmail(user: User, message: string) {
      console.log(`Email sent to ${user.email}: ${message}`);
  }
}

export { User, UserDataManager, UserNotifier };
