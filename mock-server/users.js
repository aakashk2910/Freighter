var faker = require('faker')
function generateUsers () {
  var users = []
  for (var id = 0; id < 100; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    var type = faker.random.arrayElement(["fleet-manager","driver","other"]);
    var country = faker.address.country()
    var city = faker.address.city()
    var salary = faker.random.number({min:400, max:4000})
    var workTime = faker.random.number({min:0, max:60})
    var totalWorkTime = faker.random.number({min:40, max:150})
    users.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "type": type,
      "country": country,
      "city": city,
      "salary": salary,
      "workTime": workTime,
      "totalWorkTime": totalWorkTime
    })
  }
  return { "users": users }
}
module.exports = generateUsers
