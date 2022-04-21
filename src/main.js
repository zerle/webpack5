import('assets/img/01.png')
import('assets/css/index.css')

class Student {
  constructor () {
    this.age = 30
  }
  getAge () {
    console.log(this.age)
  }
}

const student = new Student()

student.getAge()