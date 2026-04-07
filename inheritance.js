class user {
    constructor(username) {
        this.username = username
    }

    logme() {
        console.log(`username ${this.username}`)
    }
}
   class Teacher extends User{
       constructor(username, email, password) {
           super(username)
           this.email = email 
           this.password = password

       }
       addCourse() {
             console.log(`A new course was added by ${this.username}`)
         }

   }
  const chai = new Teacher("chai", "chai@123gmail.com", "1234")
chai.addCourse()
   

const maslachai = new User("masala", "masala@gmail.com", "123")
maslachai.addCourse()